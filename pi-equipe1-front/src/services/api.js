import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
    // baseURL: 'http://18.231.120.229:8080'
});

export default api;