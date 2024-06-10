import axiosPrint from "./axiosPrint";
import i18n from "i18next";

export const getPublishData = async () => {
    try {
        const response = await axiosPrint.get("/blog/publish/", {
            headers: {
                'Accept-Language': i18n.language // Передаем текущий язык в заголовке запроса
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch publish data:", error);
        throw error;
    }
};
