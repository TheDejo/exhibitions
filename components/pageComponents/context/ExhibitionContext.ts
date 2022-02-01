import { PaginationPayload } from '@/common/types';
import { IExhibition } from '@/services/art';
import React, { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface IExhibitionContext {
    data: IExhibition | undefined;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}

const initialState = {
    data: undefined,
    page: 1,
    setPage: () => {},
};

const ExhibitionContext = createContext<IExhibitionContext>(initialState);

export const useExhibitionContext: () => IExhibitionContext = () => useContext(ExhibitionContext);

export default ExhibitionContext;
