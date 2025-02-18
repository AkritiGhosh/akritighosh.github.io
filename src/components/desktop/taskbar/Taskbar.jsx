"use client";

import { ModalContext } from "@/context/ModelContext";
import useTheme from "@/hooks/useTheme";
import Image from "next/image";
import React, { useContext } from "react";

const Taskbar = () => {
  const { isMobile } = useTheme();
  const {
    toggleModal,
    changeModalOpen,
    closeAllModals,
    isAnyModalOpen,
    isModalOpen,
  } = useContext(ModalContext);

  return (
    <div className="w-full flex fixed h-auto lg:h-14 bottom-0 flex-col items-center justify-center lg:gap-x-5 lg:border-t lg:border-stone-700">
      {!isMobile || (isMobile && !isAnyModalOpen) ? (
        <div className="w-full max-w-sm lg:max-w-full mx-auto h-14 flex items-center justify-evenly lg:justify-center lg:gap-x-8 bg-transparent lg:bg-stone-950/90">
          <button
            onClick={() => toggleModal("START")}
            className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-sm hover:bg-stone-700/60 ${
              isModalOpen("START")
                ? "bg-stone-700/60"
                : "bg-black/70 lg:bg-transparent"
            }`}
          >
            <Image
              className="object-contain w-6"
              src={isMobile ? "/taskbar/appMenu.png" : "/taskbar/start.png"}
              width={28}
              height={28}
              alt="Hello"
            />
          </button>
          <button
            onClick={() => changeModalOpen("EXPERIENCE", true)}
            className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-sm hover:bg-stone-700/60  border-b-4 ${
              isModalOpen("EXPERIENCE")
                ? "bg-stone-700/60 border-neutral-200"
                : "bg-black/70 lg:bg-transparent  border-transparent"
            }`}
          >
            <Image
              className="object-contain w-8"
              src="/taskbar/history.png"
              width={28}
              height={28}
              alt="Experience"
            />
          </button>
          <button
            onClick={() => changeModalOpen("PROJECTS", true)}
            className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-sm hover:bg-stone-700/60  border-b-4 ${
              isModalOpen("PROJECTS")
                ? "bg-stone-700/60 border-neutral-200"
                : "bg-black/70 lg:bg-transparent border-transparent"
            }`}
          >
            <Image
              className="object-contain w-7"
              src="/taskbar/file-explorer.png"
              width={28}
              height={28}
              alt="Projects"
            />
          </button>
          <button
            onClick={() => changeModalOpen("CONTACT", true)}
            className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-sm hover:bg-stone-700/60  border-b-4 ${
              isModalOpen("CONTACT")
                ? "bg-stone-700/60 border-neutral-200"
                : "bg-black/70 lg:bg-transparent border-transparent"
            }`}
          >
            <Image
              className="object-contain w-8 lg:w-7"
              src={isMobile ? "/taskbar/phone.svg" : "/taskbar/contact.png"}
              width={28}
              height={28}
              alt="Contact"
            />
          </button>
        </div>
      ) : null}
      {isMobile && isAnyModalOpen && (
        <div className="w-full h-8 flex items-center justify-center bg-[#181818]">
          <button
            className="p-1 rounded-full hover:bg-white/10"
            onClick={closeAllModals}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Taskbar;
