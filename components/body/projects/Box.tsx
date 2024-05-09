import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HoverBorderGradient } from "../../ui/moving-border";

const Box = ({ image, htitle, title, description, link }: any) => {
  return (
    <>
      <HoverBorderGradient
        containerClassName="rounded"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
      
        <div
          id="project"
          className="projectcontainer group h-fit m-auto md:m-0 overflow-hidden bg-background rounded-md shadow-sm hover:scale-105 transition"
        >

          <Image
            width={300}
            height={300}
            src={`${image}`}
            alt="My Image"
            className="border-b w-full"
          />
          <div className="aboutcontainer space-y-2 p-3">
            <div className="title flex justify-between">
              <h1 className="text-xl font-semibold text-primary">
                <span className="bg-gradient-to-l from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  {htitle}
                </span>{" "}
                {title}
              </h1>
              <Link href={link}>
                <button className="rounded-s-full border bg-gradient-to-r from-gray-700 to-slate-500 px-2 font-mono font-normal text-white cursor-pointer hover:from-blue-300 hover:to-blue-500 ">
                  LINK
                </button>
              </Link>
            </div>
            <p className="text-sm font-normal text-primary">
              {description.substring(0, 150) + "..."}
            </p>
          </div>
        </div>
      </HoverBorderGradient>
    </>
  );
};

export default Box;
