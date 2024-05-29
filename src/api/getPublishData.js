import axiosPrint from "./axiosPrint";

export const getPublishData = async () => {
    try {
        const response = await axiosPrint.get("/blog/publish/");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch products data:", error);
        throw error;
    }
};
