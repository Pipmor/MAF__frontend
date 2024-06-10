import axiosPrint from "./axiosPrint";
import i18n from "i18next";

export const getProductsData = async () => {
  try {
    const response = await axiosPrint.get("/products/", {
      headers: {
        'Accept-Language': i18n.language
      }
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products data:", error);
    throw error;
  }
};
