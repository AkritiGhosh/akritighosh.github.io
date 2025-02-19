import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
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
          setLoading(false);
          console.log("SUCCESS!");
          form.current[0].value = "";
          form.current[1].value = "";
          form.current[2].value = "";
          form.current[3].value = "";
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full grow p-4 lg:py-5 lg:px-[10%] flex flex-col justify-center">
      <h1 className="text-lg lg:text-xl font-medium text-white">
        {"Let's talk !"}
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
            disabled={loading}
            onClick={handleSubmit}
            type="submit"
            className="w-auto h-10 flex gap-4 text-white bg-teal hover:bg-blue-700 rounded-lg items-center px-4 float-right"
          >
            {loading ? (
              <svg
                aria-hidden="true"
                class="inline size-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              <>
                <span className="text-base">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailSection;
