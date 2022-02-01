import art from '@/services/art';
import {IExhibitionContext} from '@/pageComponents/context/ExhibitionContext';
import { useState } from 'react';
import useSWR from 'swr';
import config from '@config/constants';

const {
    API: { routes },
} = config;

const useGetArts = (
    limit?: number,
): IExhibitionContext => {
    const [pagination, setPagination] = useState({ page: 1, pageLimit: limit ?? 12 });
    const { page, pageLimit } = pagination;

    const fetcher = async () => {
        return await art.getArts({ ...pagination });
    };
    const { data } = useSWR([routes.exhibitions, page, pageLimit], fetcher);

    return {
        data,
        pagination,
        setPagination,
    };
};

export default useGetArts;
