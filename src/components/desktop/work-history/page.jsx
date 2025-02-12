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

const sproutsPortfolio = [
  "Built a powerful AI-driven hiring platform from the ground up—think LinkedIn meets an AI-powered ATS that matches candidates to jobs based on resumes and job descriptions.",
  "Created an interactive job search experience, where candidates could auto-fill profiles via resume parsing, get AI-generated match scores, and apply directly.",
  "Developed an advanced hiring dashboard for recruiters, integrating real-time analytics, job tracking, and candidate assessments in one place.",
  "Engineered AI-powered interview assistance, where an AI bot joined interviews, transcribed responses in real-time, and suggested follow-up questions to recruiters.",
  "Designed data-driven hiring insights using D3.js, giving recruiters clear visual reports on job performance, candidate pipeline, and team efficiency.",
  "Built a custom component library with Storybook and Tailwind, making UI development faster and more consistent across teams.",
  "Managed hiring for the engineering team, conducting interviews, onboarding developers, and scaling the team from 4 to 12 members.",
  "Took on Scrum Master & Project Management responsibilities, leading sprint planning, managing tasks in Jira, and ensuring smooth development cycles.",
  "Integrated third-party tools like Twilio (for messaging & calls), OpenAI (for AI-powered job descriptions), and Sentry (for error tracking) to enhance the product’s functionality.",
];

const sharboScreenshots = [
  "sharbo.jpg",
  "sharbo_analysis.png",
  "sharbo_form.png",
  "sharbo_charts.png",
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
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
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
          <p className="text-neutral-200 text-base font-normal mb-4">
            Joined{" "}
            <span className="text-2xl font-medium inline-block ml-2">
              SproutsAI
            </span>
          </p>

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
          <CardStack items={CARDS} />
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
          <p className="text-neutral-200 text-base font-normal mb-4">
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
              "techment/techment_logo.jpg",
              "techment/techment-nextwealth.jpg",
              "techment/techment_team.jpg",
              "techment/techment-office.jpg",
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
