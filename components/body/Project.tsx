"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Box from "./projects/Box";
import data from "@/data/project.json";

const Project = () => {
  const [numBoxes, setNumBoxes] = useState(3); // state to keep track of number of boxes to show
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  // function to handle "Show More" button click
  const handleShowMore = () => {
    setNumBoxes(numBoxes + 3); // increase number of boxes to show by 3
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full max-h-fit flex justify-center items-center overflow-y-scroll pt-24"
    >
      <div className="flex flex-col gap-5 items-center justify-center bg-background w-[950px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.projects.slice(0, numBoxes).map((project, index) => (
            <Box key={index} image ={project.image} htitle = {project.title.split(' ')[0]} title ={project.title.split(' ')[1]} description={project.description} link ={project.link} />
          ))}
        </div>
        {numBoxes < 9 && ( // show "Show More" button only if not all boxes are shown
          <button
            className="border px-5 py-3 rounded-md bg-gradient-to-t from-blue-600 to-blue-400 text-white font-semibold transition-all duration-100 hover:from-blue-400 hover:to-blue-600"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
};

export default Project;
