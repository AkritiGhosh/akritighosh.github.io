import useTheme from "@/hooks/useTheme";
import Image from "next/image";
import React from "react";

const StartMenu = () => {
  const { isMobile } = useTheme();
  return (
    <>
      <div className="w-full h-full lg:h-auto grow p-5 lg:p-[10%] pb-10 lg:pb-10 lg:rounded-t-lg bg-[#202020]/70 backdrop-filter backdrop-blur-xl flex flex-col justify-center gap-4">
        <h1 className="lg:text-5xl text-4xl  !leading-loose font-medium flex flex-row-reverse lg:flex-row items-center gap-4 lg:justify-start justify-end">
          <Image
            className="object-contain max-h-20 h-20 lg:h-20 w-auto"
            src="/shake-hand.gif"
            width={112}
            height={112}
            alt="Hello"
          />{" "}
          Hi!
        </h1>
        <h1 className="lg:text-4xl text-4xl !leading-tight font-semibold">
          I am <br className="block lg:hidden" /> Akriti Ghosh
        </h1>
        <h2 className="lg:text-3xl text-2xl !leading-loose font-medium">
          Senior Software Engineer
        </h2>
        <hr className="border-slate-300 my-6" />
      </div>
      {!isMobile && (
        <div className="relative bottom-0 w-full h-16 flex items-center gap-6 bg-[#181818] py-4 px-4 lg:px-[10%] rounded-b-lg">
          <Image
            className="object-contain w-auto h-full rounded-full bg-white"
            src="/resume.png"
            width={32}
            height={32}
            alt="DP"
          />
          <span className="text-sm font-medium">Akriti Ghosh</span>
        </div>
      )}
    </>
  );
};

export default StartMenu;
