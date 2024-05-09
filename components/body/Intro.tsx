import {HeroHighlightText} from "../effects/highlight";

const Intro = () => {
  return (
    <section
      id="intro"
      className="flex flex-col items-center justify-center w-full h-screen bg-background"
    >
      <div className="flex flex-col items-center justify-center relative border-white">
        <div className="textcontainer flex justify-center items-center">
        </div>
        <HeroHighlightText/>
      </div>
    </section>
  );
};

export default Intro;
