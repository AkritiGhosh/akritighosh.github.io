import Image from "next/image";
import { wave } from "/public/shake-hand.gif";

export default function Home() {
  return (
    <div
      style={{backgroundSize:"200% 200%"}}
      className="relative w-screen h-screen md:px-[10%] px-4 pb-6 snap-start snap-always flex flex-col text-navy justify-center gap-4">
      <h1 className="md:text-8xl text-6xl  !leading-loose font-medium flex flex-row-reverse md:flex-row items-center gap-4 md:justify-start justify-end">
        <Image
          className="object-contain max-h-28 h-20 md:h-28 w-auto"
          src="/shake-hand.gif"
          width={112}
          height={112}
          alt="Hello"
        />{" "}
        Hi!
      </h1>
      <h1 className="md:text-8xl text-6xl !leading-tight font-semibold">
        I am <br className="block md:hidden" /> Akriti Ghosh
      </h1>
      <h2 className="md:text-4xl text-2xl !leading-normal font-medium">
        Currently working as Senior Software Engineer
      </h2>
      <span>
        <button
          type="button"
          className="relative w-auto  h-auto group p-2 pr-3 inline-flex gap-4 items-center bg-transparent text-coral
            after:content-[''] after:w-full after:h-full after:rounded-lg  after:absolute after:top-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:ease-linear after:duration-200 after:bg-navy"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="z-10 w-10 min-w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
          <h1 className="z-10 w-full hidden group-hover:block delay-200 text-coral text-2xl">
            Check out my work
          </h1>
        </button>
      </span>
    </div>
  );
}
