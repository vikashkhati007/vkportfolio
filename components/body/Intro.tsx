import Link from "next/link";
import { SparklesPreview } from "../effects/sparkle";

const Intro = () => {
  return (
    <section
      id="intro"
      className="flex flex-col items-center justify-center w-full h-screen bg-background"
    >
      <div
        id="texture"
        className="backgroundtexture w-full h-screen absolute"
      ></div>
      <SparklesPreview />
      <div className="flex flex-col items-center justify-center relative dark:bg-black drk:bg-blend-screen border-white">
        <div className="textcontainer flex justify-center items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-primary">
            <span className="bg-gradient-to-l from-blue-700 to-blue-400 text-transparent bg-clip-text">
              Welcome{" "}
            </span>
            to my Portfolio
          </h1>
        </div>
        <p className="text-md sm:text-lg md:text-xl text-gray-400 mt-2">
          I am a Full Stack Website Developer
        </p>
      </div>
      <div className="resume mt-5">
        <Link
          href={"https://links.cuvette.tech/student/65184d3424d1c7ceafba0784"}
        >
          <button className="transition ease-in-out delay-150 bg-blue-500 hover:scale-110 hover:bg-primary hover:text-background duration-300 text-white px-5 py-3 rounded-md font-semibold relative z-10">
            Get Resume
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
