import axios from 'axios';

const serverAPI = axios.create({
   baseURL: 'http://127.0.0.1:3000',
})

serverAPI.interceptors.request.use(
    async (config) => {
        return config;
    }
)


export default serverAPI;