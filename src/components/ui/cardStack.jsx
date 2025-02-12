"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 5;
  const SCALE_FACTOR = scaleFactor || 0.03;
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
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-background h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-white/[0.1] shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top right",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              right: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // Decrease scale for cards that are behind
              zIndex: cards.length - index, // Decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="font-medium text-white">
                {card.name}
              </p>
              <p className="font-normal text-neutral-200">
                {card.designation}
              </p>
            </div>
            <button onClick={flipCards}>{"->"}</button>
            {/* Loader */}
            <div className="absolute bottom-0 right-0 flex w-[calc(100%-40px)] h-px left-5">
              <div
                className="bg-blue-500 h-full transition-all"
                style={{ width: `${timer}%` }}
              ></div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
