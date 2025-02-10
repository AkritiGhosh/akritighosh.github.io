"use client";
import Image from "next/image";
import useTheme from "@/hooks/useTheme";

export default function Home() {
  const { bgURL } = useTheme();
  return (
    <div
      style={{
        backgroundImage: "url(" + bgURL + ")",
        transition: "background-image 3s",
      }}
      className="relative w-screen h-screen flex items-center bg-cover bg-center"
    >
      <div className="p-5 md:px-[10%] pb-10 rounded-r-lg bg-black/50 backdrop-filter backdrop-blur-lg  flex flex-col text-navy justify-center gap-4 ">
        <h1 className="md:text-8xl text-6xl  !leading-loose font-medium flex flex-row-reverse md:flex-row items-center gap-4 md:justify-start justify-end">
          <Image
            className="object-contain max-h-28 h-20 md:h-28 w-auto"
            src="/shake-hand.gif"
            width={112}
            height={112}
            alt="Hello"
          />{" "}
          Hi!
        </h1>
        <h1 className="md:text-8xl text-6xl !leading-tight font-semibold">
          I am <br className="block md:hidden" /> Akriti Ghosh
        </h1>
        <h2 className="md:text-4xl text-2xl !leading-loose font-medium">
          Senior Software Engineer
        </h2>
      </div>
    </div>
  );
}
