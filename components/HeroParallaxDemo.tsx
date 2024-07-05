"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/anishsukhramani/",
    thumbnail:
      "/Sites/LinkedIn.png",
  },
  {
    title: "GitHub",
    link: "https://github.com/AnishSukhramani",
    thumbnail:
      "/Sites/Github.png",
  },
  {
    title: "LeetCode",
    link: "https://leetcode.com/u/AnishSukhramani/",
    thumbnail:
      "/Sites/LEETCODE.png",
  },

  {
    title: "GeeksForGeeks",
    link: "https://www.geeksforgeeks.org/user/anishsukhramani/",
    thumbnail:
      "/Sites/GFG.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "React JS",
    link: "https://react.dev/",
    thumbnail:
      "/Sites/React.png",
  },
  {
    title: "Next JS",
    link: "https://nextjs.org/",
    thumbnail:
      "/Sites/NEXTJS.png",
  },
  {
    title: "Tailwind",
    link: "https://tailwindcss.com/",
    thumbnail:
      "/Sites/Tailwind.png",
  },
  {
    title: "Stream",
    link: "https://getstream.io/",
    thumbnail:
      "/Sites/Stream.png",
  },
  {
    title: "Clerk",
    link: "https://clerk.com/",
    thumbnail:
      "/Sites/Clerk.png",
  },

  {
    title: "C++",
    link: "https://isocpp.org/",
    thumbnail:
      "/Sites/cpp.png",
  },
  {
    title: "Java",
    link: "https://www.java.com/en/",
    thumbnail:
      "/Sites/Java.png",
  },
  {
    title: "Python",
    link: "https://www.python.org/",
    thumbnail:
      "/Sites/Python.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
];
