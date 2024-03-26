import axiosPrint from "./axiosPrint";

export const getAchievements = async () => {
  const response = await axiosPrint.get("/products/new/");
  //FIX_ME
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  return response.data;
};
