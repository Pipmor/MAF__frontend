// getProductById.js

import axiosPrint from "./axiosPrint";
import i18n from "i18next";

export const getProductById = async (productId) => {
  try {
    const response = await axiosPrint.get(`/products/${productId}`, {
      headers: {
        'Accept-Language': i18n.language
      }
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch product data:", error);
    throw error;
  }
};
