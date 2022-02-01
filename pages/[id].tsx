import PageHead from '@/common/components/PageHead';
import type { GetServerSideProps, NextPage } from 'next';
import Layout from '../components/layout';
import constants from '@/pageComponents/constants';
import SingleArtSection from '@/pageComponents/SingleArtSection';
import art, { ISingleExhibition } from '@/services/art';
import configConstants from 'config/constants';
import logger from '@logger';

const { PAGE_HEAD } = constants;
const { CLIENT_ROUTES } = configConstants;

interface IProps {
    data: ISingleExhibition;
}

const Home: NextPage<IProps> = ({ data }: IProps) => {
    return (
        <>
            <PageHead title={data.data.title} />
            <Layout>
                <SingleArtSection data={data?.data} />
            </Layout>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.params?.id;

    if (!id) {
        return {
            props: {},
            redirect: {
                destination: CLIENT_ROUTES.notFound,
                parmanent: false,
            },
        };
    }

    const singleArt = await art.getSingleArt(id.toString());
    logger(singleArt);

    if (singleArt.status === 404) {
        return {
            props: {},
            redirect: {
                destination: CLIENT_ROUTES.notFound,
                parmanent: false,
            },
        };
    }

    return {
        props: {
            data: singleArt,
        },
    };
};

export default Home;
