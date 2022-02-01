import {Exhibition, Pagination, PaginationPayload, SingleExhibition } from '@/common/types';
import constants from '@config/constants';
import request from '@config/services/request';

const {
    API: { routes },
} = constants;

export interface IExhibition  {
    data: Exhibition[];
    pagination: Pagination;
}

export interface ISingleExhibition   {
    data: SingleExhibition;
}

const getArts = ({ pageLimit, page }: PaginationPayload): Promise<IExhibition> => {
    return request.get({
        config: {
            params: {
                page,
                perpage: pageLimit,
            },
        },
        route: routes.exhibitions,
    });
};

const getSingleArt = (id: string ): Promise<ISingleExhibition> =>
    request.get({ route: routes.singleExhibition.replace('%id%', id) });


const wallet = {
    getArts,
    getSingleArt,
};

export default wallet;