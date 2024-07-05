// import { BackgroundGradientAnimationDemo } from "@/components/BackgroundGradientAnimationDemo";
// import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import { GlobeDemo } from "@/components/GlobeDemo";
import { GridBackgroundDemo } from "@/components/GridBackgroundDemo";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { LinkPreviewDemo } from "@/components/LinkPreviewDemo";
import { NavbarDemo } from "@/components/NavbarDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
// import { TextGenerateEffectDemo } from "@/components/TextGenerateEffectDemo";
// import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
// import { ThreeDCardDemo1 } from "@/components/ThreeDCardDemo1";
// import { ThreeDCardDemo2 } from "@/components/ThreeDCardDemo2";
// import { TracingBeamDemo } from "@/components/TracingBeamDemo";
import Image from "next/image";

export default function Home() {
  return(
    
    <div className="w-full h-full p-0 m-0 overflow-hidden">
      <div id="top"></div>
      
      <NavbarDemo/>
      <GridBackgroundDemo />

      <section className="about" id="about">
      <div id="about"></div>
        <div className="about-content">
                <h2 className="heading">About Me</h2>
                <h3>Web Developer</h3>
            <p className="margin-right: 20rem;">I'm a dedicated frontend developer with expertise in React and Next.js, passionate about leveraging modern tech stacks to build responsive, high-performance web applications. My work focuses on creating seamless, user-centric experiences that drive innovation and engagement.</p>
            <a href="https://www.linkedin.com/in/anishsukhramani/" target="_blank" className="btn-invert">Read More</a>
        </div>
        <div className="about-img">
          <Image
              src="/Me.png"
              height={600}
              width={600}
              className="right-0 align-right"
              alt="thumbnail"
            />
        </div>
    </section>
    
    <div className="w-full bg-black">
    </div>

    {/* <div className="bg-gray-200">
      <CardHoverEffectDemo />

    </div> */}
    


      <div className="bg-black text-white">
        {/* <h1 className="p-10 pl-40 text-extrabold text-3xl leading-snug tracking-wide font-[Apple-heading">Why Me?</h1> */}
        <StickyScrollRevealDemo/>
      </div>

      {/* <div className="w-full h-auto p-0"><CanvasRevealEffectDemo/></div> */}

      <div className="bg-black p-5">
        <HeroParallaxDemo/>
      </div>












      <div className="lg:flex lg:flex-row bg-black">
        <div className="lg:w-[70%] h-auto">
          <GlobeDemo/>
        </div>
        <div className="lg:w-[50%] flex justify-center items-center">
          <div>

          <h1 className="text-white text-2xl md:text-6xl pb-6 font-bold text-justify lg:items-center lg:align-middle lg:text-right px-10">Let's Connect!</h1>

          <LinkPreviewDemo />

          </div>
        </div>
      </div>
      

      


      {/* <div className="w-full bg-black flex justify-center">
        <div className="w-[97.25%]  h-[25rem] overflow-hidden bg-black">
          <BackgroundGradientAnimationDemo/>
        </div>
      </div> */}

      

      
<div className="bg-[#0a0a0a]">

<footer className="bg-[#0a0a0a] rounded-lg shadow m-0 dark:bg-[#0a0a0a]">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#top" className="custom-hover me-4 md:me-6">Back to Top</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/anishsukhramani/" target="_blank" className="custom-hover me-4 md:me-6">Connect</a>
        </li>
        <li>
            <a href="#" className="custom-hover me-4 md:me-6">Blogs</a>
        </li>
        <li>
            <a className="custom-hover" href="mailto:anishsukhramani@gmail.com?subject=Hello&body=I%20am%20interested%20in%20your%20services.">Email</a>
        </li>
    </ul>
    </div>
</footer>
</div>


      {/* <div className="w-full bg-gray-100 h-auto flex flex-col sm:flex-col md:flex-row md:justify-center gap-2">
        <h1>My Journey so far</h1>
        <ThreeDCardDemo />
        <ThreeDCardDemo1 />
        <ThreeDCardDemo2 />
      </div> */}

      
    </div>
  );
}
