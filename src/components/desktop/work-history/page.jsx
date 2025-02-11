"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CardStack } from "@/components/ui/cardStack";

const TechmentPortfolio = [
  "Built customizable digital fliers and microsites for major universities and hospitals (Stanford, Harvard, UBC) to boost donor engagement. Think of it as a dynamic CMS but tailored for non-profits.",
  "Created analytics reports using Google Charts to visualize fundraising trends and donor behavior, making reports more insightful.",
  "Developed a fully responsive, dynamic template CMS that allowed clients to generate webpages with unique URL and download high-quality PDFs of promotional materials.",
  "Took ownership of the reports and analytics section, improving performance and making data insights more intuitive and accessible.",
  "Documented onboarding processes for new developers and clients, which became the go-to playbook for every new team member. Conducted code reviews and helped onboard new developers, ensuring clean and maintainable code.",
  "Worked in a fast-paced Agile environment with daily scrums and quick iterative development based on client feedback.",
];
const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, I want to use them in my project. Framer motion
        is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing, deleting it right away because yolo.
        Instead, I would like to call it X.com so that it can easily be confused
        with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of Fight Club is that you do not talk about fight club.
        The second rule of Fight club is that you DO NOT TALK about fight club.
      </p>
    ),
  },
];

export default function WorkExperience() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-4">
            Joined{" "}
            <span className="text-2xl font-medium inline-block ml-2">
              SproutsAI
            </span>
          </p>
          <CardStack items={CARDS} />

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
          <p className="mb-4">
            <span className="text-neutral-200 text-base font-normal">As</span>
            <span className="text-2xl font-medium inline-block ml-2">
              Senior Software Engineer - Frontend lead
            </span>
          </p>
          <ul className="leading-8 text-base">
            <li>
              <span className="text-coral inline-block mr-2">✫</span>
              Part of the founding team, as the lead of frontend team{" "}
            </li>
            <li>
              <span className="text-coral inline-block mr-2">✫</span>
              Managed team of 10+ engineers; contributed to origin of 15k lines
              React project{" "}
            </li>
            <li>
              <span className="text-coral inline-block mr-2">✫</span>
              Supervised the project deadlines and team performance; conducted
              sprint calls and meeting as the Scrum master
            </li>
            <li>
              <span className="text-coral inline-block mr-2">✫</span>
              Configured the platform architecture; contributed to the most
              initial conception; setup and oversaw different project management
              and team management tools; assisted in hosting the web application
              via Route53
            </li>
            <li>
              <span className="text-coral inline-block mr-2">✫</span>
              Mentored the junior developers and interns{" "}
            </li>
            <li>
              <span className="text-coral inline-block mr-2">✫</span>
              Assigned daily tasks and supervised their status using Jira{" "}
            </li>
            <li>
              <span className="text-coral inline-block mr-2">✫</span>
              Developed multiple features from initial requirement gathering to
              deployment into production
            </li>
            <li>
              <span className="text-coral inline-block mr-2">✫</span>
              Reviewed the code and PRs of team members
            </li>
            <li>
              <span className="text-coral inline-block mr-2">✫</span>
              Integrated several 3rd party tools and softwares for complex
              features such as Authentication & Authorization, SSO, video
              conferencing, AI powered tools, data synchronization, sharing
              information etc
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-4">
            Joined{" "}
            <span className="text-2xl font-medium inline-block ml-2">
              Techment Technologies
            </span>
          </p>
          <p className="mb-4">
            <span className="text-neutral-200 text-base font-normal">As</span>
            <span className="text-2xl font-medium inline-block ml-2">
              Software Engineer
            </span>
          </p>
          <div className="flex flex-col lg:flex-row h-80 w-full relative gap-2">
            {[
              "techment_logo.jpg",
              "techment-nextwealth.jpg",
              "techment_team.jpg",
              "techment-office.jpg",
            ]?.map((url, i) => (
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
            {TechmentPortfolio?.map((portfolio, i) => (
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
            <p className="text-neutral-800 dark:text-coal text-base md:text-xl font-normal">
              {"Graduated from college"}
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-2xl font-normal">
              {"Bachelors of Technology - Computer Science & Technology"}
            </p>
            <p className="text-neutral-800 dark:text-coral text-base md:text-xl font-normal">
              {"Government Engineering College, Raipur"}
            </p>
          </div>
        </div>
      ),
    },
  ];
  return <Timeline data={data} />;
}
