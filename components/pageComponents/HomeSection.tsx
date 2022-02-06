import React, { useRef, useState, useEffect } from 'react';
import ArtCard from '@/common/blocks/ArtCard';
import constants from './constants';
import configConstant from '@config/constants';
import { useExhibitionContext } from './context/ExhibitionContext';
import logger from '@logger';
import Pagination from '@/common/components/Pagination';

const { SCREEN_TEXTS } = constants;
const { PAGE_NEXT } = configConstant;

const HomeSection: React.FC = () => {
    const { data, page, setPage } = useExhibitionContext();
    const loading = typeof data === 'undefined';

    return (
        <section className="flex flex-col justify-center items-center">
            <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 min-h-screen">
                {loading && <h3>loading...</h3>}
                {data?.data.map(({ id, title, image_url, aic_start_at, aic_end_at }) => (
                    <ArtCard
                        key={id}
                        image={image_url}
                        startDate={aic_start_at}
                        endDate={aic_end_at}
                        exhibitionName={title}
                        id={id.toString()}
                    />
                ))}
            </div>
            <Pagination data={data} setPage={setPage} page={page} loading={loading} />
        </section>
    );
};

export default HomeSection;
