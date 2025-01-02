"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);
  const interval = 5000;
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setTimer((prev) => (prev < 100 ? prev + 1 : 0));
    }, interval / 100); // Update progress every 1% of the interval time

    const cardInterval = setInterval(() => {
      flipCards();
    }, interval);

    return () => {
      clearInterval(cardInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const flipCards = () => {
    setTimer(0);
    setCards((prevCards) => {
      const newArray = [...prevCards]; // create a copy of the array
      newArray.unshift(newArray.pop()); // move the last element to the front
      return newArray;
    });
  };

  return (
    <div className="relative  h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
            <button onClick={flipCards}>{"->"}</button>
            {/* Loader */}
            <div className="absolute bottom-0 right-0 flex w-[calc(100%-40px)] h-px left-5 ">
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
