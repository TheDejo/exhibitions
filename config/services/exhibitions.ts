import axios from 'axios';
import logger from '@logger';
import constants from '../constants';

const { API: { baseURL, timeout }} = constants;

const exhibitions = axios.create({
    baseURL,
    timeout,
});

exhibitions.interceptors.request.use(
    (config) => config,
    (error) => {
        logger({ error });
        return Promise.reject(error);
    },
)

exhibitions.interceptors.response.use(
    (response) => response,
    (error) => {
        logger({ error });
        return Promise.reject(error);
    }
);

export default exhibitions;