import axios from 'axios';
import {
    useStore
} from 'vuex';

const createAxiosInstance = () => {
    const store = useStore();

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8800',
        headers: {
            Authorization: `Bearer ${store.state.CurrentUser.token}`,
        },
    });

    // Interceptors for handling token updates
    axiosInstance.interceptors.request.use(
        (config) => {
            config.headers.Authorization = `Bearer ${store.state.CurrentUser.token}`;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default createAxiosInstance;