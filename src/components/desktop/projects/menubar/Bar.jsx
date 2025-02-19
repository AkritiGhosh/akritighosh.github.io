import useTheme from "@/hooks/useTheme";
import React from "react";
import Address from "./Address";

const downArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="size-4 fill-transparent group-hover:fill-white"
  >
    <path
      fillRule="evenodd"
      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const Bar = () => {
  const { isMobile } = useTheme();

  return (
    <div
      className={`w-full h-auto lg:h-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-y-2 gap-x-2 px-4 py-2 bg-[#181818] border-b border-neutral-400/40`}
    >
      <div className="w-full h-full lg:w-auto min-w-fit flex flex-row justify-between md:justify-start">
        <button className="h-full w-auto px-2 py-0.5 rounded-sm text-white text-sm leading-6 min-w-fit hover:bg-neutral-800 group flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
          Sort by
          {downArrow}
        </button>
        <button className="h-full w-auto px-2 py-0.5 rounded-sm text-white text-sm leading-6 min-w-fit hover:bg-neutral-800 group flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
            />
          </svg>
          Group by
          {downArrow}
        </button>
      </div>
      <Address />
    </div>
  );
};

export default Bar;
