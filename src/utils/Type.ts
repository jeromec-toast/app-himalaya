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
    best_seller: boolean
}

export type ProductFilterType = {
    onlyInStock: boolean,
    bestSellerOnly: boolean,
    sortBy: string,
    ratings: string,
    productSearch: string,
    category: number
}

export type OrderGuid = {

}

export interface IResyncPayload {
    tenantGuid: string
    locationGuid: string
    payrollUuid: string | null
    date: string
}


export type QBOToken =
{
    token: string
    expire: string
    refreshToken: string
    refreshTokenExpire: string
}