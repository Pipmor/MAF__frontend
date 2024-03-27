import axiosPrint from "./axiosPrint";

export const getContacts = async () => {
  try {
    const response = await axiosPrint.get("http://107.23.142.232:80/api/v1/blog/contact/");
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных о контактах:", error);
    throw error;
  }
};
