import axios from 'axios'

const config = {
    baseURL: 'http://192.168.78.56:80',
    withCredentials: true,
    origin: 'http://localhost:3000'
};

export default axios.create(config);