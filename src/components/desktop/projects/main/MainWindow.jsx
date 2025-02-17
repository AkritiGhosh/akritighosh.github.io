import { ExplorerContext } from "@/context/ExplorerContext";
import Image from "next/image";
import React, { useContext } from "react";

const MainWindow = () => {
  const {
    content,
    activeFolder,
    isFolderOpen,
    activeFile,
    openFolder,
    openFile,
  } = useContext(ExplorerContext);

  const handleClick = (id) => {
    if (isFolderOpen) openFile(id, activeFolder?.id);
    else openFolder(id);
  };

  return (
    <div className="w-full h-full overflow-y-auto p-4 grid auto-rows-min grid-cols-2 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 scroll-thin gap-2 md:gap-4">
      {content?.map((data) => (
        <button
          onClick={() => handleClick(data?.id)}
          key={data?.id}
          className={`w-full aspect-square flex flex-col items-center gap-y-2 p-2 rounded border border-transparent hover:border-neutral-400/40 hover:bg-neutral-300/20 text-center
            ${
              activeFolder?.id == data?.id || activeFile?.id == data?.id
                ? "bg-white/20"
                : "bg-transparent"
            }`}
        >
          <Image
            className="object-contain h-[calc(100%-48px)] min-h-16 w-auto"
            src={
              isFolderOpen
                ? "/files/" + data?.fileType + ".png"
                : "/files/folder.png"
            }
            width={112}
            height={112}
            alt="Hello"
          />
          <span className="w-full">{data?.name ?? data?.title}</span>
        </button>
      ))}
    </div>
  );
};

export default MainWindow;
