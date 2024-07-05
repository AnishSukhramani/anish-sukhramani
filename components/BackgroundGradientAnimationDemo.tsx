import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-top justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className=" m-[10%] bg-clip-text text-black drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Blogs Coming Soon...
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
