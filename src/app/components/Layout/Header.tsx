"use client";
import gsap from "gsap";
import { useState, useEffect, useRef, useLayoutEffect } from "react";

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
        defaults: { duration: 0.8, ease: "power2.out" },
      });

      tl.from(cardRef.current, {
        y: -100,
        opacity: 0,
        scale: 0.5,
        duration: 1,
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
    <header className="mt-4 relative">
      <div className=" w-full z-50 flex items-center justify-center h-24 fixed">
        <div
          ref={cardRef}
          className=" w-11/12 max-w-2xl h-24
          bg-white/10 backdrop-blur-md shadow-3xl 
          rounded-full 
          flex items-center justify-between px-4"
        >
          <img
            ref={logoRef}
            src="../elements/logoSitoWeb.svg"
            alt="Logo"
            className="h-40 mt-7 ml-16 w-auto object-contain"
          />
          <nav
            className="fixed left-1/2 top-1/2 transform -translate-x-[50px] -translate-y-1/2 
            bg-gray-600/90 backdrop-blur-sm 
            rounded-full h-12 px-6 
            flex items-center space-x-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`text-sm font-medium transition-colors tracking-wider
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
          <div className="h-40 mt-7 mr-16 w-40"></div>
        </div>
      </div>
    </header>
  );
}
