import axiosPrint from "./axiosPrint";

export const getProductById = async ({ params }) => {
  const response = await axiosPrint.get(`/products/${params.name}`);
  return response.data;
};
