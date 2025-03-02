import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { QueryKeyEnum } from '../modals/enum'
import endpoints from '../api/endpoints/endpoints'
import { CartItemType } from '../context/CartProvider'

export function useCartListQuery(): UseQueryResult<any, CartItemType[]> {
    return useQuery([QueryKeyEnum.getCartQuery], endpoints.getCartQuery)
}