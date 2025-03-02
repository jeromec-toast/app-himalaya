import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { QueryKeyEnum } from '../modals/enum'
import endpoints from '../api/endpoints/endpoints'
import { WishListMaster } from '../context/WishListContext'

export function useWishListQuery(): UseQueryResult<any, WishListMaster[]> {
    return useQuery([QueryKeyEnum.getWishListQuery], endpoints.getWishListQuery)
}