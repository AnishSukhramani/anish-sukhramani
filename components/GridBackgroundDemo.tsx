import React from "react";
import { FlipWords } from "./ui/flip-words";

export function GridBackgroundDemo() {
    const words = ["Hello,", "Hola,", "Bonjour,", "Namaste,"];
    const words1 = ["React Developer.", "UI/UX Designer.", "Cloud Digital Leader."];
  return (
    <div className="h-[45rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={words} />
      {/* <p className="text-4xl pt-0 sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700 py-8">
        Anish Sukhramani
      </p> */}
        <br />
        <p className="pl-2">
        I am Anish Sukhramani
        </p>
        {/* <p className="pl-2 text-xl">And I am a </p><div className="text-xl"><FlipWords words={words1} /></div> */}
        <div className="flex flex-col sm:flex-row justify-start">
  <p className="pl-2 text-xl">And I am a </p>
  <div className="text-xl"><FlipWords words={words1} /></div>
</div>

      </div>
    </div>
    </div>
  );
}
