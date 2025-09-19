import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "motion/react";
gsap.registerPlugin(ScrollTrigger);
import React, { useEffect } from "react";
import bgImage7 from "../assets/Images/bgImage7.png"
import bgImage1 from "../assets/Images/bgImage1.png"
// import photo from "../assets/Images/BhushanPhoto1.png"
import photo from "../assets/Images/photo2.png"

function Landing({ finish }) {

  const tl = gsap.timeline();
  const tl2 = gsap.timeline({ repeat: -1 });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".pare",
      start: "top 0%",
      end: "top -110%",
      scrub: 2,
      ease: "linear",
      pin: true,
    },
  });
  useGSAP(() => {
    tl3.to(".aboutpage", {
      y: "0%",
    });
    tl2
      .to(".underline", {
        x: "0%",
        duration: 1.5,
        ease: "expo.out",
      })
      .to(".underline", {
        x: "100%",
        duration: 1.5,
        ease: "expo.out",
      });
  });

  useEffect(() => {
    if (finish === true) {
      tl.to(
        ".firstlandingtext h1 span",
        {
          delay: 0.2,
          opacity: 1,
          y: "0%",
          duration: 2,
          stagger: 0.052,
          ease: "expo.out",
        },
        "a"
      )
        .to(
          ".secondlandingtext p span",
          {
            delay: 0.2,
            opacity: 1,
            y: "0%",
            duration: 2,
            stagger: 0.052,
            ease: "expo.out",
          },
          "a"
        )
        .to(
          ".thirdlandingtext p span",
          {
            delay: 0.2,
            opacity: 1,
            y: "0%",
            duration: 2,
            stagger: 0.052,
            ease: "expo.out",
          },
          "a"
        );
    }
  }, [finish]);
  
  const parentVarient = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const childVarient = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="pare h-fit w-full select-none">
      <div className="landingcontainer h-full relative w-full ">
        <div className="bgimage h-full w-full">
          <img
            className="h-full w-full object-cover"
            src={bgImage7}
            alt=""
          />
        </div>
        <div className="availability absolute left-[50%] translate-x-[-50%] top-[16%] md:top-[12%] lg:top-[13%] ">
          <div className="available gap-4 md:gap-6 bg-white rounded-full items-center px-4 md:px-6 py-3 flex">
            <div className="dot h-2 w-2 "></div>
            <h1 className="text-md md:text-lg font-[satoshiregular] select-none">
              Available for work
            </h1>
          </div>
        </div>
        <div className="abouttoscroll absolute left-[50%] bottom-[12%] lg:bottom-[7%] translate-x-[-50%] ">
          <div className="text overflow-hidden w-full text-white text-sm ">
            <h1 className="font-[satoshiregular]">
              Scroll down to uncover more
            </h1>
            <div className="underline translate-x-[-100%] h-[0.5vw] md:h-[0.2vw]"></div>
          </div>
        </div>
        <div className="overlaycontent px-6 md:px-12 flex  items-center  h-full w-full  absolute top-0 left-0">
          <div className="overlaycontainer w-full flex flex-col justify-center lg:flex-row md:gap-0 md:justify-between ">
            <div className="firstlandingtext lg:self-end justify-self-end text-white leading-[0.9] text-[13vw] md:text-[11vw] lg:text-[7.5vw] ">
              <h1 className="overflow-hidden mb-[-5.8vw] md:mb-[-2.6vw] lg:mb-[-2.2vw]  py-3 ">
                <span className="inline-block opacity-0 translate-y-[110%]">
                  Creativ<span className="bg-gradient-to-r from-yellow-500 to-white bg-clip-text text-transparent">e</span>
                </span>
              </h1>
              <h1 className=" py-5 flex items-end  overflow-hidden ">
                <span className="font-[helvetica] inline-block opacity-0 translate-y-[110%]">
                  Developer
                </span>
              </h1>
            </div>
            <div className="secondlandingtext py-2 md:py-4 lg:py-5 flex justify-end flex-col">
              <p className="text-white overflow-hidden justify-self-end text-pretty leading-[1.1] text-3xl md:text-5xl lg:text-4xl">
                <span className="inline-block opacity-1 translate-y-[110%] ">
                  Creating digital
                </span>
              </p>
              <p className="text-white  overflow-hidden justify-self-end text-pretty leading-[1.1] text-3xl md:text-5xl lg:text-4xl">
                <span className="inline-block opacity-1 translate-y-[110%] ">
                  identities that shine,
                </span>
              </p>
            </div>
            <div className="thirdlandingtext  py-2 md:py-1 lg:py-5 flex justify-end flex-col ">
              <p className="text-white overflow-hidden   justify-self-end text-pretty leading-[1.1] text-3xl md:text-5xl lg:text-4xl">
                <span className="inline-block opacity-1  font-[satoshiregular] translate-y-[110%]">
                  leaving a lasting
                </span>
              </p>
              <p className="text-white overflow-hidden  justify-self-end text-pretty leading-[1.1] text-3xl md:text-5xl lg:text-4xl">
                <span className="inline-block opacity-1 font-[satoshiregular]  translate-y-[110%]">
                  impression with every
                </span>
              </p>
              <p className="text-white overflow-hidden  justify-self-end text-pretty leading-[1.1] text-3xl md:text-5xl lg:text-4xl">
                <span className="inline-block opacity-1 font-[satoshiregular]  translate-y-[110%]">
                  pixel and line of code.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="aboutpage  translate-y-[100%] h-full w-full z-[10] absolute top-0 left-0 ">
          <div className="aboutpagecontainer h-full w-full relative">
            <div className="bgImage h-full w-full ">
              <img
                className="h-full w-full object-cover"
                src={bgImage1}
                alt=""
              />
            </div>
            <div className="aboutcontent flex flex-col-reverse md:flex-row justify-between h-full w-full absolute top-0 left-0  px-6 md:px-12 ">
              <div className="photosection py-0  md:py-12 flex  gap-2 h-[32%] lg:h-full  w-full md:w-[30%] ">
                <div className="photo h-full w-[100%] flex justify-start items-end md:items-start ">
                  <div className="imagediv overflow-hidden h-[65vw] w-[48vw] md:h-[55vw] md:w-[30vw]  lg:h-[35vw] lg:w-[25vw] ">
                    <motion.img
                      initial={{
                        opacity: 0,
                        y:20
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 3, ease: "easeOut" }}
                      className="h-full w-full rounded-md object-cover"
                      src={photo}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="aboutsection  flex flex-col jusitfy-end pt-8 lg:pt-16 gap-3 h-[68%] lg:h-full w-full md:w-[50%] text-white ">
                <h1 className="overflow-hidden  text-[15vw] md:text-[9vw] lg:text-[9vw] leading-[1]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileInView={{ y: "0", opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-block"
                  >
                    Ab<span className="bg-gradient-to-r from-yellow-500 to-white bg-clip-text text-transparent">o</span>ut
                  </motion.span>
                </h1>
                <div className="about mt-3 md:mt-0 overflow-hidden text-[4vw] md:text-[2.3vw] lg:text-[1.4vw] ">
                  <motion.p
                    initial={{ y: "15%", opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileInView={{ y: "0", opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-[helvetica] text-pretty leading-[1.25]"
                  >
                    Hello! I’m <span className="bg-gradient-to-br from-orange-500 via-green-300 to-pink-400 bg-clip-text text-transparent">Bhushan Gadekar</span>, a full-stack software developer based in India, with a background in computer applications (BCA & MCA). I’m passionate about both frontend and backend development—designing creative, intuitive interfaces and building robust systems that deliver performance and reliability. My mission is to craft digital experiences that feel effortless, engaging, and impactful. Every project I take on is a chance to blend logic with creativity, and I’d love to help bring ideas to life. Let’s code the future together!
                  </motion.p>
                  <div className="skills mt-4 lg:mt-8">
  <h1 className="text-3xl lg:text-4xl">
    Where{" "}
    <span className="bg-gradient-to-r from-yellow-500 to-white bg-clip-text text-transparent">
      I
    </span>{" "}
    Shine
  </h1>

  <div className="Skills w-full h-auto  mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 p-3 rounded-xl">
    {[
      "DSA",
      "MERN Stack",
      "UI UX",
      "C",
      "CPP",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "Creative Web Animations",
    ].map((skill, index) => (
      <div
        key={index}
        className="btn1 mt-2 flex w-fit items-center gap-2 rounded-full px-3 py-1 font-bold bg-white shadow-sm"
      >
        <div className="dot2 md:h-2 h-1 w-1 md:w-2 rounded-full bg-green-500"></div>
        <h2 className="font-[satoshiregular] font-bold text-sm md:text-md bg-gradient-to-r from-green-500 to-black bg-clip-text text-transparent">
          {skill}
        </h2>
      </div>
    ))}
  </div>
</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
