"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CardStack } from "@/components/ui/cardStack";
import {
  sharboScreenshots,
  sproutsFeatureCards,
  sproutsPortfolio,
  techmentImgs,
  techmentPortfolio,
} from "./content";
import Header from "./Header";

export default function WorkExperience() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <Header
            company={"Stealth startup"}
            position={"Software Engineer | Frontend developer"}
            jobType={"Contract"}
            location={"Fully Remote"}
          />

          <div className="grid grid-cols-2 gap-4">
            {sharboScreenshots?.map((pic) => (
              <Image
                key={pic}
                src={"/sharboScreenshots/" + pic}
                alt="Sharbo - Product hunt screenshots"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md shadow-neutral-600/40"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <Header
            company={"SproutsAI"}
            position={"Senior Software Engineer | Lead Frontend developer"}
            jobType={"Full-time"}
            location={"Fully Remote"}
          />

          {/* <p>
          Authentication & Authorization
          SSO
          RBAC
          PDF parser
          Real time video conferencing
          RT transcription 
          Video summarization
          Dynamic analytics
          </p> */}

          <CardStack items={sproutsFeatureCards} />
          <ul className="leading-8 text-base">
            {sproutsPortfolio?.map((pt, ix) => (
              <li key={"spr" + ix}>
                <span className="text-coral inline-block mr-2">✫</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <Header
            company={"Techment Technology"}
            position={"Software Engineer"}
            jobType={"Full-time"}
            location={"Bhilai, India"}
          />
          <div className="flex flex-col lg:flex-row h-80 w-full relative gap-2">
            {techmentImgs?.map((url, i) => (
              <div
                key={url}
                className={`relative min-w-16 w-full lg:w-1/4 hover:w-full h-1/4 lg:h-80 hover:h-full focus:h-full bg-center bg-no-repeat ${
                  i == 0 ? "bg-contain bg-white" : "bg-cover"
                } transition-all duration-500 rounded-lg `}
                style={{ backgroundImage: 'url("' + url + '")' }}
              />
            ))}
          </div>
          <ul className="text-base mt-5 leading-8">
            {techmentPortfolio?.map((portfolio, i) => (
              <li key={"tp" + i}>
                <span className="text-coral inline-block mr-2">✫</span>
                <span>{portfolio}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "2016 - 2020",
      content: (
        <div>
          <div className="w-full mt-5 mb-8 flex flex-col gap-2">
            <p className="text-coal text-base md:text-xl font-normal">
              {"Graduated from college"}
            </p>
            <p className="text-neutral-200 text-base md:text-2xl font-normal">
              {"Bachelors of Technology - Computer Science & Technology"}
            </p>
            <p className="text-coral text-base md:text-xl font-normal">
              {"Government Engineering College, Raipur"}
            </p>
          </div>
        </div>
      ),
    },
  ];
  return <Timeline data={data} />;
}
