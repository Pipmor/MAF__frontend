export const emptyNameError = "Введите ваше имя";
export const emptyPhoneError = "Введите ваш номер телефона";
export const errorBorderColor = "2px solid red";
export const initialFormState = {
  userName: "",
  userPhone: "",
  userEmail: "",
  userComment: "",
};

export const initialErrorState = {
  userName: "",
  userPhone: "",
  userEmail: "",
};

export const initialEmptyState = {
  userName: "",
  userPhone: "",
};

export const initialBlurState = {
  userName: false,
  userPhone: false,
  userEmail: false,
};

export const inputValidation = {
  userName: {
    regex: /^[a-zA-Zа-яА-Я\s]+$/,
    errorMessage: "Некорректное имя",
  },
  userPhone: {
    regex: /^\+996\s(\d{3}\s){2}\d{3}$/,
    errorMessage: "Некорректный номер телефона: +996 *** *** ***",
  },
  userEmail: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Некорректный email",
  },
};

export const formatPhoneNumber = (value) => {
  let cleanedValue = value.replace(/[^\d]/g, "");
  cleanedValue = cleanedValue.slice(0, 9);
  return cleanedValue.replace(/(\d{3})(?=\d)/g, "$1 ").trim();
};
