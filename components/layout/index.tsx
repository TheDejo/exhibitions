import useGetArts from '@/common/hooks/useGetArts';
import ExhibitionContext from '@/pageComponents/context/ExhibitionContext';
import React from 'react';
import config from '@config/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { COMPANY_LOGO, CLIENT_ROUTES } = config;
interface IProps {
    children: React.ReactNode;
}
const Layout: React.FC<IProps> = ({ children }: IProps) => {
    const arts = useGetArts();
    return (
        <ExhibitionContext.Provider value={arts}>
            <header className="h-20 bg-exhibition-grey flex items-center antialiased sticky top-0 z-50">
                <Link href={CLIENT_ROUTES.home} passHref>
                    <p className="text-5xl font-normal text-white pl-5 cursor-pointer">{COMPANY_LOGO}</p>
                </Link>
            </header>
            <div>{children}</div>
        </ExhibitionContext.Provider>
    );
};

export default Layout;
