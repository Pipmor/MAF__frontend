import axiosPrint from "./axiosPrint";

export const getServicesData = async () => {
  const response = await axiosPrint.get("/service_list/");
  return response.data;
};
