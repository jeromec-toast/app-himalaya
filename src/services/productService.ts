// import { ProductType } from "../context/ContextType";

export async function getProductList(query: any) {
    const response = await fetch(`http://localhost:8000/products?name_like=${query ? query : ""}`)
    if (!response.ok) {
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    return await response.json()
    // return setDefaultData(data)z
}

export async function getMenuList(query: any) {
    const response = await fetch(`http://localhost:8000/menuMaster`)
    if (!response.ok) {
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    return await response.json()
    // return setDefaultData(data)
}

// const setDefaultData = (data: any) => {
//     const products: ProductType[] = []
//     if (data) {
//         data.forEach((item: ProductType) => {
//             products.push({
//                 id: item.id,
//                 name: item.name,
//                 overview: item.overview,
//                 long_description: item.long_description,
//                 price: item.price,
//                 poster: item.poster,
//                 image_local: item.image_local,
//                 rating: item.rating,
//                 in_stock: item.in_stock,
//                 size: item.size,
//                 best_seller: item.best_seller,
//                 feature: item.feature
//             })
//         })
//     }
//     return products
// }

export async function getProductById(id: string) {
    const response = await fetch(`http://localhost:8000/products/${id}`)
    if (!response.ok) {
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    return await response.json()
    // return setDefaultData(data)
}

export async function getUserOrders() {
    const response = await fetch('http://localhost:8000/orderGuide')
    if (!response.ok) {
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}
export async function getUser() {
    const response = await fetch('http://localhost:8000/users')
    if (!response.ok) {
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}

export function CheckIsNotNull(obj: any) {
    return (
        obj != null && obj !== '' && obj !== 'null' && typeof obj !== 'undefined'
    )
}