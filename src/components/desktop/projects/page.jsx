import useTheme from "@/hooks/useTheme";
import React, { useMemo, useState } from "react";
import {
  certificates,
  folders,
  parentFolder,
  projects,
  research,
} from "./data";
import FileTree from "./FileTree";

const fileBarHeightInRems = 2.5;
const fileBarHeight = "h-" + fileBarHeightInRems * 4;
const remainingWindowHeight = "h-[calc(100%-" + fileBarHeightInRems + "rem)]";

const Projects = () => {
  const { isMobile } = useTheme();
  const [activeFolder, setActiveFolder] = useState("");

  const content = useMemo(() => {
    switch (activeFolder) {
      case parentFolder?.CERTIFICATES:
        return certificates;
      case parentFolder?.RESEARCH:
        return research;
      case parentFolder?.COMPETITIVE:
        return projects?.filter(
          (project) => project.parentFolder == activeFolder
        );
      case parentFolder?.PERSONAL:
        return projects?.filter(
          (project) => project.parentFolder == activeFolder
        );
      default:
        return folders;
    }
  }, [activeFolder]);

  return (
    <div className="w-full h-full bg-[#202020]">
      <div
        className={`w-full ${fileBarHeight} flex items-center justify-between gap-4 px-4 bg-[#181818] border-y border-neutral-400/40`}
      ></div>
      <div className={`w-full ${remainingWindowHeight} flex items-start`}>
        {/* Folder Tree */}
        {!isMobile && <FileTree />}
        {/* Files in current folder */}
        <div className="w-full h-full overflow-y-auto p-4">
          {content?.map((data) => (
            <button key={data?.id} className="flex flex-col p-2 rounded">
              {data?.name ?? data?.title}{" "}
            </button>
          ))}
        </div>
        {/* Preview/Details pane */}
        {!isMobile && (
          <div className="w-1/3 h-full border-l border-neutral-400/40 overflow-y-auto py-4 px-3"></div>
        )}
      </div>
    </div>
  );
};

export default Projects;
