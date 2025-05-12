import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full max-h-fit py-24 flex justify-center items-center"
      aria-label="About Vikash Khati"
      itemScope
      itemType="http://schema.org/Person"
    >
      <div className="aboutcontainer w-[95%] md:w-[800px] space-y-12 ">
        <div className="about flex flex-col md:flex-row justify-center items-center gap-5">
          <Image
            className="rounded-full flex-shrink-0 border-2"
            src={"https://avatars.githubusercontent.com/u/124573409?v=4"}
            width={150}
            height={150}
            alt="Vikash Khati - Full Stack Developer"
            itemProp="image"
            priority
          />
          <p className="pt-2 w-fit font-semibold text-lg md:text-xl text-center md:text-start" itemProp="description">
            Hey, I am{" "}
            <span className="underline decoration-red-500">Vikash Khati</span> ,
            a seasoned{" "}
            <span className="underline decoration-blue-500">
              Full Stack Web Developer
            </span>{" "}
            with an enriching journey spanning nearly
            <span className="underline decoration-green-500">
              {" "}
              three years{" "}
            </span>
            . In my dynamic career, I've been at the forefront of crafting
            immersive web experiences, demonstrating proficiency in cutting-edge
            technologies.
          </p>
        </div>
        <div className="experisecontainer space-y-7">
          <h1 className="text-primary font-semibold text-2xl text-center md:text-start p-2">
            A
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              {" "}
              Glimpse{" "}
            </span>
            into My Expertise
          </h1>
          <ul className="list-disc pl-6 mb-4 text-base md:text-lg">
            <li>
              <strong>Framework Maestro:</strong> I specialize in leveraging
              advanced frameworks, with
              <span className="underline decoration-yellow-500"> Next.js </span>
              being a cornerstone in my development arsenal. This allows me to
              build robust and scalable web applications, ensuring seamless user
              experiences.
            </li>
            <li>
              <strong>Style with Precision:</strong>{" "}
              <span className="underline decoration-blue-500">
                {" "}
                Tailwind CSS{" "}
              </span>
              is my canvas for precision styling. Every project I undertake is
              not just functional but also a visual masterpiece, meticulously
              designed to leave a lasting impression.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
