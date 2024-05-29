import axios from "axios";

const postModalData = async (formData) => {
    try {
        const response = await axios.post("http://107.23.142.232:80/api/v1/products/order/", formData, {
        });
        return response.data;
    } catch (error) {
        console.error("Ошибка при отправке данных:", error);
        throw new Error(error);
    }
};

export default postModalData;
