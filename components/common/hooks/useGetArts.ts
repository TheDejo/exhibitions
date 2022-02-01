import art from '@/services/art';
import {IExhibitionContext} from '@/pageComponents/context/ExhibitionContext';
import { useState } from 'react';
import useSWR from 'swr';
import config from '@config/constants';

const {
    API: { routes },
} = config;

const useGetArts = (): IExhibitionContext => {
    const [page, setPage] = useState(1);

    const fetcher = async () => {
        return await art.getArts(page);
    };
    const { data } = useSWR([routes.exhibitions, page], fetcher);

    return {
        data,
        page,
        setPage,
    };
};

export default useGetArts;
