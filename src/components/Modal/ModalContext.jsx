import { createContext, useContext } from "react";

export const ModalContext = createContext(null);

export const useModal = () => {
  const setShowModal = useContext(ModalContext);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return { openModal, closeModal };
};
