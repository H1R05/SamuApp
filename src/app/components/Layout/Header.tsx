"use client";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";

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

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsSidebar(active !== "home");
  }, [active]);

  useEffect(() => {
    if (!headerRef.current || !isMounted) return;

    const header = headerRef.current;

    if (isSidebar) {
      // Animazione → Sidebar
      gsap.to(header, {
        left: 25,
        top: "50%",
        y: "-50%", // centra verticalmente
        x: 0, // rimuove il centramento orizzontale
        width: 70,
        height: 250,
        borderRadius: 32,
        duration: 0.5,
        ease: "power1.out",
      });
    } else {
      // Animazione → Navbar
      gsap.to(header, {
        left: "50%",
        top: 24,
        x: "-50%", // centra orizzontalmente
        y: 0, // rimuove il centramento verticale
        width: "60vw",
        height: 96,
        borderRadius: 28,
        duration: 0.5,
        ease: "power1.out",
      });
    }
    return () => {};
  }, [isSidebar, isMounted]);

  //Posiziona lo scroll in cima ogni ricaricamento
  useEffect(() => {
    window.scrollTo(0, 0); // scrolla senza animazione all’inizio
    setIsMounted(true);
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
    <div
      ref={headerRef}
      className={`fixed shadow-xl z-50 bg-night
      ${
        isSidebar
          ? "flex flex-col items-center h-[250px] border-silver border-2 justify-center"
          : "flex flex-row items-center justify-around h-24"
      }
    `}
      style={{
        left: "50%",
        top: 24,
        width: "60vw",
        height: 96,
        borderRadius: 28,
        transform: "translateX(-50%)",
      }}
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
    </div>
  );
}
