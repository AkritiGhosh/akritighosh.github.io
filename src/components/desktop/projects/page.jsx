import useTheme from "@/hooks/useTheme";
import React from "react";

const fileBarHeightInRems = 2.5;
const fileBarHeight = "h-" + fileBarHeightInRems * 4;
const remainingWindowHeight = "h-[calc(100%-" + fileBarHeightInRems + "rem)]";

const Projects = () => {
  const { isMobile } = useTheme();

  return (
    <div className="w-full h-full bg-[#202020]">
      <div
        className={`w-full ${fileBarHeight} flex items-center justify-between gap-4 px-4 bg-[#181818] border-y border-neutral-400/40`}
      ></div>
      <div
        className={`w-full ${remainingWindowHeight} flex items-start`}
      >
        {/* Folder Tree */}
        {!isMobile && (
          <div className="w-1/4 h-full border-r border-neutral-400/40 overflow-y-auto py-4 px-3"></div>
        )}
        {/* Files in current folder */}
        <div className="w-full h-full overflow-y-auto p-4"></div>
        {/* Preview/Details pane */}
        {!isMobile && (
          <div className="w-1/3 h-full border-l border-neutral-400/40 overflow-y-auto py-4 px-3"></div>
        )}
      </div>
    </div>
  );
};

export default Projects;
