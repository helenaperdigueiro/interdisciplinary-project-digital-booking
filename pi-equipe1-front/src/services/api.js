import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/'
    // baseURL: 'http://15.228.221.184:8080/'
});

export default api;