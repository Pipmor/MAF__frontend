import axios from "axios";

const submitFormData = async (formData) => {
  try {
    const response = await axios.post("http://107.23.142.232:80/api/v1/products/subscribe/", formData, {
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);
    throw new Error(error);
  }
};

export default submitFormData;
