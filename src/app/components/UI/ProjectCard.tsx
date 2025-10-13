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
  <div className={cardClasses}>
    <Image
      src={Img}
      alt={title}
      width={350}
      height={300}
      className="rounded-md mb-4 object-cover block"
    />
    <h2 className="text-2xl font-bold text-redCrayola">{title}</h2>
    <p className="mt-2 bg-gradient-to-r from-slate-500 to-slate-900 bg-clip-text text-transparent font-medium">
      {description}
    </p>
    <a href={github} className="text-black hover:underline mt-4 block">
      Github Link
    </a>
  </div>
);

export default ProjectCard;
