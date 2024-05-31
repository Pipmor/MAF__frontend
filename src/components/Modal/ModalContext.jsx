// ModalContext.jsx
import { createContext, useContext, useState } from "react";

export const ModalContext = createContext(null);

export const useModal = () => {
  const setShowModal = useContext(ModalContext);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return { openModal, closeModal };
};

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
      <ModalContext.Provider value={setShowModal}>
        {children}
        {showModal && <Modal />}
      </ModalContext.Provider>
  );
};
