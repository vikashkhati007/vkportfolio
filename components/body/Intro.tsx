import {HeroHighlightText} from "../effects/highlight";

const Intro = () => {
  return (
    <section
      id="intro"
      className="flex flex-col items-center justify-center w-full h-screen"
    >
      <div className="flex flex-col items-center justify-center relative border-white">
        <HeroHighlightText/>
      </div>
    </section>
  );
};

export default Intro;
