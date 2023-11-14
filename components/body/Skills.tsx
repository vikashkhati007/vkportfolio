import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <section
      id="social"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="socialcontainer w-[95%] md:w-[800px] bg-white bg-opacity-5 border p-5 rounded-md space-y-5">
      <h1 className='text-primary font-semibold text-3xl text-center'>
          <span className='bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'>Profesional </span>
           Skills</h1>
        <div className="workcontainer flex flex-wrap justify-center items-center gap-5">
          <div className="frameworkdiv p-2 shadow-md rounded-md bg-gradient-to-r from-white to-gray-100 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center">
            <Image
              src={"/socialmedia/html.svg"}
              width={50}
              height={50}
              alt="image"
            />
          </div>
          <div className="frameworkdiv p-2 shadow-md rounded-md bg-gradient-to-r from-white to-gray-100 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center">
            <Image
              src={"/socialmedia/css.svg"}
              width={50}
              height={50}
              alt="image"
            />
          </div>
          <div className="frameworkdiv p-2 shadow-md rounded-md bg-gradient-to-r from-white to-gray-100 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center">
            <Image
              src={"/socialmedia/javascript.svg"}
              width={50}
              height={50}
              alt="image"
            />
          </div>
          <div className="frameworkdiv p-2 shadow-md rounded-md bg-gradient-to-r from-white to-gray-100 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center">
            <Image
              src={"/socialmedia/mongodb.svg"}
              width={25}
              height={25}
              alt="image"
            />
          </div>
          <div className="frameworkdiv flex justify-center items-center p-2 shadow-md rounded-md bg-gradient-to-r from-white to-gray-100 w-14 h-14 md:w-16 md:h-16">
            <Image
              src={"/socialmedia/nextjs.svg"}
              width={50}
              height={50}
              alt="image"
            />
          </div>
          <div className="frameworkdiv p-2 shadow-md rounded-md bg-gradient-to-r from-white to-gray-100 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center">
            <Image
              src={"/socialmedia/nodejs.svg"}
              width={50}
              height={50}
              alt="image"
            />
          </div>
          <div className="frameworkdiv p-2 shadow-md rounded-md bg-gradient-to-r from-white to-gray-100 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center">
            <Image
              src={"/socialmedia/reactjs.svg"}
              width={50}
              height={50}
              alt="image"
            />
          </div>
          <div className="frameworkdiv p-2 shadow-md rounded-md bg-gradient-to-r from-white to-gray-100 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center">
            <Image
              src={"/socialmedia/tailwindcss.svg"}
              width={50}
              height={50}
              alt="image"
            />
          </div>
          <div className="frameworkdiv p-2 shadow-md rounded-md bg-gradient-to-r from-white to-gray-100 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center">
            <Image
              src={"/socialmedia/typescript.svg"}
              width={50}
              height={50}
              alt="image"
            />
          </div>
          <div className="frameworkdiv p-2 shadow-md rounded-md bg-gradient-to-r from-white to-gray-100 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center">
            <Image
              src={"/socialmedia/prisma.svg"}
              width={50}
              height={50}
              alt="image"
            />
          </div>
          <div className="frameworkdiv p-2 shadow-md rounded-md bg-gradient-to-r from-white to-gray-100 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center">
            <Image
              src={"/socialmedia/appwrite.svg"}
              width={50}
              height={50}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
