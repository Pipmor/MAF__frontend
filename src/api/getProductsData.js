import axiosPrint from "./axiosPrint";
import i18n from "i18next";

export const getProductsData = async () => {
  try {
    const response = await axiosPrint.get("/products/", {
      headers: {
        'Accept-Language': i18n.language
      }
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products data:", error);

    if (error.response) {
      // Сервер ответил с кодом статуса, который выходит за пределы диапазона 2xx
      console.error('Response error data:', error.response.data);
      console.error('Response error status:', error.response.status);
      console.error('Response error headers:', error.response.headers);
    } else if (error.request) {
      // Запрос был сделан, но ответа не получено
      console.error('Request error:', error.request);
    } else {
      // Ошибка при настройке запроса
      console.error('Error message:', error.message);
    }

    throw error;
  }
};
