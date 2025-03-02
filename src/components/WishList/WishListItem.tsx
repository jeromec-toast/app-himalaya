import { WishListMaster, WishListReducerAction, WishListReducerActionType } from "../../context/WishListContext"
import useCart from "../../hooks/useCart"

type PropsType = {
    item: WishListMaster,
    dispatchWishList: React.Dispatch<WishListReducerAction>,
    WISH_LIST_REDUCER_ACTIONS: WishListReducerActionType,
}

export const WishListItem = ({ item, dispatchWishList, WISH_LIST_REDUCER_ACTIONS }: PropsType) => {
    const { dispatch, REDUCER_ACTIONS } = useCart()

    const onRemoveFromWishList = () => dispatchWishList({
        type: WISH_LIST_REDUCER_ACTIONS.REMOVE,
        payload: item,
    })

    const onAddToCart = () => {
        dispatch({
            type: REDUCER_ACTIONS.ADD,
            payload: { ...item, qty: 1 }
        })
        onRemoveFromWishList()
    }

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
                            <h6 className="text-base text-gray-800">Quantity: <strong className="ml-2">10</strong> seeds</h6>
                            {/* <h6 className="text-base text-gray-800 mt-2">Color: <strong className="ml-2">Black</strong></h6> */}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-6">
                            <button onClick={onRemoveFromWishList} type="button" className="font-semibold text-gray-800 text-sm flex items-center gap-2 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 inline cursor-pointer" viewBox="0 0 24 24">
                                    <path
                                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                        data-original="#000000"></path>
                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                        data-original="#000000"></path>
                                </svg>
                                Remove
                            </button>

                            <button onClick={onAddToCart} type="button" className="font-semibold text-gray-800 text-sm flex items-center gap-2 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
                                    <path
                                        d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                        data-original="#000000"></path>
                                </svg>
                                Move to Cart
                            </button>
                        </div>
                    </div>

                    <div className="ml-auto text-right">
                        <div className="mt-6">
                            {/* <h4 className="text-lg font-bold text-gray-800"><span className="text-gray-800 mr-2 font-medium">5</span></h4> */}
                            <h4 className="text-lg font-bold text-gray-800 mt-2">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price)}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}