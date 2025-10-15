import { Typewriter } from "react-simple-typewriter";
import React, { useRef, useLayoutEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import gsap from "gsap";

export default function Home() {
  const title = useRef(null);
  const subTitle = useRef(null);
  const typeWrite = useRef(null);
  const icon = useRef(null);
  const dottieImg = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "expo.out" },
      });

      tl.from(title.current, {
        z: -100,
        opacity: 0,
        scale: 0.4,
        duration: 1,
      });

      tl.from(subTitle.current, {
        y: -100,
        opacity: 0,
        scale: 0.4,
        duration: 1,
      });
      tl.from(typeWrite.current, {
        x: -100,
        opacity: 0,
        scale: 0.4,
        duration: 1,
      });
      tl.from(icon.current, {
        y: -100,
        opacity: 0,
        scale: 0.4,
        duration: 1,
      });

      tl.from(dottieImg.current, {
        z: -80,
        opacity: 0,
        scale: 0.6,
        duration: 1,
      });
    });
  }, []);

  return (
    <>
      <section
        id="home"
        className="min-h-[85vh] flex items-center justify-center w-full relative z-10 bg-transparent"
      >
        <div className="flex-1 ml-10 text-left text-5xl">
          <h1 ref={title} className="text-6xl font-bold mb-3 text-white">
            Ciao, mi chiamo Samu!
          </h1>
          <p ref={typeWrite} className="mb-10 text-redCrayola font-semibold">
            <Typewriter
              words={[
                "Junior Cloud Devops",
                "Studente d'Informatica",
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
          <h4 ref={subTitle} className="text-xl font-bold text-white">
            Sono uno studente e sviluppatore junior, sempre curioso di scoprire
            e imparare cose nuove!
          </h4>
          <div ref={icon} className="flex gap-6">
            <a href="https://github.com/H1R05/">
              <FaGithub className="text-white mt-6 hover:scale-125 transition " />
            </a>
            <a href="https://www.linkedin.com/in/samuele-angelicchio-639927363/">
              <CiLinkedin className="text-white mt-6 hover:scale-125 transition " />
            </a>
            <a href="https://www.instagram.com/angelicchio_samuele/">
              <FaInstagram className="text-white mt-6 hover:scale-125 transition" />
            </a>
          </div>
        </div>
        <div ref={dottieImg} className="flex-1 ml-20 text-center">
          <DotLottieReact src="/elements/animateLogo.json" loop autoplay />
        </div>
      </section>
    </>
  );
}
