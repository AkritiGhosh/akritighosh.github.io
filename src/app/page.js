"use client";

import useTheme from "@/hooks/useTheme";
import Modal from "@/components/window/Modal";
import StartMenu from "@/components/desktop/StartMenu";
import { ModalContext } from "@/context/ModelContext";
import { useContext } from "react";
import WorkExperience from "@/components/desktop/work-history/page";

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
          showTitleBar={false}
          className={
            "absolute bottom-16 w-1/2 min-h-[50%] left-1/4 ring-white ring-1 ring-opacity-10 rounded"
          }
        >
          <StartMenu />
        </Modal>
      )}
      {isModalOpen("EXPERIENCE") && (
        <Modal
          showTitleBar={true}
          title="Work History"
          titleIcon="/history.png"
          windowKey={"EXPERIENCE"}
        >
          <WorkExperience />
        </Modal>
      )}
    </div>
  );
}
