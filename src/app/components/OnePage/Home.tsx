import { Typewriter } from "react-simple-typewriter";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { honk } from "../style/permanentMarker";
import { pressStart2p } from "../style/permanentMarker";
import { spaceGrotesk } from "../style/permanentMarker";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center w-full relative z-10"
      >
        <div className="text-center text-5xl max-w-[50%]">
          <h1 className={`${honk.className} text-white text-7xl font- mb-3`}>
            Ciao, mi chiamo Samu!
          </h1>
          <p
            className={`${pressStart2p.className} text-3xl mb-5 bg-gradient-to-r from-fuchsia-500 via-yellow-200 to-yellow-300 inline-block text-transparent bg-clip-text font-semibold`}
          >
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
          <h4
            className={`${spaceGrotesk.className} text-white text-2xl mt-5 font-bold text-`}
          >
            Sono uno studente e sviluppatore junior, sempre curioso di scoprire
            e imparare cose nuove, benvenuti nel mio portfolio!
          </h4>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/H1R05/">
              <FaGithub className="text-white mt-6 hover:scale-125 transition-transform hover:text-green-500 " />
            </a>
            <a href="https://www.linkedin.com/in/samuele-angelicchio-639927363/">
              <CiLinkedin className="text-white mt-6 hover:scale-125 transition-transform hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/angelicchio_samuele/">
              <FaInstagram className="text-white mt-6 hover:scale-125 transition-transform hover:text-orange-400" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
