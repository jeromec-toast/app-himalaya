import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { QueryKeyEnum } from '../modals/enum'
import endpoints from '../api/endpoints/endpoints'
import { IProductMaster } from '../components/Product/type'

export function useProductMasterQuery(): UseQueryResult<any, IProductMaster[]> {
    return useQuery([QueryKeyEnum.getProductQuery], endpoints.getProductQuery)
}
