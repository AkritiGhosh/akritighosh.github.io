import { ExplorerContext } from "@/context/ExplorerContext";
import Image from "next/image";
import React, { useContext } from "react";

const FolderPreview = ({ className }) => {
  const { activeFolder } = useContext(ExplorerContext);
  return (
    <div className={className}>
      <h1 className="text-5xl xl:text-6xl font-bold text-white font-display">
        {activeFolder.title}
      </h1>
      {activeFolder?.imgSrc && (
        <Image className="w-full h-auto " src={activeFolder?.imgSrc} />
      )}
      <p className="text-sm md:text-base text-neutral-500 italic mt-2 lg:mt-4">
        {activeFolder?.description}
      </p>
    </div>
  );
};

export default FolderPreview;
