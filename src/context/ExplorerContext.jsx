import { folders, projects } from "@/components/desktop/projects/data";
import React, { createContext, useState } from "react";

export const ExplorerContext = createContext();

const ExplorerContextProvider = ({ children }) => {
  const [activeFolder, setActiveFolder] = useState({});
  const [activeFile, setActiveFile] = useState({});
  const [sortBy, setSortBy] = useState("")
  const [groupBy, setGroupBy] = useState("")

  const openFolder = (id) =>
    setActiveFolder(folders.find((folder) => folder.id == id));

  const openFile = (id) =>
    setActiveFile(projects.find((file) => file.id == id));

  return (
    <ExplorerContext.Provider
      value={{ activeFile, activeFolder, openFile, openFolder }}
    >
      {children}
    </ExplorerContext.Provider>
  );
};

export default ExplorerContextProvider;
