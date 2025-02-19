import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full grow p-4 lg:py-5 lg:px-[10%] flex flex-col justify-center">
      <h1 className="text-lg lg:text-xl font-medium text-white">
        Let's talk !
      </h1>
      <h4 className="text-sm font-medium text-neutral-500">
        Send me an email at <i>akritighosh98@gmail.com</i>
      </h4>
      <form
        ref={form}
        className="w-full flex flex-col gap-4 items- mt-5 h-auto lg:h-5/6"
      >
        <div className="w-full">
          <label
            className="text-sm text-neutral-400 block relative"
            htmlFor="user_name"
          >
            Name
          </label>
          <input
            placeholder="(Optional)"
            className="w-full relative block bg-transparent border border-neutral-400/40 rounded-md my-2 h-10 px-2.5 placeholder:text-neutral-700"
            name="user_name"
            type="text"
          />
        </div>
        <div className="w-full">
          <label
            className={`text-sm text-neutral-400 block relative after:absolute after:content-["*"] after:text-red-700 after:text-base after:pl-1 after:inline-block`}
            htmlFor="user_email"
          >
            Email
          </label>
          <input
            required
            className="w-full relative block bg-transparent border border-neutral-400/40 rounded-md my-2 h-10 px-2.5"
            name="user_email"
            type="email"
          />
        </div>
        <div className="w-full grow">
          <label
            className={`text-sm text-neutral-400 block relative after:absolute after:content-["*"] after:text-red-700 after:text-base after:pl-1 after:inline-block`}
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full relative block bg-transparent border border-neutral-400/40 rounded-md my-2 h-[calc(100%-40px)] p-2 text-base"
            name="message"
            type="text"
            rows={10}
          />
        </div>
        <div className="w-full text-right">
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-auto h-10 flex gap-4 text-white bg-teal hover:bg-blue-700 rounded-lg items-center px-4 float-right"
          >
            <span className="text-base">Send</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailSection;
