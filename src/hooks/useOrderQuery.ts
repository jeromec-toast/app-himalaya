import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { QueryKeyEnum } from "../modals/enum";
import endpoints from "../api/endpoints/endpoints";

export type OrderProduct = {
    productId: number,
    productName: string,
    quantity: number,
    price: number,
    poster: string
}

export type Order = {
    id: number,
    tenantId: number,
    total: number,
    orderBy: number,
    userId: number,
    orderReference: string,
    products: OrderProduct[]
}

export function useOrderQuery(): UseQueryResult<any, Order[]> {
    return useQuery([QueryKeyEnum.getOrderQuery], endpoints.getOrderQuery)
}