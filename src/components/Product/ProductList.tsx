import { ReactElement, useState } from "react";
import ProductCard from "./ProductCard";
import { FilterBar } from "../Filter/FilterBar";
import { useFilterContext } from "../../context/FilterContext";
import useCart from "../../hooks/useCart";
import { CartItemType, ReducerAction, ReducerActionType } from "../../context/CartProvider";
import { ProductEmptyCard } from "./ProductEmptyCard";
import { Link } from "react-router-dom";

type PropsType = {
    item: CartItemType,
    dispatchCart: React.Dispatch<ReducerAction>,
    CART_REDUCER_ACTIONS: ReducerActionType,
}

export const ProductList = () => {
    const [show, setShow] = useState(false);

    const { dispatchCart, REDUCER_ACTIONS, cart } = useCart()

    const { products,dispatch } = useFilterContext();

    let prodCount = [1, 2, 3, 4, 5, 6]

    let pageContent: ReactElement | ReactElement[] = <p>No product found...</p>

    if (products?.length) {
      pageContent = products.map((product) => {
        const inCart: boolean = cart.some(
          (item) => item.productName === product.productName
        );
        return (
          <ProductCard
            key={product.productId}
            product={product}
            dispatchCart={dispatchCart}
            CART_REDUCER_ACTIONS={REDUCER_ACTIONS}
            inCart={inCart}
          />
        );
      });
    } else {
      return (
        <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 rounded">
          <div className="my-5">
            <p className="bi bi-cart text-green-600 text-7xl mb-5"></p>
            <p>Hey, it feels so light!</p>
            <p>There is no product for your category or search.</p>
          </div>
          <Link
            to="/products"
            type="button"
            onClick={() => dispatch({ type: "CLEAR_FILTER" })}
            className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
          >
            Continue Shopping <i className="ml-2 bi bi-cart"></i>
          </Link>
        </section>
      );
    }
    return (
        <>
            <main>
                <section className="my-5">
                    <div className="max-w-7xl m-auto pr-2 pl-2">
                        <div className="my-5 flex justify-between">
                            <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All Product ({products?.length})</span>
                            <span>
                                <button onClick={() => setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button">
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                </button>
                            </span>
                        </div>
                    </div>
                    {/* <div className="my-5 flex justify-between">
                        <span className="text-2xl font-semibold dark:text-slate-100 mb-5"></span>
                        <span>
                            <button onClick={() => setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button">
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                            </button>
                        </span>
                    </div> */}

                    <div className="flex flex-wrap justify-center lg:flex-row">
                        <div className="font-[sans-serif]">
                            <div className="p-2 mx-auto lg:max-w-7xl sm:max-w-full">
                                {/* <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Premium Sneakers</h2> */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-xl:gap-4 gap-6">
                                    {pageContent}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {show && <FilterBar setShow={setShow} />}
            </main>
        </>
    )
}


