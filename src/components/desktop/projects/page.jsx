import useTheme from "@/hooks/useTheme";
import React from "react";
import FileTree from "./FileTree";
import Bar from "./menubar/Bar";

const Projects = () => {
  const { isMobile } = useTheme();

  return (
    <div className="w-full h-full bg-[#202020]">
      <Bar />
      <div className={`w-full h-[calc(100%-3rem)] flex items-start`}>
        {/* Folder Tree */}
        {!isMobile && <FileTree />}
        {/* Files in current folder */}
        <div className="w-full h-full overflow-y-auto p-4">
          {/* {content?.map((data) => (
              <button key={data?.id} className="flex flex-col p-2 rounded">
                {data?.name ?? data?.title}{" "}
              </button>
            ))} */}
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
