import React, { useContext, createContext, ReactNode, useReducer } from 'react'
import useProducts from '../hooks/useProducts'
import { filterReducer } from '../reducers/filterReducers'
import { FiterContextType, InitialProduct, filterInitialState } from './ContextType'
import { IProductMaster } from '../components/Product/type'

const FilterContext = createContext<FiterContextType>(InitialProduct)

interface ProviderProps {
    children: ReactNode
}

export const FilterProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);
    const { products } = useProducts()

    function bestSeller(products: IProductMaster[]) {
        return state.bestSellerOnly ? products.filter(product => product.best_seller === true) : products;
    }

    function inStock(products: IProductMaster[]) {
        return state.onlyInStock ? products.filter(product => product.in_stock === true) : products;
    }

    function sort(products: IProductMaster[]) {
        if (state.sortBy === "lowtohigh") {
            return products.sort((a, b) => Number(a.price) - Number(b.price));
        }
        if (state.sortBy === "hightolow") {
            return products.sort((a, b) => Number(b.price) - Number(a.price));
        }
        return products;
    }
    function rating(products: IProductMaster[]) {
        if (state.ratings === "4STARSABOVE") {
            return products.filter(product => product.rating >= 4);
        }
        if (state.ratings === "3STARSABOVE") {
            return products.filter(product => product.rating >= 3);
        }
        if (state.ratings === "2STARSABOVE") {
            return products.filter(product => product.rating >= 2);
        }
        if (state.ratings === "1STARSABOVE") {
            return products.filter(product => product.rating >= 1);
        }
        return products;
    }

    function category(products: IProductMaster[] | null | undefined) {
        if (!products || !state || state.category == null) return products ?? []; // Ensure products and state exist
        return state.category === 0 ? products : products.filter(product => product.categrory === state.category);
    }
    
    function productSearch(products: IProductMaster[] | null | undefined) {
        if (!products || !state || state.productSearch === "") return products ?? []; // Ensure products and state exist
        
        const searchQuery = state.productSearch ? state.productSearch.trim().toLowerCase() : ""; // Convert search term to lowercase
    
        return state.productSearch === null
            ? products
            : products.filter(product => 
                product.productName.toLowerCase().includes(searchQuery) // Use includes() for partial matching
            );
    }

    const filteredProductList = productSearch(category(rating(sort(inStock(bestSeller(products))))));

    const value: FiterContextType = {
        state,
        dispatch,
        products: filteredProductList
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export function useFilterContext() {
    return useContext(FilterContext)
}

export default FilterContext