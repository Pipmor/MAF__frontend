import axiosPrint from "./axiosPrint";

export const getNewsVideo = async () => {
    const response = await axiosPrint.get("/blog/video/");
    //FIX_ME
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    return response.data;
};
