import axiosPrint from "./axiosPrint";
import i18n from "i18next";

export const getCalendar = async () => {
    try {
        const response = await axiosPrint.get("/blog/calendar/", {
            headers: {
                'Accept-Language': i18n.language // Передаем текущий язык в заголовке запроса
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch calendar data:", error);
        throw error;
    }
};
