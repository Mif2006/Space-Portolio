import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-grad1 via-grad2 to-grad3" />
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
