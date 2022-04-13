import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:8080/'
    baseURL: 'http://54.193.249.48:8080/'
});

export default api;