"use client";
import { useEffect, useState, useRef, useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ModalContext } from "@/context/ModelContext";

export const CardStack = ({ items, offset, scaleFactor }) => {
  const { isModalMaximised } = useContext(ModalContext);

  const CARD_OFFSET = offset || 2;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);
  const intervalTime = 5000;
  const [timer, setTimer] = useState(0);
  const cardIntervalRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const resetIntervals = () => {
    // Clear existing intervals
    if (cardIntervalRef.current) clearInterval(cardIntervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    // Restart progress and card intervals
    setTimer(0);
    progressIntervalRef.current = setInterval(() => {
      setTimer((prev) => (prev < 100 ? prev + 1 : 0));
    }, intervalTime / 100);

    cardIntervalRef.current = setInterval(() => {
      flipCards();
    }, intervalTime);
  };

  useEffect(() => {
    resetIntervals(); // Initialize intervals on mount

    return () => {
      // Clear intervals on component unmount
      if (cardIntervalRef.current) clearInterval(cardIntervalRef.current);
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
    };
  }, []);

  const flipCards = () => {
    setTimer(0); // Reset the timer to start the loader anew
    setCards((prevCards) => {
      const newArray = [...prevCards]; // Create a copy of the array
      newArray.unshift(newArray.pop()); // Move the last element to the front
      return newArray;
    });
    resetIntervals(); // Restart intervals when manually flipping cards
  };

  return (
    <div
      className={`relative h-80 min-w-60 w-4/5 md:h-80 ${
        isModalMaximised("EXPERIENCE")
          ? "lg:w-[25rem]"
          : "lg:max-w-80"
      }`}
    >
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className={`absolute bg-[#181818] h-80 w-full md:h-80  ${
              isModalMaximised("EXPERIENCE")
                ? "lg:w-[25rem]"
                : "md:w-60 lg:w-80 "
            } rounded-3xl p-4 shadow-xl border border-white/[0.1] shadow-white/[0.05] flex flex-col justify-between`}
            style={{
              transformOrigin: "center right",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              right: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // Decrease scale for cards that are behind
              zIndex: cards.length - index, // Decrease z-index for the cards that are behind
            }}
          >
            <div className="flex flex-col gap-2 grow justify-evenly">
              <p className="font-medium text-base md:text-lg text-white pb-1.5 md:pb-2.5 border-b border-neutral-500">
                {card.title}
              </p>
              {card?.imgSrc && (
                <Image
                  width={240}
                  height={120}
                  className="w-auto h-20 md:h-[8.25rem] object-cover rounded-lg mx-auto"
                  src={"/featureCards/" + card.imgSrc}
                  alt={card.title}
                />
              )}
              <div className="flex flex-wrap gap-2">
                {card?.tags?.map((tag, i) => (
                  <span
                    key={card?.id + i}
                    className="font-normal bg-coal/40 text-neutral-200 py-0.5 md:py-1 px-1.5 md:px-2 rounded-lg text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {card?.description && (
                <p className="text-white text-xs md:text-sm">
                  {card.description}
                </p>
              )}
            </div>
            {/* Loader */}
            <div className="absolute bottom-0 right-0 flex w-[calc(100%-40px)] h-px left-5">
              <div
                className="bg-teal h-full transition-all"
                style={{ width: `${timer + 10}%` }}
              ></div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
