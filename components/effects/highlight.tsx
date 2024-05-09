"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import Link from "next/link";
import { HoverBorderGradient } from "../ui/moving-border";

export function HeroHighlightText() {
  return (
    <HeroHighlight>
      <motion.h1
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
        className=" px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
       <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-primary ">
            <span className="bg-gradient-to-l from-blue-700 to-blue-400 text-transparent bg-clip-text">
              Welcome{" "}
            </span>
            to my Portfolio
          </h1>
        <Highlight className="text-black text-xl sm:text-2xl md:text-3xl dark:text-white px-2 ">
          Full Stack Web Developer
        </Highlight>
       
      </motion.h1>
    </HeroHighlight>
  );
}
