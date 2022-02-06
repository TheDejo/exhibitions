import React, { useEffect, useRef, useState } from 'react';
import constants from '@/pageComponents/constants';
import configConstant from '@config/constants';
import { IExhibition } from '@config/services/art';
import logger from '@logger';

interface IProps {
    data: IExhibition | undefined;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    page: number;
    loading: boolean;
}

const { SCREEN_TEXTS } = constants;
const { PAGE_NEXT } = configConstant;

const Pagination: React.FC<IProps> = ({ data, setPage, page, loading }: IProps) => {
    const [element, setElement] = useState<HTMLDivElement | null>(null);
    if (typeof window !== 'undefined') {
        const loader = useRef(() => setPage(page));
        const observer = useRef(
            new IntersectionObserver(
                (entries) => {
                    const first = entries[0];
                    if (first.isIntersecting) {
                        loader.current();
                    }
                },
                { threshold: 1 },
            ),
        );

        useEffect(() => {
            loader.current = () => setPage(page + PAGE_NEXT);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, [page]);

        useEffect(() => {
            const currentElement = element;
            const currentObserver = observer.current;
            if (currentElement) {
                currentObserver.observe(currentElement);
            }
            return () => {
                if (currentElement) {
                    currentObserver.unobserve(currentElement);
                }
            };
        }, [element]);
    }
    return data?.pagination ? (
        <div className="container mx-auto py-10 flex justify-center items-center">
            {!loading && data?.pagination?.total_pages > data?.pagination?.current_page && (
                <div ref={setElement} className="text-2xl italic font-normal">
                    {SCREEN_TEXTS.loading}
                </div>
            )}
        </div>
    ) : null;
};

export default Pagination;
