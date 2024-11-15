"use client";

import React, { useState } from "react";
import {
  contact,
  experience,
  home,
  project,
} from "../../../public/sidebarIcons";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const tabs = [
    { id: "home", name: "Home", icon: home, route: "/" },
    {
      id: "experience",
      name: "My experiences",
      icon: experience,
      route: "/work-history",
    },
    { id: "works", name: "My works", icon: project, route: "/projects" },
    {
      id: "contact",
      name: "Contact me",
      icon: contact,
      route: "/get-in-touch",
    },
  ];
  return (
    <section
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={` fixed w-screen h-10 ${
        open ? "bottom-0" : "xl:-bottom-9 bottom-0"
      } left-0 right-0 bg-foreground p-2 py-5 flex justify-center items-center transition-all duration-200`}
    >
      <div className="relative h-full max-w-[50%] min-w-72 w-full flex flex-row justify-between text-coral">
        {tabs?.map((tab, index) => (
          <div
            key={"tab" + index}
            className={`${
              path == tab?.route
                ? "bottom-10 text-teal w-10 h-16"
                : "bottom-4  w-10 h-10 hover:h-16"
            } relative flex items-start justify-center group cursor-pointer hover:bottom-10 transition-all duration-0 `}
          >
            <span
              className={
                path == tab?.route
                  ? `bg-foreground rounded-t-full w-14 h-14 absolute -left-2 -top-2 -z-10 duration-75
                  ` +
                    // Before pseudo element for left side curve
                    `
                  before:content-['']
                  before:absolute
                  before:bg-background
                  before:w-9 before:h-9
                  before:-top-2
                  before:-left-8
                  before:shadow-[16px_24px]
                  before:shadow-foreground
                  before:rounded-full
                  ` +
                    // After pseudo element for right side curve
                    ` after:content-['']
                    after:absolute
                    after:bg-background 
                    after:w-9 after:h-9 
                    after:-top-2 after:left-[52px] 
                    after:shadow-[-16px_24px] after:shadow-foreground
                    after:rounded-full `
                  : // On hover
                    `hidden group-hover:block
                    
                    group-hover:bg-foreground group-hover:rounded-t-full
                    group-hover:w-14 group-hover:h-14 group-hover:absolute
                    group-hover:-left-2 group-hover:-top-2 group-hover:-z-10
                    
                  group-hover:before:content-['']
                  group-hover:before:absolute
                  group-hover:before:bg-background
                  group-hover:before:w-9 group-hover:before:h-9
                  group-hover:before:-top-2
                  group-hover:before:-left-8
                  group-hover:before:shadow-[16px_24px]
                  group-hover:before:rounded-full
                  group-hover:before:shadow-foreground
                
                 group-hover:after:content-['']
                    group-hover:after:absolute
                    group-hover:after:bg-background 
                    group-hover:after:w-9 group-hover:after:h-9 
                    group-hover:after:-top-2 group-hover:after:left-[52px] 
                    group-hover:after:shadow-[-16px_24px] group-hover:after:shadow-foreground
                    group-hover:after:rounded-full`
              }
            />
            <span className="z-10 inline-block w-6">{tab?.icon}</span>
            {path == tab?.icon && <span> </span>}
            <span
              className={`absolute w-32 text-center transition-all duration-200 ${
                path == tab?.route
                  ? "bottom-2"
                  : "-bottom-5 group-hover:bottom-2"
              } `}
            >
              {tab?.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
