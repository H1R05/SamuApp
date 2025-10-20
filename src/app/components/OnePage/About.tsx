import { GoProjectRoadmap } from "react-icons/go";
import { BiSolidCertification } from "react-icons/bi";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import CounterCard from "../UI/CounterCard";
import { russoOne } from "../style/permanentMarker";
import gsap, { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

const counters = [
  { number: 2, label: "Progetti", Icon: GoProjectRoadmap },
  { number: 2, label: "Certificati", Icon: BiSolidCertification },
  { number: 1, label: "Anni Esperienza", Icon: FaPersonArrowUpFromLine },
];

const cv = "/cvDocument/CVSamu.pdf";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
      tl.from(titleRef.current, { y: 50, autoAlpha: 0, duration: 0.6 });
      tl.from(
        paragraphRef.current,
        { x: 50, autoAlpha: 0, duration: 0.6 },
        "-=0.5"
      );
      tl.from(
        buttonRef.current,
        { y: 50, autoAlpha: 0, duration: 0.6 },
        "-=0.4"
      );
      tl.from(cardRef.current, {
        y: 50,
        autoAlpha: 0,
        stagger: 0.25,
        duration: 0.6,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="about"
        className="relative min-h-screen flex flex-col justify-center px-8 py-1 bg-transparent/30"
      >
        <div className="container mx-auto text-center max-w-3xl">
          <h1
            ref={titleRef}
            className={`${russoOne.className} text-white drop-shadow-[0_0_8px_#00ffff] text-5xl font-bold mb-10`}
          >
            About Me
          </h1>
          <p
            ref={paragraphRef}
            className={`${russoOne.className} p text-white/80 leading-relaxed mb-8 text-2xl font-semibold`}
          >
            Da sempre sono affascinato dal mondo della tecnologia e
            dell'informatica, ma anche dal design e dall’importanza di un
            aspetto curato e piacevole. Questa passione mi ha portato a
            scegliere un percorso di studi che mi permette di unire competenze
            tecniche e creatività. Mi piace affrontare nuove sfide, trovare
            soluzioni originali e realizzare progetti che funzionano bene ma
            sono anche belli da vedere. Sono curioso, voglio imparare sempre di
            più e godermi il viaggio nel mondo della tecnologia, mettendo il
            cuore in tutto quello che faccio.
          </p>
          <a href={cv} download="CVSamu.pdf">
            <button className="button relative py-2 px-8 text-black text-base font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-orange before:to-orange/80 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
              Download CV
            </button>
          </a>
          <div
            ref={cardRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
          >
            {counters.map((counters, idx) => (
              <CounterCard
                key={idx}
                number={counters.number}
                label={counters.label}
                Icon={counters.Icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
