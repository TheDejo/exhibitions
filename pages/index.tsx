import PageHead from '@/common/components/PageHead';
import HomeSection from '@/pageComponents/HomeSection';
import type { NextPage } from 'next';
import Layout from '../components/layout';
import constants from '@/pageComponents/constants';

const { PAGE_HEAD } = constants;

const Home: NextPage = () => {
    return (
        <>
            <PageHead title={PAGE_HEAD.home} />
            <Layout>
                <HomeSection />
            </Layout>
        </>
    );
};

export default Home;
