"use client";

import { GoProjectRoadmap } from "react-icons/go";
import { BiSolidCertification } from "react-icons/bi";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import CounterCard from "../UI/CounterCard";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const counters = [
  { number: 2, label: "Progetti", Icon: GoProjectRoadmap },
  { number: 2, label: "Certificati", Icon: BiSolidCertification },
  { number: 1, label: "Anni Esperienza", Icon: FaPersonArrowUpFromLine },
];

const cv = "/cvDocument/CVSamu.pdf";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".about-title", { y: 50, opacity: 0, duration: 0.8 });

      tl.from(".about-text", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4");

      tl.from(".about-button", {
        y: 50,
        opacity: 0,
        duration: 1,
      });

      const cards = gsap.utils.toArray<HTMLElement>(".about-card");
      if (cards.length) {
        tl.from(
          cards,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className="about-content relative min-h-screen flex flex-col justify-center px-8 py-1 bg-transparent/30"
      >
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="about-title text-5xl font-bold mb-6 text-redCrayola/80">
            About Me
          </h1>
          <p className="about-text text-white/80 leading-relaxed mb-8 text-2xl font-semibold">
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
          <a href={cv} className="about-button" download="CVSamu.pdf">
            <button className="relative py-2 px-8 text-black text-base font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-purple-500 before:to-purple-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
              Download CV
            </button>
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 w-full">
            {counters.map((c, idx) => (
              <div key={idx} className="about-card">
                <CounterCard number={c.number} label={c.label} Icon={c.Icon} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
