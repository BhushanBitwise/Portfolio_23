
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import mivi3 from "../assets/Images/mivi3.png";
import nn from "../assets/Images/nn.jpg";
import frontend from "../assets/Images/frontend.mp4";
import { motion } from "motion/react";


function Work() {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    );
  }, []);

  return (
   

    <div className="works relative overflow-hidden px-3 py-4 w-full min-h-screen bg-gradient-to-l from-zinc-900 via-black to-zinc-900">
  <h1
    ref={headingRef}
    className="text-white text-[17vw] lg:text-[10vw] leading-none text-center"
  >
    W<span className="bg-gradient-to-r from-yellow-500 to-white bg-clip-text text-transparent">o</span>rk
  </h1>

  <div className="w-full mt-10 h-[80%] relative flex flex-col lg:flex-row items-center justify-center gap-6">
    {/* Top Div */}
    <div className="topDiv relative w-full lg:w-[45%] h-[40vh] lg:h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl lg:text-5xl text-white text-center mb-4">
        <span className="">
          Creative Frontends
        </span>
      </h1>

      <div className="flex items-center gap-5">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
        className="text-white flex flex-col p-2">
          <a
            className="font-[helvetica] hover:text-blue-400 hover:underline text-lg lg:text-2xl mt-2 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent"
            href="https://exo-ape-clone-alpha.vercel.app/"
          >
            ExoApe-Clone
          </a>

           <a
            className="font-[helvetica] hover:text-blue-400 hover:underline text-lg lg:text-2xl mt-2 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent"
            href="https://b15-final-main.vercel.app/"
          >
            Infos | Connects the brands
          </a>

           <a
            className="font-[helvetica] hover:text-blue-400 hover:underline text-lg lg:text-2xl mt-2 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent"
            href="https://vine-shop-main-project.vercel.app/"
          >
            Lagunitas Home page
          </a> 

          <a
            className="font-[helvetica] hover:text-blue-400 hover:underline text-lg lg:text-2xl mt-2 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent"
            href="https://atomic-health-main-project.vercel.app/"
          >
            Atomic Health
          </a>

          <a
            className="font-[helvetica] hover:text-blue-400 hover:underline text-lg lg:text-2xl mt-2 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent "
            href="https://bhushanbitwise.github.io/bhushan.agency/"
          >
            Obys-Agency-Clone
          </a>

          <a
            className="font-[helvetica] hover:text-blue-400 hover:underline text-lg lg:text-2xl mt-2 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent"
            href="https://project-plant-omega.vercel.app/"
          >
            SheryJs-Animation
          </a>

        </motion.div>
        <div className="w-[25vw] h-[25vh] lg:w-[17vw] lg:h-[50vh] rounded-md">
          {/* <img className="w-full h-full object-cover rounded-md"
            src={mivi3}
            alt=""
          /> */}
          <video className="w-full h-full object-cover rounded-md" autoPlay muted loop src={frontend}></video>
        </div>
      </div>
    </div>

    {/* Bottom Div */}
    <div className="bottomDiv relative w-full lg:w-[45%] h-[40vh] lg:h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl lg:text-5xl text-white text-center mb-4">
        <span className="">
          Full Stack Project
        </span>
      </h1>

      <div className="flex items-center gap-5">
        <div 
       className="w-[25vw] h-[25vh] lg:w-[17vw] lg:h-[50vh] rounded-md">
          <img className="w-full h-full object-cover rounded-md"
            src={nn}
            alt=""
          />
          {/* <video className="w-full h-full object-cover rounded-md" autoPlay muted loop src={backend}></video> */}
        </div>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
        className="text-white flex flex-col p-2">
          <a
            className="font-[helvetica] hover:text-blue-400 hover:underline text-lg lg:text-2xl mt-2 bg-gradient-to-r from-green-500 to-white bg-clip-text text-transparent"
            href="https://github.com/BhushanBitwise/CodeXpert-AI-Project"
          >
            CodeXpert-AI-Project
          </a>
          <a
            className="font-[helvetica] hover:text-blue-400 hover:underline text-lg lg:text-2xl mt-2 bg-gradient-to-r from-green-500 to-white bg-clip-text text-transparent"
            href="https://github.com/BhushanBitwise/Code-Manager-Next.js"
          >
            Code-Manager-Next.js
          </a>
          <a
            className="font-[helvetica] hover:text-blue-400 hover:underline  text-lg lg:text-2xl mt-2 bg-gradient-to-r from-green-500 to-white bg-clip-text text-transparent"
            href="https://github.com/BhushanBitwise/Omegal-Clone-"
          >
            Omegal-Clone
          </a>
        </motion.div>
      </div>
    </div>
  </div>
</div>



  );
}

export default Work;
