import { PaginationPayload } from '@/common/types';
import { IExhibition } from '@/services/art';
import React, { createContext, useContext } from 'react';

export interface IExhibitionContext {
    data: IExhibition | undefined;
    pagination: PaginationPayload;
    setPagination: ({ page, pageLimit }: PaginationPayload) => void;
}

const initialState = {
    data: undefined,
    pagination: {
        page: 1,
        pageLimit: 12,
    },
    setPagination: () => {},
};

const ExhibitionContext = createContext<IExhibitionContext>(initialState);

export const useExhibitionContext: () => IExhibitionContext = () => useContext(ExhibitionContext);

export default ExhibitionContext;
