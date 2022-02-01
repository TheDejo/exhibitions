import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import Tag from '@/common/components/Tag';

interface IProps {
    image?: string;
    startDate: Date;
    endDate: Date;
    exhibitionName: string;
    id: string;
}

const ArtCard: React.FC<IProps> = ({ image, id, startDate, endDate, exhibitionName }: IProps) => {
    const router = useRouter();
    const getDate = (date: Date) => dayjs(date).format('DD.MM.YYYY');
    return (
        <button onClick={() => router.push(id)} className="p-0 flex flex-col items-start">
            <figure>
                <Image src={image || '/assets/images/default.svg'} width={320} height={226} alt="art" />
            </figure>
            <div>
                <h2 className="text-lg font-normal text-left w-64">{exhibitionName}</h2>
                <Tag>
                    <p className="text-sm font-normal italic text-left w-auto">{`${getDate(startDate)} - ${getDate(
                        endDate,
                    )}`}</p>
                </Tag>
            </div>
        </button>
    );
};

ArtCard.defaultProps = {
    image: '/assets/images/default.svg',
};

export default ArtCard;
