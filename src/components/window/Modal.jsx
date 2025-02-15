"use client";

import { ModalContext } from "@/context/ModelContext";
import useTheme from "@/hooks/useTheme";
import Image from "next/image";
import React, { useContext } from "react";

const Modal = ({ id, children, className }) => {
  const { isMobile } = useTheme();
  const { getModalData, changeModalOpen, changeModalSize } =
    useContext(ModalContext);

  const modalData = getModalData(id);
  const showTitleBar = modalData?.title == false ? false : true;
  const title = showTitleBar ? modalData?.title?.text : "";
  const titleIcon = showTitleBar ? modalData?.title?.icon : "";

  const windowSize = isMobile
    ? "w-full h-[calc(100%-32px)] inset-0 absolute z-[99]"
    : modalData?.maximised
    ? "w-full h-[calc(100%-56px)] top-0 absolute"
    : "w-[70vw] h-[70vh] left-[15vw] bottom-[15vh] rounded-sm border-gray-800 absolute border";

  return (
    <div className={className ?? windowSize}>
      {/* Title Bar */}
      {!isMobile && showTitleBar && (
        <div
          className={`w-full h-12 flex items-center justify-between pl-4 py-1 bg-[#181818] ${
            !modalData?.maximised && `rounded-t-sm`
          }`}
        >
          <h1 className="flex gap-3 h-12 items-center">
            {titleIcon && (
              <Image
                className="object-contain w-5 h-5"
                src={"/taskbar"+titleIcon}
                width={18}
                height={18}
                alt="Hello"
              />
            )}
            <span className="inline-block text-base"> {title}</span>
          </h1>
          <div className="w-auto h-12 relative flex">
            {modalData?.maximised ? (
              <button
                onClick={() => changeModalSize(id, false)}
                className="h-12 w-12 px-2 hover:bg-slate-500/20 inline-flex items-center justify-center"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => changeModalSize(id, true)}
                className="h-12 w-12 px-2 hover:bg-slate-500/20 inline-flex items-center justify-center"
              >
                <svg fill="#ffffff" viewBox="0 0 330 330" className="size-3.5">
                  <path
                    id="XMLID_523_"
                    d="M315,0H15C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V15  C330,6.716,323.285,0,315,0z M300,300H30V30h270V300z"
                  />
                </svg>
              </button>
            )}
            <button
              onClick={() => changeModalOpen(id, false)}
              className={`h-12 w-12 px-2 hover:bg-red-500/70 ${
                !modalData?.maximised && `rounded-tr-sm`
              } inline-flex items-center justify-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      <div
        className={`overflow-y-auto overflow-x-hidden w-full relative ${
          !isMobile && showTitleBar ? "h-[calc(100%-3rem)]" : "h-full"
        } scroll-thin`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
