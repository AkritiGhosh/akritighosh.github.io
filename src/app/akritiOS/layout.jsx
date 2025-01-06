import Taskbar from "@/components/desktop/taskbar/Taskbar";
import React from "react";

const Portfolio = ({ children }) => {
  return (
    <div>
      {children}
      <Taskbar />
    </div>
  );
};

export default Portfolio;
