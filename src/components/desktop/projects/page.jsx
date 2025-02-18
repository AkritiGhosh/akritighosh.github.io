import useTheme from "@/hooks/useTheme";
import React, { useContext } from "react";
import FileTree from "./FileTree";
import Bar from "./menubar/Bar";
import MainWindow from "./main/MainWindow";
import { ExplorerContext } from "@/context/ExplorerContext";
import PreviewPane from "./preview/PreviewPane";

const Projects = () => {
  const { isMobile } = useTheme();
  const { isFileOpen } = useContext(ExplorerContext);

  return (
    <div className="w-full h-auto min-h-full lg:h-full bg-[#202020]">
      <Bar />
      <div className={`w-full h-[calc(100%-3rem)] flex items-start`}>
        {/* Folder Tree */}
        {!isMobile && <FileTree />}
        {isMobile ? (
          isFileOpen ? (
            <PreviewPane />
          ) : (
            <MainWindow />
          )
        ) : (
          <>
            {/* Files in current folder */}
            <MainWindow />
            {/* Preview/Details pane */}
            <PreviewPane />
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
