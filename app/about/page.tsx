import Icons from "@/components/about/Icons";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const page = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <ScrollArea className="aboutcontainer w-[90%] md:w-[700px] h-[80%] md:h-[80%] p-3 mt-10 border-none">
        <div className="aboutcontainer w-full h-full flex flex-col justify-center items-center md:items-start gap-10">
          <div className="introcontainer">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              @vikashkhati007
            </code>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Hi, I'm Vikash Khati, a Full Stack Web Developer. I'm passionate
              about creating seamless online experiences and bringing innovative
              web solutions to life. Let's build something amazing together.
            </p>
          </div>
          <div className="skillscontainer flex flex-col justify-center sm:items-start items-center">
            <h2 className="scroll-m-20 text-primary border-b mb-2 ml-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">
             My SKILLS 
            </h2>
            <Icons />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default page;
