"use client";

import useTheme from "@/hooks/useTheme";
import Modal from "@/components/window/Modal";
import StartMenu from "@/components/desktop/StartMenu";
import { ModalContext } from "@/context/ModelContext";
import { useContext } from "react";
import WorkExperience from "@/components/desktop/work-history/page";
import Projects from "@/components/desktop/projects/page";
import ExplorerContextProvider from "@/context/ExplorerContext";
import ContactMe from "@/components/desktop/get-in-touch/page";

export default function Home() {
  const { bgURL } = useTheme();
  const { isModalOpen } = useContext(ModalContext);
  return (
    <div
      style={{
        backgroundImage: "url(" + bgURL + ")",
        transition: "background-image 3s",
      }}
      className="relative w-screen h-screen flex items-center bg-cover bg-center overflow-hidden"
    >
      {isModalOpen("START") && (
        <Modal
          id="START"
          className={
            "absolute w-full lg:w-1/2 min-h-[50%] h-[calc(100%-32px)] lg:h-auto left-0 lg:left-1/4 bottom-8 lg:bottom-16 ring-white ring-1 ring-opacity-10 rounded overflow-hidden z-[999]"
          }
        >
          <StartMenu />
        </Modal>
      )}
      {isModalOpen("EXPERIENCE") && (
        <Modal id="EXPERIENCE">
          <WorkExperience />
        </Modal>
      )}
      {isModalOpen("PROJECTS") && (
        <Modal id="PROJECTS">
          <ExplorerContextProvider>
            <Projects />
          </ExplorerContextProvider>
        </Modal>
      )}
       {isModalOpen("CONTACT") && (
        <Modal id="CONTACT">
          <ExplorerContextProvider>
            <ContactMe />
          </ExplorerContextProvider>
        </Modal>
      )}
    </div>
  );
}
