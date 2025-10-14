import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  Img: string;
  title: string;
  description: string;
  github: string;
}
const cardClasses =
  "bg-gray-800 rounded-lg p-6 h-full transition-all duration-300 relative border border-gray-700 hover:border-lime-500 hover:shadow-xl hover:shadow-lime-500/20";

const ProjectCard = ({ Img, title, description, github }: ProjectCardProps) => (
  <div
    className="relative w-80 flex flex-col bg-white
  border border-gray-200 rounded-xl overflow-hidden shadow-lg
  group transition-all duration-300 
  hover:border-redCrayola hover:shadow-xl hover:shadow-redCrayola/40 hover:scale-[1.02]"
  >
    {/* 2. Pseudo-elemento per il "glow" animato sul bordo */}
    {/* Il gradiente è qui più discreto (meno opacità) per la modalità chiara. */}
    <div
      className="absolute inset-0 rounded-xl pointer-events-none 
    bg-gradient-to-r from-redCrayola/70 via-transparent to-redCrayola/70
    opacity-0 group-hover:opacity-70 
    scale-0 group-hover:scale-105 
    group-hover:animate-spin-slow 
    transition-all duration-500 ease-out z-0"
    ></div>

    {/* 3. Contenuto della card */}
    <div className="relative z-10 p-5 flex flex-col h-full">
      {/* Immagine */}
      {/* L'ombra sull'immagine aggiunge profondità. */}
      <img
        src={Img}
        alt={title}
        className="rounded-lg mb-4 w-full h-48 object-cover shadow-md 
   transition-transform duration-300 group-hover:scale-105"
      />

      {/* Titolo */}
      {/* Il colore del testo deve essere scuro per contrasto su sfondo chiaro. */}
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>

      {/* Descrizione */}
      {/* Il testo della descrizione è in grigio scuro per leggibilità. */}
      {/* Ho rimosso il gradiente dal testo che si vedeva male su sfondo chiaro. */}
      <p className="mt-2 text-gray-600 font-medium line-clamp-3 flex-grow">
        {description}
      </p>

      {/* Link GitHub (pulsante stilizzato) */}
      {/* mt-auto spinge il link in basso per un layout coerente. */}
      <a
        href={github}
        className="mt-4 inline-block bg-redCrayola py-2 px-4 rounded-md 
   text-white font-semibold text-center transition-all duration-200 
   hover:bg-red-800 hover:shadow-lg hover:shadow-redCrayola/40"
      >
        Visualizza su GitHub →
      </a>
    </div>
  </div>
);

export default ProjectCard;
