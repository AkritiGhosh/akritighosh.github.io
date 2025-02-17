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

  const openFile = (id) =>
    setActiveFile(projects.find((file) => file?.id == id));

  const content = useMemo(() => {
    if (activeFolder != {})
      return projects?.filter(
        (project) => project.parentFolder == activeFolder
      );
    else return folders;
  }, [activeFolder]);

  return (
    <ExplorerContext.Provider
      value={{ activeFile, activeFolder, openFile, openFolder, content }}
    >
      {children}
    </ExplorerContext.Provider>
  );
};

export default ExplorerContextProvider;
