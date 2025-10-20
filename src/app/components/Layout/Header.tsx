"use client";
import gsap from "gsap";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { russoOne } from "../style/permanentMarker";

type NavLink = { name: string; id: string };

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Contact", id: "contact" },
];

export default function Header() {
  const [active, setActive] = useState<string>("home");
  const cardRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" },
      });
      tl.from(cardRef.current, { y: -50, opacity: 0, scale: 0.95 });
      tl.from(logoRef.current, { x: -50, opacity: 0, scale: 1 }, "-=0.5");
    }, cardRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center">
      <div
        ref={cardRef}
        className="w-[85%] max-w-3xl h-20
        bg-gradient-to-r from-[#ffffff15] to-[#ffffff0f]
        backdrop-blur-lg shadow-[0_0_20px_rgba(255,255,100,0.2)]
        rounded-full flex items-center justify-around px-6 border border-white/20"
      >
        {/* LOGO */}
        <div ref={logoRef} className="flex items-center mt-7">
          <img
            src="../elements/logoSitoWeb.svg"
            alt="Logo"
            className="h-36 w-auto object-contain"
          />
        </div>

        {/* NAVBAR */}
        <nav className="flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`${
                russoOne.className
              } text-lg tracking-wide uppercase transition-all duration-300
                ${
                  active === link.id
                    ? "text-yellowLight drop-shadow-[0_0_5px_#ff2e63]"
                    : "text-silver hover:text-yellowLight hover:drop-shadow-[0_0_5px_#ff2e63]"
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
