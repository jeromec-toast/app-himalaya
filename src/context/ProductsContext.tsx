import { ReactElement, createContext, useEffect, useState } from "react"
import { initStateProductList } from "./ContextType"
import { useProductMasterQuery } from "../hooks/useProductMasterQuery"
import { IProductMaster } from "../components/Product/type"

export type UseProductsContextType = { products: IProductMaster[] }
const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<IProductMaster[]>(initStateProductList)

    const { data, isLoading } = useProductMasterQuery()

    useEffect(() => {
        setProducts(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    // useEffect(() => {
    //     async function fetchProducts(): Promise<any> {
    //       const data = await getProductList(null)
    //       setProducts(data)
    //     }
    //     fetchProducts();
    //   }, []);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext 
