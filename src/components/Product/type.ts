export interface IImages {
    imageId: number,
    poster: string,
    main: true,
    active: true,
    orderBy: number
}

export interface IProductMaster {
    productId: number,
    tenantId: number,
    productName: string,
    productDescription: string,
    productCode: string,
    fullDescription: string,
    specification: string,
    story: string,
    packQuantity: number,
    quantity: number,
    total: number,
    price: number,
    categrory: number,
    rating: number,
    active: boolean,
    trending: number,
    userBuyCount: number,
    return: number,
    created: string
    modified: string,
    in_stock: boolean,
    best_seller: boolean,
    deleveryDate: string,
    offer: number,
    orderBy: number,
    userId: number,
    overview: string,
    long_description: string,
    images: IImages[]
}