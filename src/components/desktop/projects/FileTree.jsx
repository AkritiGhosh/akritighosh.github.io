import React, { useState } from "react";
import { folders, parentFolder, projects } from "./data";

const FileTree = () => {
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

  return (
    <div className="w-1/4 min-w-60 h-full border-r border-neutral-400/40 overflow-y-auto py-4 scroll-thin">
      {tree?.map((folder) => (
        <>
          <button
            key={folder?.id}
            onClick={() =>
              setTreeOpen((prev) => ({
                ...prev,
                [folder.id]: !prev[folder.id],
              }))
            }
            className="w-full text-sm flex gap-2 items-center first-of-type:mt-0 mt-1 py-1 px-2 hover:bg-white/20"
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
                <p
                  key={file?.id}
                  className="w-full text-sm flex items-center first-of-type:mt-0 mt-1 py-1 px-2 hover:bg-white/20"
                >
                  <span className={`text-sm font-medium text-neutral-300`}>
                    {file?.name}
                  </span>
                </p>
              ))}
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default FileTree;
