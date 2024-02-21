import axiosPrint from "./axiosPrint";

export const getCustomersList = async () => {
  const response = await axiosPrint.get("/our_customer_list/");

  return response.data;
};
