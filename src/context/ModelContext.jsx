"use client";
import { createContext, useState } from "react";

const modalObj = {
  START: false,
  PROJECTS: false,
  CONTACT: false,
  EXPERIENCE: false,
};
export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modals, setModals] = useState(modalObj);

  const openModal = (modal) => setModals({ ...modals, [modal]: true });
  const closeModal = (modal) => setModals({ ...modals, [modal]: false });
  const toggleModal = (modal) =>
    setModals({ ...modals, [modal]: !modals[modal] });

  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, toggleModal, modals }}
    >
      {children}
    </ModalContext.Provider>
  );
};
