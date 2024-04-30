import axiosPrint from "./axiosPrint";

export const getWidget = async () => {
    try {
        const response = await axiosPrint.get("/chat/chats/");
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении данных о виджете чата:", error);
        throw error;
    }
};
