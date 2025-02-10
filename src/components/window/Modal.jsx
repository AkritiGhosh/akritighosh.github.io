"use client";

import { ModalContext } from "@/context/ModelContext";
import React, { useContext } from "react";

const Modal = ({ title, children, showTitleBar, className, windowKey }) => {
  const [maximized, setMaximized] = React.useState(true);

  const { closeModal } = useContext(ModalContext);

  const windowSize = maximized
    ? "w-full h-[calc(100%-56px)] top-0 absolute"
    : "w-[70vw] h-[70vh] left-[15vw] bottom-[15vh] rounded-sm border-gray-800 absolute border";
  return (
    <div className={className ?? windowSize}>
      {showTitleBar && (
        <div
          className={`w-full h-10 flex items-center justify-between pl-4 py-1 bg-[#181818] ${
            !maximized && `rounded-t-sm`
          }`}
        >
          <h1>{title}</h1>
          <div className="w-auto h-10 relative flex">
            {maximized ? (
              <button
                onClick={() => setMaximized(false)}
                className="h-10 w-10 px-2 hover:bg-slate-300/30 inline-flex items-center justify-center"
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
                onClick={() => setMaximized(true)}
                className="h-10 w-10 px-2 hover:bg-slate-300/30 inline-flex items-center justify-center"
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
              onClick={() => closeModal(windowKey)}
              className={`h-10 w-10 px-2 hover:bg-red-500/70 ${
                !maximized && `rounded-tr-sm`
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
      <div className="overflow-y-auto w-full relative h-[calc(100%-40px)]">{children}</div>
    </div>
  );
};

export default Modal;
