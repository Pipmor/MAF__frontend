import axiosPrint from "./axiosPrint";

export const getProductsData = async () => {
    const response = await axiosPrint.get("/products/");
    return response.data;
};
