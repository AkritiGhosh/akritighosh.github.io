import { ExplorerContext } from "@/context/ExplorerContext";
import useTheme from "@/hooks/useTheme";
import Image from "next/image";
import React, { useContext } from "react";
import FolderPreview from "../preview/FolderPreview";

const MainWindow = () => {
  const { isMobile } = useTheme();

  const {
    content,
    activeFolder,
    isFolderOpen,
    isFileOpen,
    activeFile,
    closeFolder,
    openFolder,
    openFile,
  } = useContext(ExplorerContext);

  const handleClick = (id) => {
    if (isFolderOpen) openFile(id, activeFolder?.id);
    else openFolder(id);
  };

  return (
    <div className="flex flex-col w-full h-auto lg:h-full">
      {isMobile &&
        isFolderOpen &&
        (isFileOpen ? null : (
          <>
            <button
              onClick={closeFolder}
              className="w-full flex items-center gap-2 text-neutral-400 hover:font-semibold group py-2 pl-4 sticky top-0 bg-[#202020] border-b border-neutral-400/40"
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
              <span className="text-sm ">Back to Portfolio</span>
            </button>
            <FolderPreview
              className={"w-full block p-4 border-b border-neutral-400/40"}
            />
          </>
        ))}
      <div className="w-full h-full overflow-y-auto p-4 flex flex-row flex-wrap content-start items-start justify-evenly scroll-thin gap-2 md:gap-4">
        {content?.map((data) => (
          <button
            onClick={() => handleClick(data?.id)}
            key={data?.id}
            className={`w-32 h-max aspect-square flex flex-col items-center gap-y-2 p-2 rounded border border-transparent hover:border-neutral-400/40 hover:bg-neutral-300/20 text-center
            ${
              activeFolder?.id == data?.id || activeFile?.id == data?.id
                ? "bg-white/20"
                : "bg-transparent"
            }`}
          >
            <Image
              className="object-contain h-28 min-h-16 w-auto"
              src={
                isFolderOpen
                  ? "/files/" + data?.fileType + ".png"
                  : "/files/folder.png"
              }
              width={112}
              height={112}
              alt="Hello"
            />
            <span className="w-full text-sm">{data?.name ?? data?.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainWindow;
