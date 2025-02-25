"use client";
import { ModalContext } from "@/context/ModelContext";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const { isModalMaximised } = useContext(ModalContext);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-[#202020] font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto pb-5 pt-10 md:pt-16 px-8 md:px-8 lg:px-10 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl xl:text-9xl text-white max-w-4xl font-display">
          My experiences so far ...
        </h1>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={"exp" + index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div
              className={`sticky flex flex-col md:flex-row items-center top-40 self-start max-w-xs ${
                isModalMaximised("EXPERIENCE") ? "lg:max-w-md md:w-full" : "lg:max-w-sm"
              }`}
            >
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#202020] flex items-center justify-center">
                <div className="h-2 w-2 md:h-4 md:w-4 rounded-full bg-teal border border-white p-1.5 md:p-2" />
              </div>
              <h3 className="hidden md:inline-block text-xl md:pl-20 md:text-5xl !leading-normal font-bold text-white font-nums">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-4 md:pl-4 w-full min-w-80 grow">
              <h3 className="md:hidden block text-2xl mb-4 text-left !leading-normal font-bold text-white font-nums">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-[31px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-white via-teal to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
