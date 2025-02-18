import { ExplorerContext } from "@/context/ExplorerContext";
import React, { useContext } from "react";
import FilePreview from "./FilePreview";
import FolderPreview from "./FolderPreview";
import useTheme from "@/hooks/useTheme";

const PreviewPane = () => {
  const { isMobile } = useTheme();
  const { isFileOpen, activeFolder, closeFile } = useContext(ExplorerContext);
  return isFileOpen ? (
    <div className="relative w-full h-auto lg:h-full lg:border-l border-neutral-400/40 overflow-y-auto py-2 md:py-4 lg:py-6 px-3 flex flex-col gap-4 scroll-thin">
      {isMobile ? (
        <button
          onClick={closeFile}
          className="w-full flex items-center gap-2 text-neutral-400 hover:font-semibold group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 group-hover:stroke-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span className="text-sm ">Back to {activeFolder?.title}</span>
        </button>
      ) : (
        <button title="Close preview" className="absolute top-2 right-2 hover:text-red-500" onClick={closeFile}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      <FilePreview />
    </div>
  ) : (
    <FolderPreview className="w-full lg:w-1/3 h-auto lg:h-full lg:border-l border-neutral-400/40 overflow-y-auto py-4 px-3 flex flex-col gap-4" />
  );
};

export default PreviewPane;
