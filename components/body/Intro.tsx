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
      <div className="w-12 h-12 bg-gradient-to-tr from-blue-400 to-blue-700 absolute left-40 hidden md:block blur-2xl backdrop-filter rounded-full"></div>
      <div className="w-12 h-12 bg-gradient-to-tr from-pink-400 to-pink-700 absolute right-40 hidden md:block blur-2xl backdrop-filter rounded-full "></div>
      <div className="w-12 h-12 bg-gradient-to-tr from-fuchsia-400 to-fuchsia-700 absolute  top-24 blur-2xl backdrop-filter rounded-full "></div>
      <div className="w-12 h-12 bg-gradient-to-tr from-green-400 to-green-700 absolute  bottom-24 blur-2xl backdrop-filter rounded-full "></div>
    
      <div className="flex flex-col items-center justify-center">
        <div className="textcontainer flex justify-center items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-primary">
            <span className="bg-gradient-to-l from-blue-700 to-blue-400 text-transparent bg-clip-text">Welcome </span>
             to my Portfolio
          </h1>
        </div>
        <p className="mt-4 text-md sm:text-lg md:text-xl text-gray-400">
          I am a Full Stack Website Developer
        </p>
      </div>
      <div className="resume mt-5">
        <button className="transition ease-in-out delay-150 bg-blue-500 hover:scale-110 hover:bg-primary hover:text-background duration-300 text-white px-5 py-3 rounded-md font-semibold relative z-10">
          Get Resume
        </button>
      </div>
    </section>
  );
};

export default Intro;
