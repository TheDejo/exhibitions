const ENVIRONMENT = {
    development: process.env.NEXT_PUBLIC_ENVIRONMENT === 'development',
    production: process.env.NEXT_PUBLIC_ENVIRONMENT === 'production',
};

const PAGE_NEXT = 1;

const COMPANY_LOGO = 'Exhibitions!';

const API = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    error: {
        aborted: {
            code: 'ECONNABORTED',
            description: 'Please check your network connection and try again',
            message: 'Network Error!',
        },
    },
    routes: {
        exhibitions: '/exhibitions',
        singleExhibition: '/exhibitions/%id%',
    },
    timeout: 60000,
}

const CLIENT_ROUTES = {
    home: '/',
    notFound: '/404',
}

const constants = {
    API,
    CLIENT_ROUTES,
    COMPANY_LOGO,
    ENVIRONMENT,
    PAGE_NEXT,
}

export default constants;