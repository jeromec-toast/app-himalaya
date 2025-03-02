import { useState, memo } from 'react'
import { useNavigate } from "react-router-dom";
import { CartItemType, ReducerAction, ReducerActionType } from '../../context/CartProvider'
import useCart from '../../hooks/useCart';
import { CartItem } from './CartItem'
import { CardEmpty } from './CardEmpty';

type PropsType = {
    item: CartItemType,
    dispatchCart: React.Dispatch<ReducerAction>,
    CART_REDUCER_ACTIONS: ReducerActionType,
}

export const CartList = () => {
    const navicate = useNavigate()
    const [checkout, setCheckout] = useState(false);
    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()

    const goToCheckOut = () => {
        navicate(`/checkout`, {})
    }

    const pagecontent = cart.length ?
        <>
            <div className="font-sans">
                <div className="grid lg:grid-cols-3 gap-10 p-4">
                    <div className="lg:col-span-2 bg-white divide-y">
                        <div className="flex gap-2 border-b pb-4">
                            <h2 className="text-2xl font-bold text-black flex-1">Shopping Cart ({cart.length})</h2>
                            <h3 className="text-xl font-bold text-black">{totalItems} Items</h3>
                        </div>
                        <div className="flex gap-2 border-b pb-4 pt-4">
                            <h2 className="text-base font-bold text-black flex-1">Description</h2>
                            <h3 className="text-base font-bold text-black">Quantity / Price</h3>
                        </div>
                        {cart.map((item) => (
                            <CartItem
                                key={item.productId}
                                item={item}
                                dispatchCart={dispatch}
                                CART_REDUCER_ACTIONS={REDUCER_ACTIONS}
                            />
                        ))}
                    </div>

                    <div className="shadow-md p-6 lg:sticky lg:top-0 h-max">
                        {/* <h3 className="text-lg font-bold text-gray-800 bord er-b pb-4">Order Summary</h3> */}
                        <h3 className="text-xl font-bold text-black border-b pb-4">Order Summary</h3>

                        <ul className="text-gray-800 divide-y mt-6">
                            <li className="flex flex-wrap gap-4 text-base py-4">Total Item <span className="ml-auto font-bold">{totalItems}</span></li>
                            <li className="flex flex-wrap gap-4 text-base py-4">Shipping <span className="ml-auto font-bold">$4.00</span></li>
                            <li className="flex flex-wrap gap-4 text-base py-4">Tax <span className="ml-auto font-bold">$4.00</span></li>
                            <li className="flex flex-wrap gap-4 text-base py-4 font-bold">Total <span className="ml-auto">{totalPrice}</span></li>
                        </ul>

                        <div className="mt-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Apply promo code</h3>
                            <div className="flex border border-blue-600 overflow-hidden max-w-md rounded">
                                <input type="email" placeholder="Promo code"
                                    className="w-full outline-none bg-white text-gray-600 text-base px-4 py-2.5" />
                                <button type='button' className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-6 text-base text-white">
                                    Apply
                                </button>
                            </div>
                        </div>
                        
                        <button onClick={goToCheckOut} type="button" className="mt-10 text-base px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded">Check
                            out
                        </button>
                    </div>
                </div>
            </div>
        </> : <CardEmpty flag={true} />

    const content = (
        <>
            {pagecontent}
        </>
    )

    return content
}

function areItemsEqual({ item: prevItem }: PropsType, { item: nextItem }: PropsType) {
    return Object.keys(prevItem).every(key => {
        return prevItem[key as keyof CartItemType] === nextItem[key as keyof CartItemType]
    })
}

const MemoizedCartLineItem = memo<typeof CartItem>(CartItem, areItemsEqual)

export default MemoizedCartLineItem


















//   <div className="flex items-start max-sm:flex-col gap-8 py-6">

//   <div className="h-48 shrink-0">
//       <img src='https://readymadeui.com/images/product3.webp' className="w-full h-full object-contain rounded-md" />
//   </div>

//   <div className="flex items-start gap-6 w-full">
//       <div>
//           <h3 className="text-lg font-bold text-gray-800 mb-4">Gray T-Shirt</h3>
//           <div>
//               <h6 className="text-base text-gray-800">Size: <strong className="ml-2">7.5</strong></h6>
//               <h6 className="text-base text-gray-800 mt-2">Color: <strong className="ml-2">Gray</strong></h6>
//           </div>

//           <div className="mt-6 flex flex-wrap gap-6">
//               <button type="button" className="font-semibold text-gray-800 text-sm flex items-center gap-2 shrink-0">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 inline cursor-pointer" viewBox="0 0 24 24">
//                       <path
//                           d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
//                           data-original="#000000"></path>
//                       <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
//                           data-original="#000000"></path>
//                   </svg>
//                   Remove
//               </button>
//               <button type="button" className="font-semibold text-gray-800 text-sm flex items-center gap-2 shrink-0">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-current inline" viewBox="0 0 64 64">
//                       <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
//                   </svg>
//                   Move to wish list
//               </button>
//           </div>
//       </div>

//       <div className="ml-auto text-right">
//           <div className="flex">
//               <button type="button" className="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 124 124">
//                       <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
//                   </svg>
//               </button>
//               <button type="button" className="bg-transparent w-10 h-10 font-semibold text-black text-base">
//                   1
//               </button>
//               <button type="button" className="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 42 42">
//                       <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
//                   </svg>
//               </button>
//           </div>

//           <div className="mt-6">
//               <h4 className="text-lg font-bold text-gray-800"><span className="text-gray-800 mr-2 font-medium">$22.5</span></h4>
//               <h4 className="text-lg font-bold text-gray-800 mt-2">$18.5</h4>
//           </div>
//       </div>
//   </div>
// </div>

// <div className="flex items-start max-sm:flex-col gap-8 py-6">

//   <div className="h-48 shrink-0">
//       <img src='https://readymadeui.com/images/product7.webp' className="w-full h-full object-contain rounded-md" />
//   </div>

//   <div className="flex items-start gap-6 w-full">
//       <div>
//           <h3 className="text-lg font-bold text-gray-800 mb-4">Black T-Shirt</h3>
//           <div>
//               <h6 className="text-base text-gray-800">Size: <strong className="ml-2">7.5</strong></h6>
//               <h6 className="text-base text-gray-800 mt-2">Color: <strong className="ml-2">Black</strong></h6>
//           </div>
//           <div className="mt-6 flex flex-wrap gap-6">
//               <button type="button" className="font-semibold text-gray-800 text-sm flex items-center gap-2 shrink-0">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 inline cursor-pointer" viewBox="0 0 24 24">
//                       <path
//                           d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
//                           data-original="#000000"></path>
//                       <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
//                           data-original="#000000"></path>
//                   </svg>
//                   Remove
//               </button>
//               <button type="button" className="font-semibold text-gray-800 text-sm flex items-center gap-2 shrink-0">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-current inline" viewBox="0 0 64 64">
//                       <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
//                   </svg>
//                   Move to wish list
//               </button>
//           </div>
//       </div>

//       <div className="ml-auto text-right">
//           <div className="flex">
//               <button type="button" className="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 124 124">
//                       <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
//                   </svg>
//               </button>
//               <button type="button" className="bg-transparent w-10 h-10 font-semibold text-black text-base">
//                   1
//               </button>
//               <button type="button" className="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 42 42">
//                       <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
//                   </svg>
//               </button>
//           </div>

//           <div className="mt-6">
//               <h4 className="text-lg font-bold text-gray-800"><span className="text-gray-800 mr-2 font-medium">$22.5</span></h4>
//               <h4 className="text-lg font-bold text-gray-800 mt-2">$18.5</h4>
//           </div>
//       </div>
//   </div>
// </div>