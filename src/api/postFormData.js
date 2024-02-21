import axiosPrint from "./axiosPrint";

const submitFormData = async (formData) => {
  try {
    const response = await axiosPrint.post("/application/", formData);
    return response;
  } catch (error) {
    console.log("Post data erroring: ", error);
    throw new Error(error);
  }
};

export default submitFormData;
