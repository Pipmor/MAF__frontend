import axiosPrint from "./axiosPrint";

export const getContacts = async () => {
  const response = await axiosPrint.get("/contacts/");
  //FIX_ME
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  return response.data;
};
