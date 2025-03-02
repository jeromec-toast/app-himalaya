import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { QueryKeyEnum } from '../modals/enum'
import endpoints from '../api/endpoints/endpoints'
import { IMenuMaster } from '../components/Home/type'

export function useAppMenuQuery(): UseQueryResult<any, IMenuMaster[]> {
    return useQuery([QueryKeyEnum.appConfig], endpoints.getMenuQuery)
}
