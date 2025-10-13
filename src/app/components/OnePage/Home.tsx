import { Typewriter } from "react-simple-typewriter";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center w-full relative z-10 bg-transparent"
      >
        <div className="flex-1 ml-10 text-left text-5xl">
          <h1 className="text-6xl font-bold mb-3 text-white">
            Ciao, mi chiamo Samu!
          </h1>
          <p className="mb-10 text-redCrayola font-semibold">
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
          <h4 className="text-xl font-bold text-white">
            Sono uno studente e sviluppatore junior, sempre curioso di scoprire
            e imparare cose nuove!
          </h4>
        </div>
        <div className="flex-1 ml-20 text-center">
          <DotLottieReact src="/elements/animateLogo.json" loop autoplay />
        </div>
      </section>
    </>
  );
}
