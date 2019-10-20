import axios from 'axios'

const config = {
    baseURL: 'http://localhost',
    withCredentials: true,
    origin: 'http://localhost:3000'
};

export default axios.create(config);