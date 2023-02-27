import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'http://localhost:3000/api',
});

const authToken = localStorage.getItem('authToken');

axiosClient.defaults.headers.common = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: authToken === null ? '' : authToken,
};


// All request will wait 7 seconds before timeout
axiosClient.defaults.timeout = 7000;

axiosClient.defaults.withCredentials = true;


export const get = async (URL: string) => {
    return await axiosClient.get(`${URL}`).then((response) => response);
};

export const post = async (URL: string, payload?: unknown) => {
    return await axiosClient.post(`${URL}`, payload).then((response) => response);
};

export const patch = async (URL: string, payload: unknown) => {
    return await axiosClient.patch(`${URL}`, payload).then((response) => response);
};

export const _delete = async (URL: string) => {
    return await axiosClient.delete(`${URL}`).then((response) => response);
};


export const setAuthToken = (token: string) => {
    localStorage.setItem('authToken', token);
    axiosClient.defaults.headers.common = {
        Authorization: token,
    };
};

export const clearToken = () => {
    localStorage.clear();
    axiosClient.defaults.headers.common = {
        Authorization: '',
    };
};


const apiClient = {
    post,
    get,
    patch,
    _delete,
    setAuthToken,
};


export default apiClient;