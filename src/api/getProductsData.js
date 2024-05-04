import axiosPrint from "./axiosPrint";

export const getProductsData = async () => {
  try {
    const response = await axiosPrint.get("/products/");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products data:", error);
    throw error; // Ловим и перебрасываем ошибку для обработки в компоненте или другом месте
  }
};
