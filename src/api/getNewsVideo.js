import axios from 'axios';

const API_URL = 'http://107.23.142.232:80/api/v1/blog/video/';

export const getProductsData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching products data:', error);
        return null;
    }
};
