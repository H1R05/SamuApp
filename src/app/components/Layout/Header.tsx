"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type NavLink = { name: string; id: string };

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Contact", id: "contact" },
];

export default function Header() {
  const [active, setActive] = useState<String>("home");
  const [isSidebar, setIsSidebar] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsSidebar(active !== "home");
  });

  useEffect(() => {
    window.scrollTo(0, 0); // scrolla senza animazione all’inizio
    setIsMounted(true);
  }, []);

  //Posiziona lo scroll in cima ogni ricaricamento
  useEffect(() => {
    window.scrollTo(0, 0);
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

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      initial={
        isSidebar
          ? { left: 20, top: 80, width: 70, borderRadius: 32 }
          : {
              left: "50%",
              top: 24,
              width: "60vw",
              borderRadius: 28,
              x: "-50%",
            }
      }
      animate={
        isSidebar
          ? { left: 50, top: 80, width: 70, borderRadius: 32 }
          : {
              left: "50%",
              top: 24,
              width: "60vw",
              borderRadius: 28,
              x: "-50%",
            }
      }
      className={`fixed shadow-xl z-50 bg-night transition-all duration-500
      ${
        isSidebar
          ? "flex flex-col items-center h-[250px] border-silver border-2 justify-center"
          : "flex flex-row items-center justify-around h-24"
      }
    `}
    >
      {!isSidebar && (
        <img
          src="../elements/logoSitoWeb.svg"
          alt="Logo"
          className="h-40 mt-7 w-auto object-contain"
        />
      )}

      {/* Link di navigazione */}
      <nav
        className={
          isSidebar
            ? "flex flex-col gap-8 text-center text-sm"
            : "flex flex-row gap-8"
        }
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`font-medium transition-colors ${
              active === link.id
                ? "text-redCrayola"
                : "text-silver hover:text-redCrayola"
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </motion.div>
  );
}
