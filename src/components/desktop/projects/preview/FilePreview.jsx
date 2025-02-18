import { ExplorerContext } from "@/context/ExplorerContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { parentFolder } from "../data";

const Label = ({ children }) => {
  return <span className={"text-sm font-normal "}>{children} : </span>;
};

const CertificationPreview = () => {
  const { activeFile } = useContext(ExplorerContext);
  return (
    <>
      <h1 className="text-5xl xl:text-6xl font-bold text-white font-display">
        {activeFile.name}
      </h1>
      <span className="text-base text-center font-medium py-1 px-2 rounded-md bg-red-600/40">
        {activeFile?.by}
      </span>
      {activeFile?.link && (
        <div className="w-full flex flex-row gap-3 flex-wrap items-center">
          <Label>Cerificate Link</Label>
          <Link
            title={"Competition Question Link"}
            href={activeFile?.link}
            className="inline-block size-6 hover:text-blue-400"
            download={true}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </Link>
        </div>
      )}
      {activeFile?.project && (
        <>
          <hr className="mb-2" />
          <Label>PROJECT COMPLETED </Label>
          <ProjectPreview activeFile={activeFile?.project} />
        </>
      )}
    </>
  );
};

const ProjectPreview = ({ activeFile }) => {
  return (
    <>
      <h1 className="text-5xl xl:text-6xl font-bold text-white font-display">
        {activeFile.name}
      </h1>
      {/* Tags */}
      <div className="w-full flex flex-row flex-wrap gap-2">
        {activeFile?.categories?.map((tag) => (
          <span className="w-auto py-1 px-2 rounded-md text-sm bg-coral/40">
            {tag}
          </span>
        ))}
      </div>
      {activeFile?.imgSrc && (
        <Image
          width={128}
          height={128}
          className="w-full h-auto object-cover my-4"
          src={activeFile?.imgSrc}
          alt={activeFile?.name}
        />
      )}
      {activeFile?.link?.length > 0 && (
        <div className="w-full flex flex-row gap-3 flex-wrap items-center">
          <Label>
            {activeFile?.parentFolder == parentFolder?.RESEARCH
              ? "Paper"
              : "Github"}{" "}
            Link
          </Label>
          {activeFile?.link?.map((gitLink) => (
            <Link
              target="_blank"
              title={gitLink?.alt}
              href={gitLink?.link}
              className="inline-block size-6 opacity-70 hover:opacity-100"
            >
              {activeFile?.parentFolder == parentFolder?.RESEARCH ? (
                <Image
                  src={"/files/pdf.png"}
                  className="size-6 "
                  width={24}
                  height={24}
                  alt={gitLink?.alt}
                />
              ) : (
                <Image
                  src={"/common/github.png"}
                  className="size-6 "
                  width={24}
                  height={24}
                  alt={gitLink?.alt}
                />
              )}
            </Link>
          ))}
        </div>
      )}
      {activeFile?.competition && (
        <div className="w-full flex flex-row gap-3 flex-wrap items-center">
          <Label>Competition Question Link</Label>
          <Link
            target="_blank"
            title={"Competition Question Link"}
            href={activeFile?.competition}
            className="inline-block size-5 hover:text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </Link>
        </div>
      )}
      {/* Description */}
      <p className="text-sm md:text-base text-neutral-500 italic">
        {activeFile?.description}
      </p>
      <div className="w-full flex flex-row flex-wrap gap-2">
        {activeFile?.techStack?.map((tag) => (
          <span className="w-auto py-1 px-2 rounded-md text-sm bg-teal/60">
            {tag}
          </span>
        ))}
      </div>
      {/* Status */}
      <div className="w-full">
        <Label>Status</Label>
        <span className="text-sm font-semibold">{activeFile?.status}</span>
      </div>
      {/* Access */}
      <div className="w-full">
        <Label>Access</Label>
        <span className="text-sm font-semibold">{activeFile?.access}</span>
      </div>
    </>
  );
};

const FilePreview = () => {
  const { activeFile } = useContext(ExplorerContext);
  return activeFile?.parentFolder == parentFolder?.CERTIFICATES ? (
    <CertificationPreview />
  ) : (
    <ProjectPreview activeFile={activeFile} />
  );
};

export default FilePreview;
