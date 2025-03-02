import { useContext } from "react"
import ProductsContext from "../context/ProductsContext"
import { UseProductsContextType } from "../context/ProductsContext"

const useProducts = (): UseProductsContextType => {
    return useContext(ProductsContext)
}

export default useProducts