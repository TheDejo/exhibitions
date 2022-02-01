import React, { useRef, useState, useEffect } from 'react';
import ArtCard from '@/common/blocks/ArtCard';
import constants from './constants';
import configConstant from '@config/constants';
import { useExhibitionContext } from './context/ExhibitionContext';

const { SCREEN_TEXTS } = constants;
const { PAGE_NEXT } = configConstant;

const HomeSection: React.FC = () => {
    const { data, page, setPage } = useExhibitionContext();
    const [element, setElement] = useState<HTMLDivElement | null>(null);
    const loading = typeof data === 'undefined';
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
            <div className="container mx-auto py-10 flex justify-center items-center">
                {!loading && data.pagination.total_pages > data.pagination.current_page && (
                    <div ref={setElement} className="text-2xl italic font-normal">
                        {SCREEN_TEXTS.loading}
                    </div>
                )}
            </div>
        </section>
    );
};

export default HomeSection;
