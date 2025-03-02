import { useMemo, useReducer, createContext, ReactElement, useEffect } from "react"
import { IImages } from "../components/Product/type"
import { useCartListQuery } from "../hooks/useCartListQuery"

export interface CartItemType {
    productId: number,
    productName: string,
    price: number,
    quantity: number,
    images: IImages[],
    userId: number,
    orderBy: number
}

type CartStateType = { cart: CartItemType[] }

const initCartState: CartStateType = { cart: [] }

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT",
    SET: "SET"
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
    type: string,
    payload?: any,
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error('action.payload missing in ADD action')
            }

            const { productName, userId, price, productId, orderBy, images } = action.payload

            const filteredCart: CartItemType[] = state.cart.filter(item => item.productId !== productId)

            const itemExists: CartItemType | undefined = state.cart.find(item => item.productId === productId)

            const quantity: number = itemExists ? itemExists.quantity + 1 : 1

            return { ...state, cart: [...filteredCart, { productName, price, quantity, productId, userId, orderBy, images }] }
        }
        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error('action.payload missing in REMOVE action')
            }

            const { productId } = action.payload

            const filteredCart: CartItemType[] = state.cart.filter(item => item.productId !== productId)

            return { ...state, cart: [...filteredCart] }
        }
        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) {
                throw new Error('action.payload missing in QUANTITY action')
            }

            const { quantity, productId } = action.payload

            const itemExists: CartItemType | undefined = state.cart.find(item => item.productId === productId)

            if (!itemExists) {
                throw new Error('Item must exist in order to update quantity')
            }

            const updatedItem: CartItemType = { ...itemExists, quantity }

            const filteredCart: CartItemType[] = state.cart.filter(item => item.productId !== productId)

            return { ...state, cart: [...filteredCart, updatedItem] }
        }
        case REDUCER_ACTION_TYPE.SUBMIT: {
            return { ...state, cart: [] }
        }
        case REDUCER_ACTION_TYPE.SET: {
            return { ...state, cart: [...action.payload] }
        }
        default:
            throw new Error('Unidentified reducer action type')
    }
}

const useCartContext = (initCartState: CartStateType) => {
    const { data, isLoading } = useCartListQuery()

    useEffect(() => {
        if (!isLoading) {
            dispatch({
                type: REDUCER_ACTIONS.SET,
                payload: data,
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    const [state, dispatch] = useReducer(reducer, initCartState)

    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE
    }, [])

    const totalItems = state.cart.reduce((previousValue, cartItem) => {
        return previousValue + cartItem.quantity
    }, 0)

    const totalPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'INR' }).format(
        state.cart.reduce((previousValue, cartItem) => {
            return previousValue + (cartItem.quantity * cartItem.price)
        }, 0)
    )

    const cart = state.cart.sort((a, b) => {
        const itemA = Number(a.productName.slice(-4))
        const itemB = Number(b.productName.slice(-4))
        return itemA - itemB
    })

    return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart }
}

export type UseCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: UseCartContextType = {
    dispatch: () => { },
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItems: 0,
    totalPrice: '',
    cart: [],
}

const CartContext = createContext<UseCartContextType>(initCartContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
    return (
        <CartContext.Provider value={useCartContext(initCartState)}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext 