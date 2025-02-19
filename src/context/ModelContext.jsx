"use client";
import { createContext, useState } from "react";

export const ModalContext = createContext();

const modalState = [
  {
    id: "START",
    title: false,
    open: false,
    maximised: true,
  },
  {
    id: "PROJECTS",
    title: {
      text: "Portfolio",
      icon: "/file-explorer.png",
    },
    open: false,
    maximised: true,
  },
  {
    id: "EXPERIENCE",
    title: {
      text: "Work History",
      icon: "/history.png",
    },
    open: false,
    maximised: true,
  },
  {
    id: "CONTACT",
    title: {
      text: "Contact Me",
      icon: "/contact.png",
    },
    open: false,
    maximised: true,
  },
];

export const ModalContextProvider = ({ children }) => {
  const [modals, setModals] = useState(modalState);

  const isAnyModalOpen =
    modals.filter((modal) => modal?.open == true).length > 0;
  const isModalOpen = (id) => modals.find((modal) => modal?.id == id)?.open;
  const isModalMaximised = (id) =>
    modals.find((modal) => modal?.id == id)?.maximised;

  const getModalData = (id) => modals.find((modal) => modal?.id == id);

  const changeModalOpen = (id, open) => {
    // If Start menu is open, close it before opening the other modal
    if (
      id != "START" &&
      open == true &&
      modals.find((modal) => modal?.id == "START")?.open
    ) {
      setModals((prev) => {
        return prev.map((modal) => {
          if (modal?.id == "START") return { ...modal, open: false };
          if (modal?.id == id) return { ...modal, open: open };
          return modal;
        });
      });
    } else {
      setModals(
        modals.map((prev) => (prev?.id == id ? { ...prev, open: open } : prev))
      );
    }
  };
  const closeAllModals = () =>
    setModals(modals?.map((modal) => ({ ...modal, open: false })));
  const toggleModal = (id) =>
    setModals(
      modals.map((prev) =>
        prev?.id == id ? { ...prev, open: !prev?.open } : prev
      )
    );

  const changeModalSize = (id, maximised) =>
    setModals(
      modals.map((prev) =>
        prev?.id == id ? { ...prev, maximised: maximised } : prev
      )
    );

  return (
    <ModalContext.Provider
      value={{
        isAnyModalOpen,
        isModalOpen,
        isModalMaximised,
        changeModalOpen,
        toggleModal,
        closeAllModals,
        changeModalSize,
        getModalData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
