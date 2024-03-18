import axios from "axios";

const postEmailData = async (formData) => {
    try {
        const response = await axios.post("http://107.23.142.232:80/api/v1/blog/questions/", formData, {
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "X-CSRFToken": "fRKMBpc7irb4uEZyH1tSAD4bLFS7qjkk87484NXrA8uCOCkEc0Q5Hzm7BG8Espsh"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Ошибка при отправке данных:", error);
        throw new Error(error);
    }
};

export default postEmailData;
