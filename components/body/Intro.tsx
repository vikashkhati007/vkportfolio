"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { Rowdies } from "next/font/google";
import { cn } from "@/lib/utils";
const rowdies = Rowdies({ subsets: ["latin"], weight: ["300"] });

const Intro = () => {
  return (
    <section
      id="intro"
      className="flex flex-col items-center justify-center w-full h-screen"
      aria-label="Introduction Section"
    >
      <div className="flex flex-col items-center justify-center relative border-white">
        <h1 
          className={cn("text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-4 lg:mb-1", rowdies.className)}
          itemProp="name"
        >
          Vikash Khati
        </h1>
        <HeroHighlight>
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl text-center mx-auto"
            itemProp="jobTitle"
          >
            <Highlight className="pacifico-regular text-black text-xl sm:text-2xl md:text-3xl dark:text-white px-2 backdrop-blur-sm flex justify-center items-center mx-10">
              full stack web developer
            </Highlight>
          </motion.h2>
        </HeroHighlight>
      </div>
    </section>
  );
};

export default Intro;
