"use client";

import React from "react";

const Modal = ({ title, children, closeModal, showTitleBar, className }) => {
  const [maximized, setMaximized] = React.useState(false);
  const windowSize = maximized
    ? "w-[90vw] h-[90vh] bottom-[5vh]"
    : "w-[70vw] h-[70vh] bottom-[5vh] rounded-sm";
  return (
    <div
      className={className ?? windowSize + "border-gray-400 relative border"}
    >
      {showTitleBar && (
        <div className="w-full h-10 flex justify-between">
          <h1>{title}</h1>
          <div>
            <button onClick={closeModal}>X</button>{" "}
          </div>
        </div>
      )}
      <div className="overflow-y-auto w-full relative h-full">{children}</div>
    </div>
  );
};

export default Modal;
