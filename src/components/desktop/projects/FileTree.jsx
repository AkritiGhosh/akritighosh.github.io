import React, { useState } from "react";
import { folders, parentFolder } from "./data";

const FileTree = () => {
  const [treeOpen, setTreeOpen] = useState({
    PERSONAL: false,
    OFFICE: false,
    CERTIFICATES: false,
    RESEARCH: false,
    COMPETITIVE: false,
  });
  return (
    <div>
      {parentFolder?.map((folder) => (
        <div key={folders[folder]?.id} className="w-full text-sm flex gap-2">
          {treeOpen[folder] ? (
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
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
          <span className={`text-sm font-medium text-neutral-300`}>
            {folders[folder]?.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FileTree;
