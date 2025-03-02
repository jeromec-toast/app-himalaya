export interface IImages {
  imageId: number,
  poster: string,
  main: true,
  active: true,
  orderBy: number
}

export type productDataType = {
    // id: string
    // name: string
    // slug: string
    // brand?: string
    // categories: string
    // clothingCategories?: string // add in schema
    // price: number
    // stock: number
    // forWhom: string
    // height?: string[]
    // heightDescription?: string
    // age?: string[]
    // ageDescription: string
    // itemDescription: string
    // featured?: boolean
    // images: string[]
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
    featured?: boolean,
    slug: string,
    userBuyCount: number,
    returnType: number,
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
  
  export type productDataTypeKey = keyof productDataType