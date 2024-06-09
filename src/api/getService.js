import axiosPrint from "./axiosPrint";

export const getService = async () => {
    const response = await axiosPrint.get("/blog/service/");
    return response.data;
};
