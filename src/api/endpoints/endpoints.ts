import { IMenuCategory, IMenuMaster } from "../../components/Home/type"
import { IImages, IProductMaster } from "../../components/Product/type"
import { CartItemType } from "../../context/CartProvider"
import { WishListMaster } from "../../context/WishListContext"
import { Order, OrderProduct } from "../../hooks/useOrderQuery"
import { IApiResult } from "../../modals/interface"
import { UserProfile } from "../../modals/user"
import { QBOToken } from "../../utils/Type"
import RESTClient from "../rest_client/rest_client"
import { URL_CONSTANTS } from "../util/constant"
import { getBrowserCache } from "../util/functions"
import * as Sentry from '@sentry/browser'

// interface IApiResult<T> {
//   data: T
//   exception?: any
// }

let tenantId = ''
let userRole = ''
let userId = ''
let displayName = ''
let BASE_CONTAINER_URL = 'https://localhost:5002/'

class EndPoints {

  // constructor() {
  //   BASE_CONTAINER_URL = getBrowserCache('ContainerApiBaseUrl') || ''
  //   const cache = JSON.parse(localStorage.getItem('xcCache') || '')
  //   if (cache !== null || cache !== '') {
  //     const newLocal = tenantId = cache.tenant.id
  //     userRole = cache.role.id
  //     userId = cache.user.id
  //     displayName = cache.user.displayName
  //   }
  // }

  async getToken(payload: any): Promise<QBOToken | null> {
    const userId = JSON.parse(JSON.parse(localStorage.getItem('xcCache') || '{}')?.user?.id)
    const response = await execute(() =>
      RESTClient.systemPost(`api.books-query/api/1.0/Books/${userId}/get-token`, payload)
    )
    return setTokenObject(response.data)
  }

  async getMenuQuery(): Promise<IMenuMaster[]> {
    const response = await execute(() =>
      RESTClient.tenantGet(
        `${BASE_CONTAINER_URL}${URL_CONSTANTS.TenantQueryUrl}tenants/10/menu-master`
      )
    )
    return modifyMenuMaster(response.data)
  }

  async getProductQuery(): Promise<IProductMaster[]> {
    const response = await execute(() =>
      RESTClient.tenantGet(
        `${BASE_CONTAINER_URL}${URL_CONSTANTS.TenantQueryUrl}tenants/10/product-master`
      )
    )
    return modifyProductMaster(response.data)
  }

  async getProductMaster(    
    tenantId: number,
    payload: any
  ): Promise<any> {
    const response = await execute(() =>
      RESTClient.tenantPost(
        `${BASE_CONTAINER_URL}${URL_CONSTANTS.TenantQueryUrl}tenants/${tenantId}/products`,
        payload
      )
    )
    return modifyProductMaster(response.data)
  }

  async getCartQuery(): Promise<CartItemType[]> {
    const response = await execute(() =>
      RESTClient.tenantGet(
        `${BASE_CONTAINER_URL}${URL_CONSTANTS.TenantQueryUrl}tenants/10/cart-list`
      )
    )
    return modifyCartList(response.data)
  }

  async getWishListQuery(): Promise<WishListMaster[]> {
    const response = await execute(() =>
      RESTClient.tenantGet(
        `${BASE_CONTAINER_URL}${URL_CONSTANTS.TenantQueryUrl}tenants/10/wish-list`
      )
    )
    return modifyWishList(response.data)
  }

  // async loginUser(username: string, password: string): Promise<any> {
  //   const response = await execute(() =>
  //     RESTClient.tenantGet(
  //       `${BASE_CONTAINER_URL}${URL_CONSTANTS.UserQueryUrl}login-user/${username}/${password}`
  //     )
  //   )
  //   return response;
  // }

  async loginUser(username: string, password: string): Promise<any> {
    const response = await execute(() =>
      RESTClient.tenantGet(
        `${BASE_CONTAINER_URL}${URL_CONSTANTS.UserQueryUrl}login-user/${username}/${password}`
      )
    )
    return modifyUser(response.data)
  }

  async getOrderQuery(): Promise<Order[]> {
    const response = await execute(() =>
      RESTClient.tenantGet(
        `${BASE_CONTAINER_URL}${URL_CONSTANTS.TenantQueryUrl}tenants/10/10/order-list`
      )
    )
    return orderList(response.data)
  }

  async placeOrder(
    payload: any,
    isResync: any
  ): Promise<any> {
    const response = await execute(() =>
      RESTClient.tenantPost(
        `${BASE_CONTAINER_URL}${URL_CONSTANTS.payrollCommand}payrolls/tenants/${tenantId}/locations/resync-payroll?isPayrollConfig=false&isResync=${isResync}`,
        payload
      )
    )
    return response.data
  }
}

const modifyUser = (response:IApiResult)=>{
  const user: UserProfile = {
    userId : response.data.userId,
    userName: response.data.userName,
    email: response.data.email,
    gender: response.data.gender,
    firstName: response.data.firstName,
    lastName: response.data.lastName,
    role: response.data.role,
    retry: response.data.retry,
    tenantId: response.data.tenantId,
    isSystemUser: response.data.isSystemUser,
    userType: response.data.userType,
    mobileNo: response.data.mobileNo,
    alternativeNo: response.data.alternativeNo,
    createdOn: response.data.createdOn,
    modifiedOn: response.data.modifiedOn,
    lastLogin: response.data.lastLogin,
    profileImage: response.data.profileImage,
    active: response.data.active
  }

  return user;
}

const setTokenObject = (data: any) => {
  if (data.exception !== null)
    return null
  else {
    localStorage.setItem('qbtoken', JSON.stringify({
      token: data.data.OAuth2AccessToken,
      expire: data.data.OAuth2AccessTokenExpiration,
      refreshToken: data.data.OAuth2RefreshToken,
      refreshTokenExpire: data.data.OAuth2RefreshTokenExpiry
    }))
    return ({
      token: data.data.OAuth2AccessToken,
      expire: data.data.OAuth2AccessTokenExpiration,
      refreshToken: data.data.OAuth2RefreshToken,
      refreshTokenExpire: data.data.OAuth2RefreshTokenExpiry
    }) as QBOToken
  }
}

async function execute<T>(action: () => Promise<T>): Promise<T> {
  try {
    return await action()
  } catch (ex) {
    Sentry.captureException(ex)
    throw ex
  }
}

const modifyMenuMaster = (response: IApiResult) => {
  const menuMaster: IMenuMaster[] = []
  response.data.forEach((x: any) => {

    const categories: IMenuCategory[] = []

    x.category && x.category.forEach((item: any) => {
      const category: IMenuCategory = {
        active: item.active,
        category: item.category,
        categoryId: item.categoryId,
        name:item.name
      }
      categories.push(category)
    });

    menuMaster.push({
      menuId: x.menuId,
      menuName: x.menuName,
      subMenu: x.subMenu,
      orderBy: x.orderBy,
      active: x.active,
      category: categories
    })
  })

  return menuMaster
}

const modifyCartList = (response: IApiResult) => {

  const cartList: CartItemType[] = []

  response.data.forEach((x: any) => {
    
    const images: IImages[] = []

    x.images && x.images.forEach((item: any) => {
      const image: IImages = {
        imageId: item.imageId,
        poster: item.poster,
        main: x.main,
        active: x.active,
        orderBy: item.orderBy
      }
      images.push(image)
    });

    cartList.push({
      productId: x.productId,
      quantity: x.quantity,
      orderBy: x.orderBy,
      userId: x.userId,
      price: x.price,
      productName: x.productName,
      images: images
    })
  })
  return cartList
}

const modifyWishList = (response: IApiResult) => {

  const wishList: WishListMaster[] = []

  response.data.forEach((x: any) => {

    const images: IImages[] = []

    x.images && x.images.forEach((item: any) => {
      const image: IImages = {
        imageId: item.imageId,
        poster: item.poster,
        main: x.main,
        active: x.active,
        orderBy: item.orderBy
      }
      images.push(image)
    });

    wishList.push({
      productId: x.productId,
      orderBy: x.orderBy,
      userId: x.userId,
      price: x.price,
      productName: x.productName,
      images: images
    })
  })
  return wishList
}


const orderList = (response: IApiResult) => {
  const orders: Order[] = []

  response.data.forEach((x: any) => {

    const productOrder: OrderProduct[] = []

    x.products && x.products.forEach((item: any) => {
      const product: OrderProduct = {
        productId: item.productId,
        productName: item.productName,
        price: item.price,
        quantity: item.quantity,
        poster: item.poster
      }
      productOrder.push(product)
    });

    orders.push({
      id: x.id,
      orderReference: x.orderReference,
      tenantId: x.tenantId,
      userId: x.userId,
      total: x.total,
      products: productOrder,
      orderBy: x.orderBy
    })
  })
  return orders 
}


const modifyProductMaster = (response: IApiResult) => {
    const productMaster: IProductMaster[] = []
    response.data.forEach((x: any) => {

      const images: IImages[] = []

      x.images && x.images.forEach((item: any) => {
        const image: IImages = {
          imageId: item.imageId,
          poster: item.poster,
          main: x.main,
          active: x.active,
          orderBy: item.orderBy
        }
        images.push(image)
      });

      productMaster.push({
        productId: x.productId,
        tenantId: x.tenantId,
        productName: x.productName,
        productDescription: x.productDescription,
        productCode: x.productCode,
        fullDescription: x.fullDescription,
        specification: x.specification,
        story: x.story,
        packQuantity: x.packQuantity,
        quantity: x.quantity,
        total: x.total,
        price: x.price,
        category: x.category,
        rating: x.rating,
        active: x.active,
        trending: x.trending,
        userBuyCount: x.userBuyCount,
        return: x.return,
        created: x.created,
        modified: x.modified,
        in_stock: x.in_stock,
        best_seller: x.best_seller,
        deleveryDate: x.deleveryDate,
        offer: x.offer,
        orderBy: x.orderBy,
        userId: x.userId,
        overview: x.overview,
        long_description: x.long_description,
        images: images
      })
    })

    return productMaster
  }

  const endpoints = new EndPoints()

  export default endpoints