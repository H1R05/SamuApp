import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  Img: string;
  title: string;
  description: string;
  github: string;
}

const ProjectCard = ({ Img, title, description, github }: ProjectCardProps) => (
  <div className=" px-8 py-6 rounded-lg shadow-lg transform duration-300">
    <Image
      src={Img}
      alt={title}
      width={400}
      height={250}
      className="rounded-md mb-4 object-cover"
    />
    <h2 className="text-4xl font-bold text-redCrayola">{title}</h2>
    <p className="mt-2 bg-gradient-to-r from-slate-500 to-slate-900 bg-clip-text text-transparent font-medium">
      {description}
    </p>
    <a href={github} className="text-indigo-600 hover:underline mt-4 block">
      Github Link
    </a>
  </div>
);

export default ProjectCard;
