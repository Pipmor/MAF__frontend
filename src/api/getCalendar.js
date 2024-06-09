import axiosPrint from "./axiosPrint";

export const getCalendar = async () => {
    const response = await axiosPrint.get("/blog/calendar/");
    return response.data;
};
