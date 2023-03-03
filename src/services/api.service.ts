import axios from "axios";

export const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/`,
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


export const get = async <T>(URL: string, params = {}) => {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')
    return await axiosClient.get<T>(`${URL}?${queryString}`).then((response) => response);
};

export const post = async <T>(URL: string, payload?: unknown) => {
    return await axiosClient.post<T>(`${URL}`, payload).then((response) => response);
};

export const patch = async <T>(URL: string, payload: unknown) => {
    return await axiosClient.patch<T>(`${URL}`, payload).then((response) => response);
};

export const _delete = async <T>(URL: string) => {
    return await axiosClient.delete<T>(`${URL}`).then((response) => response);
};

// Interceptors
axiosClient.interceptors.response.use(
    function (response) {
        return response;
      }, 
      function (error) {
        const res = error.response;
        if (res.status == 401) {
        //   Request token Refresh
        //   Redirect to Login
        }
        console.error(`=== Error in api request. STATUS = ${res.status}. === `, res);
        return Promise.reject(error);
      }
)

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