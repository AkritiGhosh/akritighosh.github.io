import Image from "next/image";
import Link from "next/link";
import React from "react";
import EmailSection from "./EmailSection";

const ContactMe = () => {
  return (
    <div className="w-full h-auto min-h-full lg:h-full bg-[#202020] flex flex-col lg:flex-row lg:divide-x divide-neutral-400/40">
      <div className="w-full lg:w-5/12 flex flex-col gap-4 p-4 lg:p-8 scroll-thin">
        <Image
        alt="Akriti Ghosh"
          src="/ProfilePic.jpg"
          width={100}
          height={100}
          priority
          unoptimized={true}
          objectFit="cover"
          className="w-full max-w-80 mx-auto h-auto aspect-square rounded-full object-cover mb-4"
        />
        <h1 className="text-5xl xl:text-6xl font-bold text-white font-display">
          Akriti Ghosh
        </h1>
        <h2 className="text-lg lg:text-xl font-serif font-semibold ">
          Sr. Software Engineer
        </h2>

        {/* Github */}
        <Link
          href={"https://github.com/AkritiGhosh/"}
          target="_blank"
          className="w-full flex flex-row gap-4 items-center opacity-80 hover:opacity-100 hover:bg-black/60 py-1.5 px-2 rounded group"
        >
            <Image
              src={"/common/github.png"}
              width={24}
              height={24}
              className="size-6 min-w-6"
              alt="Github link"
            />
          <span className="w-auto text-sm group-hover:underline group-hover:underline-offset-2">github.com/AkritiGhosh/</span>
        </Link>
        {/* LinkedIn */}
        <Link
          href={"https://www.linkedin.com/in/akriti-ghosh-12b6a9153/"}
          target="_blank"
          className="w-full flex flex-row gap-4 items-center opacity-80 hover:opacity-100 hover:bg-black/60 py-1 px-2 rounded group"
        >
          <Image
              src={"/common/linkedin.png"}
              width={24}
              height={24}
              className="size-6 min-w-6"
              alt="LinkedIn Profile"
            />
          <span className="w-auto text-sm group-hover:underline group-hover:underline-offset-2">
            www.linkedin.com/in/akriti-ghosh-12b6a9153/
          </span>
        </Link>
      </div>
      <EmailSection/>
    </div>
  );
};

export default ContactMe;
