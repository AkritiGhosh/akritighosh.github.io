"use client";
import { usePathname } from "next/navigation";

const BodyLayout = ({ children }) => {
  const pathname = usePathname();

  // Map routes to background positions
  const bgPositions = {
    "/": "top left",
    "/work-history": "top right",
    "/projects": "bottom right",
    "/get-in-touch": "bottom left",
  };

  //    bgPositions[pathname] || "top left"; // Default position
  return (
    <body
      style={{
        backgroundPosition: bgPositions[pathname] || "top left",
        transition: "background-position 1s ease-in-out",
      }}
      className={` antialiased bg-[length:200%_200%] bg-no-repeat w-screen h-screen overflow-hidden bg-gradient-to-br  from-pink-900  via-[#191970]  to-[#06531a] transition-all duration-300 `}
    >
      {children}
    </body>
  );
};

export default BodyLayout;
