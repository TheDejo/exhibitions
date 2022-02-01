import React from 'react';
import Layout from '../components/layout';
import PageHead from '@/common/components/PageHead';
import NotFoundSection from '@/pageComponents/NotFound';
import constants from '@/pageComponents/constants';

const { PAGE_HEAD } = constants;

const NotFound = () => {
    return (
        <>
            <PageHead title={PAGE_HEAD.notFound} />
            <Layout>
                <NotFoundSection />
            </Layout>
        </>
    );
};

export default NotFound;
