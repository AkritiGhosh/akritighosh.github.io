import React, { useContext, useState } from "react";
import { folders, parentFolder, projects } from "./data";
import { ExplorerContext } from "@/context/ExplorerContext";

const FileTree = () => {
  const { openFolder, openFile, closeFolder, activeFolder, activeFile } =
    useContext(ExplorerContext);

  const [treeOpen, setTreeOpen] = useState({
    PERSONAL: false,
    OFFICE: false,
    CERTIFICATES: false,
    RESEARCH: false,
    COMPETITIVE: false,
  });

  const getFolderData = (folderId) =>
    folders.filter((folder) => folder?.id == folderId)[0];

  const tree = Object.values(parentFolder)?.map((folder) => ({
    id: folder,
    files: projects?.filter((project) => project?.parentFolder == folder),
  }));

  const handleFolderClick = (id) => {
    if (!treeOpen[id]) openFolder(id);
    setTreeOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-1/4 min-w-60 h-full border-r border-neutral-400/40 overflow-y-auto py-4 scroll-thin">
      <button
        onClick={closeFolder}
        className={`w-full text-base font-serif tracking-wide flex gap-2 items-start text-left first-of-type:mt-0 mt-1 py-1 px-2 hover:bg-white/20 font-bold `}
      >
        Portfolio
      </button>
      {tree?.map((folder) => (
        <>
          <button
            key={folder?.id}
            onClick={() => handleFolderClick(folder?.id)}
            className={`w-full text-sm flex gap-2 items-start text-left first-of-type:mt-0 mt-1 py-1 px-2 hover:bg-white/20 ${
              activeFolder?.id == folder?.id ? "bg-white/20" : "bg-transparent"
            }`}
          >
            {treeOpen[folder.id] ? (
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
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            )}
            <span className={`text-sm font-medium text-neutral-300`}>
              {getFolderData(folder?.id)?.title}
            </span>
          </button>
          {treeOpen[folder.id] && (
            <div className="w-full pl-2 ml-4 border-l border-neutral-500">
              {folder?.files?.map((file) => (
                <button
                  key={file?.id}
                  onClick={() => openFile(file?.id, folder?.id)}
                  className={`w-full text-sm flex items-start text-left first-of-type:mt-0 mt-1 py-1 px-2 hover:bg-white/20 cursor-pointer ${
                    activeFile?.id == file?.id
                      ? "bg-white/20"
                      : "bg-transparent"
                  }`}
                >
                  <span className={`text-sm font-medium text-neutral-300`}>
                    {file?.name}
                  </span>
                </button>
              ))}
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default FileTree;
