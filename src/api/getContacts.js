import axiosPrint from "./axiosPrint";

export const getContacts = async () => {
  try {
    const response = await axiosPrint.get("/blog/contact/");
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных о контактах:", error);
    throw error;
  }
};
