import { Typewriter } from "react-simple-typewriter";
import AnimatedWave from "../../assets/WaveBackground";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-white"
      >
        <div className="absolute w-full bottom-0">
          <AnimatedWave></AnimatedWave>
        </div>
        <div className="flex-1 ml-10 text-left text-5xl">
          <h1 className="text-6xl font-bold mb-3">Ciao, mi chiamo Samu!</h1>
          <p className="mb-10 text-redCrayola font-semibold">
            <Typewriter
              words={[
                "Web Developer",
                "Cloud Developer",
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
          <h4 className="text-xl font-bold">
            Sono uno sviluppatore junior che sta studiando e lavorando per
            raggiungere i propri sogni
          </h4>
        </div>
        <div className="flex-1 ml-10 text-center font-extrabold">
          <p className="font-bold">Work in progress...</p>
        </div>
      </section>
    </>
  );
}
