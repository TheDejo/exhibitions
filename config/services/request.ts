import logger from '@logger';
import { AxiosRequestConfig } from 'axios';
import exhibitions from './exhibitions';


const get = async <T>({ route, config }: { route: string; config?: AxiosRequestConfig }): Promise<T> => {
    const options: AxiosRequestConfig = {
        ...config,
    };
    try {
        const response = await exhibitions.get(route, options);
        return response.data as T;
    } catch (error: any) {
        logger({ error });
        return error?.response?.data;
    }
};

const requests = {
    get,
}

export default requests;