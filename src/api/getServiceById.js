import axiosPrint from "./axiosPrint";

export const getServiceById = async ({ params }) => {
  const response = await axiosPrint.get(`/services/${params.name}`);
  return response.data;
};
