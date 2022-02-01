import useGetArts from '@/common/hooks/useGetArts';
import ExhibitionContext from '@/pageComponents/context/ExhibitionContext';
import React, { Children } from 'react';

interface IProps {
    children: React.ReactNode;
}
const Layout: React.FC<IProps> = ({ children }: IProps) => {
    const arts = useGetArts();
    return (
        <ExhibitionContext.Provider value={arts}>
            <header className="h-20 bg-exhibition-grey flex items-center antialiased">
                <p className="text-5xl font-normal text-white pl-5">Exhibitions!</p>
            </header>
            <div>{children}</div>
        </ExhibitionContext.Provider>
    );
};

export default Layout;
