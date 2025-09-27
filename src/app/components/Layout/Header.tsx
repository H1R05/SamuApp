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
    <div className="fixed z-10 h-20 flex top-0 left-0 w-full bg-night items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex py-1 flex-col md:flex-row md:items-center md:justify-between">
          {/* Titolo e sottotitolo */}
          <div className="">
            <a href="">
              <img
                src="/character/logoSitoWeb.svg"
                alt=""
                className="h-40 mt-7 w-auto object-contain "
              />
            </a>
          </div>

          {/* Link di navigazione */}
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`} // ogni link punta alla sezione giusta
                className={`font-medium transition-colors ${
                  active === link.id
                    ? "text-redCrayola" //acceso
                    : "text-silver hover:text-redCrayola" // spento
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
