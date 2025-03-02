import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/Home/HomePage/HomePage';
import { ProductList } from '../components/Product/ProductList';
import ProductDetail from '../components/Product/ProductDetail';
import { CartList } from '../components/Cart/CartList';
import { CheckOut } from '../components/CheckOut/CheckOut';
import { Login } from '../components/User/Login';
import { Register } from '../components/User/Register';
import { OrderList } from '../components/Order/OrderList'; 
import { Whishlist } from '../components/WishList/Whishlist';
import { Product } from '../components/Admin/Product';
import { ProductMapping } from '../components/Admin/ProductMapping';
import ProtectedRoute from './ProtectedRoute';

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/products' element={<ProductList />}></Route>
                <Route path='/products/:id' element={<ProductDetail />}></Route>
                <Route path='/cart' element={<ProtectedRoute><CartList /></ProtectedRoute>} />
                <Route path='/whishlist' element={<ProtectedRoute><Whishlist /></ProtectedRoute>}></Route>
                <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
                <Route path="/order" element={<OrderList></OrderList>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/admin-product" element={<Product></Product>}></Route>
                <Route path="/product-mapping" element={<ProductMapping></ProductMapping>}></Route>
            </Routes>
        </>
    )
}
