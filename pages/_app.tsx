import '../styles/globals.css';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import logger from '@logger';
import 'styles/nprogress.css';
import Router from 'next/router';
import NProgress from 'nprogress';

export const reportWebVitals = (metric: NextWebVitalsMetric): void => logger({ metric });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
