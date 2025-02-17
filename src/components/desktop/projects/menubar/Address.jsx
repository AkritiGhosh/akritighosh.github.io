import { ExplorerContext } from "@/context/ExplorerContext";
import React, { useContext } from "react";

const arrowRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="size-5"
  >
    <path
      fillRule="evenodd"
      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const Address = () => {
  const { activeFolder, activeFile } = useContext(ExplorerContext);
  const folderPath = activeFolder?.title != null ? activeFolder?.title : "";
  const filePath =
    activeFolder?.title != null && activeFile?.name != null
      ? activeFile?.name
      : "";

  return (
    <div className="w-full h-full border-0 lg:border border-neutral-600 rounded-sm px-2 lg:py-0.5 lg:bg-[#111111]">
      <p className="text-white text-sm leading-6 flex items-center">
        {"Akriti Ghosh"} {arrowRight} {"Portfolio"}
        {activeFolder?.title != null && arrowRight} {folderPath}
        {activeFolder?.title != null && activeFile?.name != null && arrowRight}
        {filePath}
      </p>
    </div>
  );
};

export default Address;
