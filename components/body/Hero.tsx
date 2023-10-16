import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
const Hero = () => {
  return (
    <section className="w-full md:w-[80%] m-auto max-h-min pt-20 justify-between flex flex-col md:flex-row">
      <div className="titlecontainer p-10 text-center md:text-left flex flex-col gap-5 md:gap-3">
        <div className="titlecontainer flex flex-col gap-1">
          <h1 className="scroll-m-20 text-5xl font-semibold tracking-tight lg:text-6xl">
            Vikash Khati
          </h1>
          <p className="text-base text-muted-foreground px-2 lg:text-xl">
            Hey, I am a Full Stack Web Developer
          </p>
        </div>
        <div className="buttoncontainer">
          <Button variant="secondary" className="bg-green-600 font-semibold mx-2 hover:bg-primary text-white hover:text-background">
            GET RESUME
          </Button>
        </div>
      </div>
      <div className="imagescontainer">
        <h1>Hello</h1>
      </div>
    </section>
  );
};

export default Hero;
