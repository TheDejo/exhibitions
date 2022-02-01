import React from 'react';
import { useRouter } from 'next/router';
import Button from '@/common/components/Button';
import configConstants from '@config/constants';
import constants from './constants';

const { CLIENT_ROUTES } = configConstants;
const { SCREEN_TEXTS } = constants;
const NotFoundSection: React.FC = () => {
    const router = useRouter();
    return (
        <section className="container mx-auto h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold">{SCREEN_TEXTS.oops}</h1>
            <Button
                onClick={() => router.push(CLIENT_ROUTES.home)}
                name="Go to Home"
                className="p-5 bg-black text-white text-medium rounded-md mt-12"
            />
        </section>
    );
};

export default NotFoundSection;
