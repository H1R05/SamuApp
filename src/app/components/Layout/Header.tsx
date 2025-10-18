"use client";
import gsap from "gsap";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { spaceGrotesk } from "../style/permanentMarker";

type NavLink = { name: string; id: string };

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Contact", id: "contact" },
];

export default function Header() {
  const [active, setActive] = useState<String>("home");
  const cardRef = useRef(null);
  const logoRef = useRef(null);
  //animazioni gsap
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" },
      });

      tl.from(cardRef.current, {
        y: -100,
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
      });

      tl.from(logoRef.current, {
        x: -100,
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  //Tutto gestito dal browser tramite chiamata api
  useEffect(() => {
    const section = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    if (section.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id); //qui aggiorno la sezione attiva
          }
        });
      },
      { threshold: 0.6 } //almeno il 60% visualizzabile
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section); // ogni sezione viene osservata
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="mt-4 fixed top-0 left-0 w-full z-50 flex justify-center">
      <div
        ref={cardRef}
        className=" w-[90%] max-w-2xl h-20
          bg-white/10 backdrop-blur-md shadow-2xl 
          rounded-full 
          flex items-center justify-between px-8 border border-white/20"
      >
        <div className="flex items-center space-x-2">
          <img
            ref={logoRef}
            src="../elements/logoSitoWeb.svg"
            alt="Logo"
            className="h-32 ml-7 mt-7 w-auto object-contain"
          />
        </div>
        <nav className="flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`${
                spaceGrotesk.className
              } text-lg uppercase tracking-widest transition-all duration-300
              ${
                active === link.id
                  ? "text-redCrayola"
                  : "text-silver hover:text-redCrayola"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
