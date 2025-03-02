import React, { useState } from 'react'
import { CartItemType, ReducerAction, ReducerActionType } from '../../context/CartProvider'
import useWishList from '../../hooks/useWishList'

type PropsType = {
    item: CartItemType,
    dispatchCart: React.Dispatch<ReducerAction>,
    CART_REDUCER_ACTIONS: ReducerActionType,
}

export const CartItem = ({ item, dispatchCart, CART_REDUCER_ACTIONS }: PropsType) => {
    const [alert, setAlert] = useState(false)
    const { dispatch, REDUCER_ACTIONS } = useWishList()

    const onAddToWishList = () => {
        dispatch({
            type: REDUCER_ACTIONS.ADD,
            payload: item,
        })
        onRemoveFromCart()
    }

    const lineTotal: number = (item.quantity * item.price)

    // const highestQty: number = 20 > item.qty ? 20 : item.qty

    // const optionValues: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // const options: ReactElement[] = optionValues.map(val => {
    //     return <option key={`opt${val}`} value={val}>{val}</option>
    // })

    const onRemoveQty = () => {
        if (item.quantity !== 1) {
            dispatchCart({
                type: CART_REDUCER_ACTIONS.QUANTITY,
                payload: { ...item, quantity: Number(item.quantity - 1) }
            })
        }
        else {
            setAlert(true)
        }
    }

    const onAddQty = () => {
        if (item.quantity < 10) {
            dispatchCart({
                type: CART_REDUCER_ACTIONS.QUANTITY,
                payload: { ...item, quantity: Number(item.quantity + 1) }
            })
        }
        else {
            setAlert(true)
        }
    }

    const onRemoveFromCart = () => dispatchCart({
        type: CART_REDUCER_ACTIONS.REMOVE,
        payload: item,
    })
    return (
        <>
            <div className="flex items-start max-sm:flex-col gap-8 py-6">
                <div className="h-48 shrink-0">
                    {item.images && <img src={item.images[0].poster} alt={item.productName} className="w-full h-full object-contain rounded-md" />}
                </div>
                <div className="flex items-start gap-6 w-full">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">{item.productName}</h3>
                        <div>
                            {/* <h6 className="text-base text-gray-800">Size: <strong className="ml-2">7.5</strong></h6>
                            <h6 className="text-base text-gray-800 mt-2">Color: <strong className="ml-2">Black</strong></h6> */}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-6">
                            <button onClick={onRemoveFromCart} type="button" className="font-semibold text-gray-800 text-sm flex items-center gap-2 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 inline cursor-pointer" viewBox="0 0 24 24">
                                    <path
                                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                        data-original="#000000"></path>
                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                        data-original="#000000"></path>
                                </svg>
                                Remove
                            </button>
                            <button onClick={onAddToWishList} type="button" className="font-semibold text-gray-800 text-sm flex items-center gap-2 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-current inline" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                </svg>
                                Move to wish list
                            </button>
                        </div>
                    </div>

                    <div className="ml-auto text-right">
                        <div className="flex">
                            <button onClick={onRemoveQty} type="button" className="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 124 124">
                                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                </svg>
                            </button>
                            <button type="button" className="bg-transparent w-10 h-10 font-semibold text-black text-base">
                                {item.quantity}
                            </button>
                            <button onClick={onAddQty} type="button" className="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 42 42">
                                    <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="mt-6">
                            {/* <h4 className="text-lg font-bold text-gray-800"><span className="text-gray-800 mr-2 font-medium">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lineTotal)}</span></h4> */}
                            <h4 className="text-lg font-bold text-gray-800 mt-2">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}</h4>
                        </div>
                    </div>
                </div>


                {alert &&
                    <div
                        className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                        <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
                            <svg onClick={() => setAlert(false)} xmlns="http://www.w3.org/2000/svg"
                                className="w-3.5 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 float-right" viewBox="0 0 320.591 320.591">
                                <path
                                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                    data-original="#000000"></path>
                                <path
                                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                    data-original="#000000"></path>
                            </svg>
                            <div className="my-8 flex items-start space-x-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 shrink-0 fill-[#333]" viewBox="0 0 512 512">
                                    <path
                                        d="M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-8.005-8.213-21.13-8.393-29.35-.387-8.213 7.998-8.386 21.137-.388 29.35l77.492 79.561a20.687 20.687 0 0 0 14.869 6.275 20.744 20.744 0 0 0 14.288-5.694l147.373-139.762c8.316-7.888 8.668-21.027.774-29.344z"
                                        data-original="#000000" />
                                    <path
                                        d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 470.487c-118.265 0-214.487-96.214-214.487-214.487 0-118.265 96.221-214.487 214.487-214.487 118.272 0 214.487 96.221 214.487 214.487 0 118.272-96.215 214.487-214.487 214.487z"
                                        data-original="#000000" />
                                </svg>
                                <div>
                                    <h4 className="text-xl text-[#333] font-semibold">There should be a minimum and maximum order quantity 1 to 10</h4>
                                </div>
                            </div>
                            <button onClick={() => setAlert(false)} type="button"
                                className="px-6 py-2.5 min-w-[150px] w-full rounded text-white text-sm font-semibold border-none outline-none bg-[#333] hover:bg-[#111]">ok</button>
                        </div>
                    </div>}
            </div>
        </>
    )
}