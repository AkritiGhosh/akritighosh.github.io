import { folders, projects } from "@/components/desktop/projects/data";
import React, { createContext, useMemo, useState } from "react";

export const ExplorerContext = createContext();

const ExplorerContextProvider = ({ children }) => {
  const [activeFolder, setActiveFolder] = useState({});
  const [activeFile, setActiveFile] = useState({});
  const [sortBy, setSortBy] = useState("");
  const [groupBy, setGroupBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("");

  const openFolder = (id) => {
    setActiveFolder(folders.find((folder) => folder?.id == id));
    setActiveFile({});
  };

  const openFile = (id, folderId) => {
    setActiveFolder(folders.find((folder) => folder?.id == folderId));
    setActiveFile(projects.find((file) => file?.id == id));
  };

  const isFolderOpen = activeFolder?.title != null;
  const isFileOpen = activeFile?.name != null;

  const closeFolder = () => {
    setActiveFile({});
    setActiveFolder({});
  };

  const content = useMemo(() => {
    if (isFolderOpen)
      return projects?.filter(
        (project) => project.parentFolder == activeFolder?.id
      );
    else return folders;
  }, [activeFolder]);

  return (
    <ExplorerContext.Provider
      value={{
        activeFile,
        activeFolder,
        openFile,
        openFolder,
        content,
        isFolderOpen,
        isFileOpen,
        closeFolder,
      }}
    >
      {children}
    </ExplorerContext.Provider>
  );
};

export default ExplorerContextProvider;
