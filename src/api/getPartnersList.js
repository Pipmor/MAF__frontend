import axiosPrint from "./axiosPrint";

export const getPartnersList = async () => {
  const response = await axiosPrint.get("/blog/partners/");

  return response.data;
};
