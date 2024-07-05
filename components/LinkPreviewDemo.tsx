"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    // <div className="flex justify-center items-center h-[40rem] flex-col px-4">
    <div className="text-white text-justify lg:items-center lg:align-middle lg:text-right px-10">
      <p className="text-neutral-500 dark:text-neutral-400 mx-auto mb-10">
      Let’s connect on  {" "}
        <LinkPreview url="https://www.linkedin.com/in/anishsukhramani/" className="font-bold">
        LinkedIn,
        </LinkPreview>{" "}
        <LinkPreview url="https://www.instagram.com/anishsukhramani/?igshid=m818aoz93phw" className="font-bold">
          Instagram
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://x.com/AnishSukhramani" className="font-bold">
        Twitter
        </LinkPreview>{" "}

        to stay updated on my latest projects and discover more opportunities together.
        Explore my work and collaborations on{" "}
        <LinkPreview
          url="https://github.com/AnishSukhramani"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          GitHub
        </LinkPreview>{". "}
        Engage with me on these platforms, and let’s innovate together!
      </p>
    </div>
  );
}
