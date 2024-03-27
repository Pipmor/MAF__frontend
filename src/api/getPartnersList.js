import axiosPrint from "./axiosPrint";

// Обновляем функцию для запроса к новому API URL
export const getPartnersList = async () => {
  const response = await axiosPrint.get("http://107.23.142.232:80/api/v1/blog/partners/");

  return response.data;
};
