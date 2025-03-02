import { Link, useNavigate } from 'react-router-dom';
import { ReactElement, memo } from 'react';
import { Rating } from './Rating';
import { ReducerAction, ReducerActionType } from '../../context/CartProvider';
import useWishList from '../../hooks/useWishList';
import { IProductMaster } from './type';

type PropsType = {
  product: IProductMaster,
  dispatchCart: React.Dispatch<ReducerAction>,
  CART_REDUCER_ACTIONS: ReducerActionType,
  inCart: boolean,
}

export const ProductCard = ({ product, dispatchCart, CART_REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {
  const { productId, productName, overview, images, price, rating, in_stock, best_seller } = product;
  const navigate = useNavigate()
  const onAddToCart = () => dispatchCart({ type: CART_REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })

  const { dispatch, REDUCER_ACTIONS, wish } = useWishList()

  const inWishList: boolean = wish.some(item => item.productId === productId)

  const onAddToWishList = () => {
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: product,
    })
  }

  const onRemoveToWishList = () => {
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: product,
    })
  }

  const onGoToCart = () => {
    navigate(`/cart`, {
    })
  }
  const buttonText = in_stock ? 'Add To Cart' : 'Out of Stock';
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${productId}`} className="relative">
        {best_seller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>}
        <img className="rounded-t-lg w-full h-64" src={images[0].poster} alt={productName} />
      </Link>
      <div className="p-5">
        <Link to="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
        </Link>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p> */}

        <div className="flex items-center my-2">
          <Rating rating={rating} />
        </div>

        <p className="flex justify-between items-center">
          <span className="text-lxl dark:text-gray-200">
            <p><span className='line-through'>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.total)} </span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price)}</p>
          </span>
          {!inWishList && <button onClick={onAddToWishList} type="button">
            <div className="bg-gray-50 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="fill-[#400]" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>
          </button>}
          {inWishList && <button onClick={onRemoveToWishList} type="button">
            <div className="bg-gray-50 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="fill-[#15f345]" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>
          </button>}
          {/* <button onClick={onAddToCart} disabled={!product?.in_stock} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white ${product.in_stock ? "bg-blue-700 rounded-lg hover:bg-blue-800" : "bg-blue-700 rounded-lg hover:bg-red-800 cursor-not-allowed"}`}>{buttonText}<i className="ml-1 bi bi-plus-lg"></i></button> */}
          {!inCart && <button onClick={onAddToCart} disabled={!product?.in_stock} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white ${product.in_stock ? "bg-blue-700 rounded-lg hover:bg-blue-800" : "bg-blue-700 rounded-lg hover:bg-red-800 cursor-not-allowed"}`}>{buttonText}<i className="ml-1 bi bi-plus-lg"></i></button>}
          {inCart && <button onClick={onGoToCart} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">View Cart<i className="ml-1 bi bi-cart-fill"></i></button>}
          {/* <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
        </p>
      </div>
    </div>
  )
}


function areProductsEqual({ product: prevProduct, inCart: prevInCart }: PropsType, { product: nextProduct, inCart: nextInCart }: PropsType) {
  return (
    Object.keys(prevProduct).every(key => {
      return prevProduct[key as keyof IProductMaster] ===
        nextProduct[key as keyof IProductMaster]
    }) && prevInCart === nextInCart
  )
}
const MemoizedProduct = memo<typeof ProductCard>(ProductCard, areProductsEqual)

export default MemoizedProduct