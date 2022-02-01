import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import { SingleExhibition } from '@/common/types';
import Button from '@/common/components/Button';
import { useRouter } from 'next/router';
import icons from '@/common/components/Icons';
import Tag from '@/common/components/Tag';

interface IProps {
    data: SingleExhibition;
}

const SingleArtSection = ({ data }: IProps) => {
    const router = useRouter();
    const getDate = (date: Date) => dayjs(date).format('DD.MM.YYYY');
    return (
        <section>
            <div className="container mx-auto py-10 h-screen">
                <Button
                    name="Back"
                    onClick={() => router.back()}
                    className="flex flex-row-reverse justify-center items-center mb-5 text-back-btn text-xl font-normal"
                    icon={icons.Back()}
                />
                <div className="flex flex-col md:flex-row items-end mb-9">
                    <h2 className="text-4xl font-normal text-left md:mr-3 md:w-3/5">{data.title}</h2>
                    <Tag color="green">
                        <p className="text-lg font-normal italic text-left">{`${getDate(data.aic_start_at)} - ${getDate(
                            data.aic_end_at,
                        )}`}</p>
                    </Tag>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <figure className="mr-5 min-w-96 md:col-span-1">
                        <Image
                            src={data.image_url || '/assets/images/default.svg'}
                            width={370}
                            height={260}
                            alt="art"
                        />
                    </figure>
                    <p className="max-w-96 md:col-span-2">{data.description || '-'}</p>
                </div>
            </div>
        </section>
    );
};

export default SingleArtSection;
