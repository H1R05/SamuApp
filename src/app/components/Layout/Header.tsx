"use client";
import gsap from "gsap";
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
    <header>
      <div className="fixed shadow-xl w-full z-50 bg-night flex flex-row items-center justify-between h-24">
        {/* Logo (Posizionato a sinistra) */}
        <img
          src="../elements/logoSitoWeb.svg"
          alt="Logo"
          className="h-40 mt-7 ml-16 w-auto object-contain"
        />

        {/* 💡 PILLOLA GRANDE CENTRALE: Navigazione */}
        <nav
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      bg-gray-800/80 backdrop-blur-sm 
                      rounded-full h-12 px-8 
                      flex items-center space-x-6 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)} // Aggiunto onClick per evidenziazione
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

        {/* Placeholder a destra per mantenere lo spazio con justify-between (opzionale) */}
        <div className="h-40 mt-7 mr-16 w-40"></div>
      </div>
    </header>
  );
}
