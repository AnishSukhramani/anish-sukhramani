"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Why me?",
    description:
      "With a strong background in front-end design with an emphasis on UI and UX for aesthetically pleasing and intuitive apps, I possess a thorough grasp of React and Next.js. I'm competent at connecting the backend and integrating APIs. I'm now pursuing my goal of becoming a qualified MERN stack developer.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/UI-Design.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "API Design and Integration",
    description:
      "I have substantial experience in designing APIs and integrating third-party services, which includes ensuring efficient communication and data exchange within applications. This involves crafting robust, scalable API architectures and seamlessly connecting various external services to enhance application functionality and performance.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/API.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Cloud Expertise",
    description:
      "I am well-versed in the services offered by Google Cloud Platform (GCP), including Compute Engine, Kubernetes Engine, and BigQuery. I am familiar with managing and optimizing applications on GCP, ensuring high performance, security, and scalability. This enables me to build robust cloud-based solutions efficiently.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Google-Cloud.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version Control and Collaboration",
    description:
      "I am proficient in using Git for version control, allowing me to efficiently manage codebases, collaborate with other developers, and maintain a clean and organized workflow.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Version.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="bg-black overflow-hidden">
      <StickyScroll content={content} />
    </div>
  );
}
