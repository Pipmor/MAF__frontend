import axios from 'axios';

const API_URL = '/blog/video/';

export const getNewsVideo = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching products data:', error);
        return null;
    }
};
