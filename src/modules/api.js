import axios from 'axios'

const config = {
    baseURL: 'http://172.20.10.4',
    withCredentials: true,
    origin: 'http://localhost:3000'
};

export default axios.create(config);