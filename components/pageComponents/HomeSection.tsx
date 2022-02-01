import React from 'react';
import ArtCard from '@/common/blocks/ArtCard';
import constants from './constants';
import logger from '@logger';
import { useExhibitionContext } from './context/ExhibitionContext';

const { SCREEN_TEXTS } = constants;

const HomeSection: React.FC = () => {
    const { data } = useExhibitionContext();
    logger(data);
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 min-h-screen">
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
            <div className="container mx-auto py-10 flex justify-center items-center">
                <p className="text-2xl italic font-normal">{SCREEN_TEXTS.loading}</p>
            </div>
        </section>
    );
};

export default HomeSection;
