import {Exhibition, Pagination, SingleExhibition } from '@/common/types';
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
    status?: number;
}

const getArts = ( page: number ): Promise<IExhibition> => {
    return request.get({
        config: {
            params: {
                page,
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