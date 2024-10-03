import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiClient = axios.create({
    baseURL: 'https://api.ebay.com',
    headers: {
        Authorization: `Bearer ${process.env.EBAY_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
    }
});

export default apiClient;
