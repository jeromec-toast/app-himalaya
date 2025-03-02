import { ReactElement, createContext, useEffect, useMemo, useReducer } from "react"
import { IImages } from "../components/Product/type"
import { useWishListQuery } from "../hooks/useWishListQuery"

export type WishListMaster = {
    productId: number,
    productName: string,
    price: number,
    images: IImages[],
    userId: number,
    orderBy: number
}

// type define
type WishListType = {
    whishList: WishListMaster[]
}

// assing initial state
const wishListState: WishListType = { whishList: [] }

const WISHLIST_REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    SET: "SET",
    CLEAR: "CLEAR"
}

export type WishListReducerActionType = typeof WISHLIST_REDUCER_ACTION_TYPE

export type WishListReducerAction = {
    type: string,
    payload?: any
}

const reducer = (state: WishListType, action: WishListReducerAction): WishListType => {
    switch (action.type) {
        case WISHLIST_REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error('action.payload missing in ADD action')
            }

            const { productName, userId, price, productId, orderBy, images } = action.payload

            const filteredWishList: WishListMaster[] = state.whishList.filter(item => item.productId !== productId)

            return { ...state, whishList: [...filteredWishList, { productName, price, productId, userId, orderBy, images }] }
        }
        case WISHLIST_REDUCER_ACTION_TYPE.CLEAR: {
            return { ...state, whishList: [] }
        }
        case WISHLIST_REDUCER_ACTION_TYPE.REMOVE:{
            if (!action.payload) {
                throw new Error('action.payload missing in REMOVE action')
            }

            const { productId } = action.payload

            const filteredWishList: WishListMaster[] = state.whishList.filter(item => item.productId !== productId)

            return { ...state, whishList: [...filteredWishList] }
        }
        case WISHLIST_REDUCER_ACTION_TYPE.SET: {
            return { ...state, whishList: [...action.payload] }
        }
        default:
            throw new Error('Unidentified reducer action type')
    }
}


const useWishListContext = (initWishState: WishListType) => {
    const { data, isLoading } = useWishListQuery()
    useEffect(() => {
        if (!isLoading) {
            dispatch({
                type: WISHLIST_REDUCER_ACTION_TYPE.SET,
                payload: data,
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    const [state, dispatch] = useReducer(reducer, initWishState)

    const REDUCER_ACTIONS = useMemo(() => {
        return WISHLIST_REDUCER_ACTION_TYPE
    }, [])

    const totalItems = state.whishList.reduce((previousValue, WishListMaster) => {
        return previousValue
    }, 0)

    const wish = state.whishList.sort((a, b) => {
        const itemA = Number(a.productName.slice(-4))
        const itemB = Number(b.productName.slice(-4))
        return itemA - itemB
    })

    return { dispatch, REDUCER_ACTIONS, totalItems, wish }
}

export type UseWishListContextType = ReturnType<typeof useWishListContext>

const initWishContextState: UseWishListContextType = {
    dispatch: () => { },
    REDUCER_ACTIONS: WISHLIST_REDUCER_ACTION_TYPE,
    totalItems: 0,
    wish: [],
}

const WishListContext = createContext<UseWishListContextType>(initWishContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const WishListProvider = ({ children }: ChildrenType): ReactElement => {
    return (
        <WishListContext.Provider value={useWishListContext(wishListState)}>
            {children}
        </WishListContext.Provider>
    )
}

export default WishListContext 
