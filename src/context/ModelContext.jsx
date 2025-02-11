"use client";
import { createContext, useState } from "react";

export const ModalContext = createContext();

const modalState = [
  {
    id: "START",
    title: false,
    open: false,
    maximixed: true,
  },
  {
    id: "PROJECTS",
    title: {
      text: "Projects in portfolio",
      icon: "/file-explorer.png",
    },
    open: false,
    maximixed: true,
  },
  {
    id: "EXPERIENCE",
    title: {
      text: "Work History",
      icon: "/history.png",
    },
    open: false,
    maximixed: true,
  },
  {
    id: "CONTACT",
    title: {
      text: "Contact Me",
      icon: "/contact.png",
    },
    open: false,
    maximixed: true,
  },
];

export const ModalContextProvider = ({ children }) => {
  const [modals, setModals] = useState(modalState);

  const isAnyModalOpen =
    modals.filter((modal) => modal?.open == true).length > 0;
  const isModalOpen = (id) => modals.find((modal) => modal?.id == id)?.open;
  const isModalMaximised = (id) =>
    modals.find((modal) => modal?.id == id)?.maximixed;

  const openModal = (id) =>
    setModals(
      modals.map((prev) => (prev?.id == id ? { ...prev, open: true } : prev))
    );
  const closeModal = (id) =>
    setModals(
      modals.map((prev) => (prev?.id == id ? { ...prev, open: false } : prev))
    );
  const closeAllModals = () =>
    setModals(modals?.map((modal) => ({ ...modal, open: false })));
  const toggleModal = (id) =>
    setModals(
      modals.map((prev) =>
        prev?.id == id ? { ...prev, open: !prev?.open } : prev
      )
    );
  console.log(modals.map((prev) =>
    prev?.id == "START" ? { ...prev, open: !prev?.open } : prev
  ));
  return (
    <ModalContext.Provider
      value={{
        modals,
        isAnyModalOpen,
        isModalOpen,
        isModalMaximised,
        openModal,
        closeModal,
        toggleModal,
        closeAllModals,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
