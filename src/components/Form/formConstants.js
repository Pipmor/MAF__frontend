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
    regex: /^(\+996\s?)?(\d{3}\s?){3}$/,
    errorMessage: "Некорректный номер телефона: +996 *** *** ***",
  },
  userEmail: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Некорректный email",
  },
};

export const formatPhoneNumber = (value) => {
  const cleanedValue = value.replace(/[^\d]/g, "");
  let formattedValue = "+996";
  for (let i = 3; i < cleanedValue.length; i += 3) {
    formattedValue += " " + cleanedValue.slice(i, i + 3);
  }
  return formattedValue.slice(0, 16);
};