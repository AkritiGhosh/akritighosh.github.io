"use client";

import { useEffect, useMemo, useState } from "react";

const useTheme = () => {
  const [photo, setPhoto] = useState(1);
  const [theme, setTheme] = useState("morning");
  const [isMobile, setIsMobile] = useState(false);

  const checkWindowSize = () => {
    if (window.innerWidth < 1024) setIsMobile(true);
    else setIsMobile(false);
  };

  const updateTheme = () => {
    const hour = new Date().getHours();
    const body = document.body;
    body.classList.remove(
      "theme-morning",
      "theme-afternoon",
      "theme-evening",
      "theme-night"
    );

    if (hour >= 4 && hour < 12) setTheme("morning");
    else if (hour >= 12 && hour < 17) setTheme("afternoon");
    else if (hour >= 17 && hour < 20) setTheme("evening");
    else setTheme("night");

    setPhoto((prev) => ((prev + 1) % 6) + 1);
    body.classList.add(`theme-${theme}`);
  };

  useEffect(() => {
    updateTheme();
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    const interval = setInterval(updateTheme, 30000); // Check every minute

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkWindowSize);
    }; // Cleanup on unmount
  }, []);

  const bgURL = useMemo(() => {
    return "/desktopBg/" + theme + "/" + photo + ".jpg";
  }, [theme, photo]);

  return { bgURL, isMobile };
};

export default useTheme;
