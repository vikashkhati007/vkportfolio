import Image from "next/image";
import Link from "next/link";
import React from "react";

const Box = ({image,htitle,title,description,link}:any) => {
  return (
    <>
      <div
        id="project"
        className="projectcontainer h-[300px] w-[300px] overflow-hidden bg-background rounded-md border-2 border-blue-400 shadow-sm hover:scale-105 transition"
      >
        <Image
          width={300}
          height={300}
          src={`${image}`}
          alt="My Image"
          className="border-b"
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
            <button className="rounded-s-full border bg-gradient-to-r from-gray-700 to-slate-500 px-2 font-mono font-normal text-white cursor-pointer">
              LINK
            </button>
            </Link>
          </div>
          <p className="text-sm font-normal text-primary">
          {description.substring(0, 150) + "..."}
          </p>
        </div>
      </div>
    </>
  );
};

export default Box;
