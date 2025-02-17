import useTheme from "@/hooks/useTheme";
import React from "react";
import FileTree from "./FileTree";
import Bar from "./menubar/Bar";
import MainWindow from "./main/MainWindow";

const Projects = () => {
  const { isMobile } = useTheme();

  return (
    <div className="w-full h-auto min-h-full lg:h-full bg-[#202020]">
      <Bar />
      <div className={`w-full h-[calc(100%-3rem)] flex items-start`}>
        {/* Folder Tree */}
        {!isMobile && <FileTree />}
        {/* Files in current folder */}
        <MainWindow />
        {/* Preview/Details pane */}
        {!isMobile && (
          <div className="w-1/3 h-full border-l border-neutral-400/40 overflow-y-auto py-4 px-3"></div>
        )}
      </div>
    </div>
  );
};

export default Projects;
