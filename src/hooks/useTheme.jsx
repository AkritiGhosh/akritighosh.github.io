"use client";

import { useEffect, useMemo, useState } from "react";

const useTheme = () => {
  const [photo, setPhoto] = useState(1);
  const [theme, setTheme] = useState("morning");
  useEffect(() => {
    const updateTheme = () => {
      const hour = new Date().getHours();
      const body = document.body;
      body.classList.remove(
        "theme-morning",
        "theme-afternoon",
        "theme-evening",
        "theme-night"
      );

      if (hour >= 6 && hour < 12) setTheme("morning");
      else if (hour >= 12 && hour < 18) setTheme("afternoon");
      else if (hour >= 18 && hour < 21) setTheme("evening");
      else setTheme("night");
      console.log("theme", theme);
      setPhoto((prev) => ((prev + 1) % 6) + 1);
      body.classList.add(`theme-${theme}`);
    };

    updateTheme();
    const interval = setInterval(updateTheme, 4000); // Check every minute
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  const bgURL = useMemo(() => {
    return "/desktopBg/" + theme + "/" + photo + ".jpg";
  }, [theme, photo]);

  return { bgURL };
};

export default useTheme;
