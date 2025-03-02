import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useCart from "../../../hooks/useCart"
import useWishList from "../../../hooks/useWishList"

export const LeftLayout = () => {
    const navicate = useNavigate()
    const [user, setUser] = useState(false)    

    // Context
    const { cart } = useCart()

    const { wish } = useWishList()

    const goToLogin = () => {
        navicate(`/login`, {})
    }

    const goRegister = () => {
        navicate(`/register`, {})
    }




    return (
        <>
            <Link to="/whishlist">
                <div className="px-3 py-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                        className="cursor-pointer fill-[#000] hover:fill-[#007bff] inline-block" viewBox="0 0 64 64">
                        <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000" />
                    </svg>
                    <span className="absolute left-auto -ml-2 top-3 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{wish.length}</span>
                </div>
            </Link>
            <Link to="/cart">
                <div className="px-3 py-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                        className="cursor-pointer fill-[#000] hover:fill-[#007bff] inline-block" viewBox="0 0 512 512">
                        <path
                            d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                            data-original="#000000"></path>
                    </svg>
                    <span className="absolute left-auto -ml-2 top-3 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{cart.length}</span>
                </div>
            </Link>
            <span onClick={() => setUser(!user)} className="px-1.5 py-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" className="cursor-pointer hover:fill-black"
                    viewBox="0 0 512 512">
                    <path
                        d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-66.869 0-127.037-29.202-168.452-75.511C113.223 338.422 178.948 290 256 290c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90c77.052 0 142.777 48.422 168.452 116.489C383.037 452.798 322.869 482 256 482z"
                        data-original="#000000" />
                </svg>
            </span>
            {user &&
                <div className="bg-white z-20 shadow-md py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] absolute right-0 top-14">
                    <h6 className="font-semibold text-[15px]">Welcome Jerome C</h6>
                    {/* <p className="text-sm text-gray-500 mt-1">Jerome C</p> */}
                    <button onClick={goToLogin} type='button'
                        className="bg-transparent border-2 border-gray-300 hover:border-black rounded px-4 py-2 mt-4 text-sm text-black font-semibold mr-2">Login
                    </button>
                    <button type='button' onClick={goRegister}
                        className="bg-transparent border-2 border-gray-300 hover:border-black rounded px-4 py-2 mt-4 text-sm text-black font-semibold">Sign In
                    </button>
                    <hr className="border-b-0 my-4" />
                    <ul className="space-y-1.5">
                        <li><Link to='/order' className="text-sm text-gray-500 hover:text-black">Order</Link></li>
                        <li><Link to='/admin-product' className="text-sm text-gray-500 hover:text-black">Product</Link></li>
                        <li><a href='' className="text-sm text-gray-500 hover:text-black">Gift Cards</a></li>
                        <li><a href='' className="text-sm text-gray-500 hover:text-black">Contact Us</a></li>
                    </ul>
                    <hr className="border-b-0 my-4" />
                    <ul className="space-y-1.5">
                        <li><a href='' className="text-sm text-gray-500 hover:text-black">Coupons</a></li>
                        <li><a href='' className="text-sm text-gray-500 hover:text-black">Saved Credits</a></li>
                        <li><a href='' className="text-sm text-gray-500 hover:text-black">Contact Us</a></li>
                        <li><a href='' className="text-sm text-gray-500 hover:text-black">Saved Addresses</a></li>
                    </ul>
                </div>
            }
        </>
    )
}