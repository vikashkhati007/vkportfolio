"use client";
import React from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const currentDate = new Date();
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  const date: number = Date.now();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const fullname = e.currentTarget.fullname.value;
    const email = e.currentTarget.email.value;
    const message = e.currentTarget.message.value;
  };
  return (
    <section
      id="contact"
      className="w-full h-screen flex justify-center items-center "
    >
      <div className="border-2 border-blue-400 dark:border-none p-5 flex flex-col gap-5 justify-center items-center rounded-md shadow-md bg-white bg-opacity-5">
        <h1 className="text-primary font-semibold text-3xl">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Contact{" "}
          </span>
          Form
        </h1>
        <form
          className="w-full lg:w-[600px] flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <input
            className="border p-2 rounded-md text-primary w-[300px] sm:w-[500px] md:w-[600px] outline-blue-400"
            placeholder="Enter Your Full Name"
            name="fullname"
          />
          <input
            className="border p-2 rounded-md text-primary w-[300px] sm:w-[500px] md:w-[600px] outline-blue-400"
            placeholder="Enter Your Email Address"
            name="email"
          />
          <textarea
            className="border p-2 rounded-md text-primary w-[300px] sm:w-[500px] md:w-[600px] outline-blue-400 resize-none"
            placeholder="Enter Your Message"
            name="message"
            rows={3}
          />
          <button className="bord w-40 m-auto px-3 py-2 rounded-md bg-gradient-to-t from-blue-600 to-blue-400 text-white font-semibold transition-all duration-100 hover:from-blue-400 hover:to-blue-600">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
