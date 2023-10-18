import Icons from "@/components/about/Icons";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const page = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <ScrollArea className="aboutcontainer w-[90%] sm:w-[70%] lg:w-[800px] h-[80%] md:h-[80%] p-3 mt-10 border-none pb-10">
        <div className="aboutcontainer w-full h-full flex flex-col justify-center items-center md:items-start gap-10">
          <div className="introcontainer">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              About
            </code>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
              Hi, I'm Vikash Khati, a Full Stack Web Developer. I'm passionate
              about creating seamless online experiences and bringing innovative
              web solutions to life. Let's build something amazing together.
            </p>
          </div>
          <div className="skillscontainer flex flex-col justify-center items-start gap-5">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              Skills
            </code>
            <Icons />
          </div>
          <div className="quotecontainer">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              Currently Working On Next JS ,Tailwind CSS, Typescript. 
            </code>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default page;
