"use client";
import React, { useEffect } from "react";

const FullScreenOnly = ({ children }) => {
  useEffect(() => {
    const handleFullScreen = () => {
        const el = document.body;
        console.log(el.requestFullscreen);
      if (el.requestFullscreen) el.requestFullscreen();
    //   else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    //   else if (el.msRequestFullscreen) el.msRequestFullscreen();
    };

    handleFullScreen();

    return () => {
    //   if (document.fullscreenElement) document.exitFullscreen();
    };
  }, []);
  return children;
};

export default FullScreenOnly;
