"use client";

import { ModalContext } from "@/context/ModelContext";
import useTheme from "@/hooks/useTheme";
import Image from "next/image";
import React, { useContext } from "react";

const Taskbar = () => {
  const { isMobile } = useTheme();
  const { toggleModal, closeAllModals, isAnyModalOpen } =
    useContext(ModalContext);

  return (
    <div className="w-full flex fixed h-auto lg:h-14 bottom-0 flex-col items-center justify-center lg:gap-x-5 lg:border-t lg:border-stone-700">
      {!isMobile || (isMobile && !isAnyModalOpen) ? (
        <div className="w-full max-w-sm lg:max-w-full mx-auto h-14 flex items-center justify-evenly lg:justify-center lg:gap-x-8 bg-transparent lg:bg-stone-950/90">
          <button
            onClick={() => toggleModal("START")}
            className={`cursor-pointer w-10 h-10 flex items-center justify-center bg-black/70 lg:bg-transparent p-2 rounded-sm hover:bg-stone-700/60`}
          >
            <Image
              className="object-contain w-auto"
              src="/start.png"
              width={26}
              height={26}
              alt="Hello"
            />
          </button>
          <button
            onClick={() => toggleModal("EXPERIENCE")}
            className={`cursor-pointer w-10 h-10 flex items-center justify-center bg-black/70 lg:bg-transparent p-1.5 rounded-sm hover:bg-stone-700/60`}
          >
            <Image
              className="object-contain w-auto"
              src="/history.png"
              width={26}
              height={26}
              alt="Experience"
            />
          </button>
          <button
            onClick={() => toggleModal("PROJECTS")}
            className={`cursor-pointer w-10 h-10 flex items-center justify-center bg-black/70 lg:bg-transparent p-1.5 rounded-sm hover:bg-stone-700/60`}
          >
            <Image
              className="object-contain w-auto"
              src="/file-explorer.png"
              width={26}
              height={26}
              alt="Projects"
            />
          </button>
          <button
            onClick={() => toggleModal("CONTACT")}
            className={`cursor-pointer w-10 h-10 flex items-center justify-center bg-black/70 lg:bg-transparent p-1.5 rounded-sm hover:bg-stone-700/60`}
          >
            <Image
              className="object-contain w-auto"
              src="/contact.png"
              width={26}
              height={26}
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
