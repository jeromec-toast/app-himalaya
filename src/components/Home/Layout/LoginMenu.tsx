import { Link } from "react-router-dom"
import { useAuth } from "../../../context/useAuth"

export const LoginMenu = () => {
    const { logout } = useAuth()
    return (
        <>
            <hr className="border-b-0 my-4" />
            <ul className="space-y-1.5">
                <li><Link to='/order' className="text-sm text-gray-500 hover:text-black">Order</Link></li>
                <li><Link to='/admin-product' className="text-sm text-gray-500 hover:text-black">Product</Link></li>
                <li><Link to='/product-mapping' className="text-sm text-gray-500 hover:text-black">Product Mapping</Link></li>
                {/* <li><a href='' className="text-sm text-gray-500 hover:text-black">Gift Cards</a></li>
                        <li><a href='' className="text-sm text-gray-500 hover:text-black">Contact Us</a></li> */}
            </ul>
            <hr className="border-b-0 my-4" />
            <ul className="space-y-1.5">
                <li><a href='' className="text-sm text-gray-500 hover:text-black">Coupons</a></li>
                <li><a href='' className="text-sm text-gray-500 hover:text-black">Saved Credits</a></li>
                <li><a href='' className="text-sm text-gray-500 hover:text-black">Contact Us</a></li>
                <li><a href='' className="text-sm text-gray-500 hover:text-black">Saved Addresses</a></li>
                <li><Link to="/" onClick={logout} className="text-sm text-gray-500 hover:text-black font-semibold">Logout</Link></li>
            </ul>
        </>
    )
}