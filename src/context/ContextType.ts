import { IProductMaster } from "../components/Product/type"

export const initStateProductList: IProductMaster[] = [
    {
        "productId": 1001,
        "tenantId": 10,
        "productName": "Apple",
        "productDescription": "Apple",
        "productCode": "SD101",
        "fullDescription": "",
        "specification": "",
        "story": "",
        "packQuantity": 10,
        "quantity": 100,
        "total": 100,
        "price": 200,
        "category": 1,
        "rating": 1,
        "active": true,
        "trending": 1,
        "userBuyCount": 50,
        "return": 2,
        "created": "date",
        "modified": "date",
        "in_stock": true,
        "best_seller":true,
        "deleveryDate": "5",
        "offer": 50,
        "orderBy": 15,
        "userId": 1,
        "overview": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
        "long_description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.",
        "images": [
            {
                "imageId": 1,
                "poster": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
                "main":true,
                "active":true,
                "orderBy": 1
            }
        ]
    }
]

export type ProductType = {
    id: number,
    name: string,
    overview: string,
    long_description: string,
    price: number,
    poster: string,
    image_local: string,
    rating: number,
    in_stock: boolean,
    size: number,
    best_seller: boolean,
    feature: boolean
}

export type ProductFilterType = {
    onlyInStock: boolean,
    bestSellerOnly: boolean,
    sortBy: string,
    ratings: string,
    productSearch: string,
    category: number
}

export const filterInitialState = {
    "onlyInStock": false,
    "bestSellerOnly": false,
    "sortBy": "null",
    "ratings": "null",
    "productSearch": "",
    "category": 0
}

export const noOpFn = () => { }

export interface FiterContextType {
    state: ProductFilterType
    dispatch: any,
    products: IProductMaster[]
}

export const InitialProduct: FiterContextType = {
    state: filterInitialState,
    dispatch: noOpFn,
    products: initStateProductList
}