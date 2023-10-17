import React from "react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="titlecontainer flex flex-col gap-5 justify-center items-center">
        <div className="titlecontainer flex flex-col gap-1">
          <h1 className="title-text scroll-m-20 text-5xl font-semibold tracking-tight lg:text-6xl">
            Vikash Khati
          </h1>
          <p className="text-base text-muted-foreground px-2 lg:text-xl">
            Hey, I am a Full Stack Web Developer
          </p>
        </div>
        <Button variant="outline" className="bg-black text-white">GET RESUME</Button>
      </div>
    </section>
  );
};

export default Hero;
