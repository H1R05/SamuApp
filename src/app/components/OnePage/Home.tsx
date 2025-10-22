import { Typewriter } from "react-simple-typewriter";
import React, { useLayoutEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { russoOne } from "../style/permanentMarker";
import gsap from "gsap";

export default function Home() {
  const titleRef = useRef(null);
  const typeRef = useRef(null);
  const subTitleRef = useRef(null);
  const iconsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1.5, ease: "power1.out" },
      });
      tl.from(titleRef.current, { x: -100, opacity: 0, scale: 0.9 });
      tl.from(typeRef.current, { y: -100, opacity: 0, scale: 0.9 }, "-=1");
      tl.from(subTitleRef.current, { y: -100, opacity: 0, scale: 0.9 }, "-=1");
      tl.from(iconsRef.current, { y: 50, opacity: 0, scale: 0.9 }, "-=0.8");
    }, iconsRef);
    return () => ctx.revert();
  });

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center w-full relative z-10"
      >
        <div className=" flex flex-col text-center  text-5xl max-w-[50%]">
          <h1
            ref={titleRef}
            className={`${russoOne.className} text-white drop-shadow-[0_0_8px_#00ffff] inline-block bg-clip-text font-semibold text-6xl mb-3`}
          >
            Ciao, mi chiamo Samu!
          </h1>
          <p
            ref={typeRef}
            className={`${russoOne.className} text-4xl my-5 bg-gradient-to-r from-red-500 to-yellow-400 inline-block text-transparent bg-clip-text font-semibold`}
          >
            <Typewriter
              words={[
                "Junior Cloud Devops",
                "Studente di informatica",
                "Full Stack Developer",
              ]}
              typeSpeed={80}
              loop={true}
              cursor
              cursorStyle={"|"}
              delaySpeed={1500}
              deleteSpeed={50}
            />
          </p>
          <h4
            ref={subTitleRef}
            className={`${russoOne.className} text-white/80 text-2xl mt-5 font-bold text-`}
          >
            Sono uno studente e sviluppatore junior, sempre curioso di scoprire
            e imparare cose nuove, benvenuti nel mio portfolio!
          </h4>
          <div ref={iconsRef} className="flex justify-center gap-6">
            <a href="https://github.com/H1R05/">
              <FaGithub className=" text-white mt-6 hover:scale-125 transition-transform hover:text-green-500 " />
            </a>
            <a href="https://www.linkedin.com/in/samuele-angelicchio-639927363/">
              <CiLinkedin className=" text-white mt-6 hover:scale-125 transition-transform hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/angelicchio_samuele/">
              <FaInstagram className=" text-white mt-6 hover:scale-125 transition-transform hover:text-pink-600" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
