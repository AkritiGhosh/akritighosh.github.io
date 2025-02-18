import { ExplorerContext } from "@/context/ExplorerContext";
import React, { useContext } from "react";

const FolderPreview = ({ className }) => {
  const { activeFolder } = useContext(ExplorerContext);
  return (
    <div className={className}>
      <h1 className="text-4xl lg:text-6xl font-bold text-white font-display">
        {activeFolder.title}
      </h1>
      <p className="text-sm md:text-base text-neutral-300 italic mt-4">
        {activeFolder?.description}
      </p>
    </div>
  );
};

export default FolderPreview;
