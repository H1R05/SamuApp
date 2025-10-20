import React from "react";

interface ProjectCardProps {
  Img: string;
  title: string;
  description: string;
  github: string;
}

const ProjectCard = ({ Img, title, description, github }: ProjectCardProps) => (
  <div
    className="relative w-80 flex flex-col 
    bg-[#0b132b]/80 border border-yellow-300/30 rounded-2xl overflow-hidden 
    shadow-[0_0_20px_rgba(255,215,0,0.15)]
    transition-all duration-300 hover:scale-[1.04] 
    hover:shadow-[0_0_25px_rgba(255,215,0,0.35)]"
  >
    <div
      className="absolute inset-0 pointer-events-none rounded-2xl 
      bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 
      opacity-0 group-hover:opacity-80 
      transition-opacity duration-500 ease-out z-0"
    ></div>

    <div className="relative z-10 p-5 flex flex-col h-full">
      <img
        src={Img}
        alt={title}
        className="rounded-xl mb-4 w-full h-44 object-cover shadow-md 
        transition-transform duration-300 hover:scale-105"
      />

      <h2 className="text-white text-2xl font-semibold drop-shadow-[0_0_6px_#00ffff] mb-2">
        {title}
      </h2>

      <p className="mt-2 text-yellow-200/90 text-base font-medium line-clamp-3 flex-grow">
        {description}
      </p>

      <a
        href={github}
        target="_blank"
        className="mt-5 inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 
        text-blue-900 font-bold py-2 px-4 rounded-md text-center 
        shadow-[0_0_15px_rgba(255,215,0,0.4)]
        hover:shadow-[0_0_25px_rgba(255,215,0,0.7)] 
        hover:scale-105 transition-all duration-300"
      >
        Visualizza su GitHub →
      </a>
    </div>
  </div>
);

export default ProjectCard;
