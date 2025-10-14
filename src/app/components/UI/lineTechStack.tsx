import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";

type TechStackItem = { name: string; Icon: React.ElementType };

const techStack: TechStackItem[] = [
  { name: "React", Icon: FaReact },
  { name: "Typescript", Icon: SiTypescript },
  { name: "Tailwind", Icon: RiTailwindCssFill },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Javascript", Icon: IoLogoJavascript },
  { name: "Html", Icon: FaHtml5 },
  { name: "Css", Icon: FaCss3Alt },
  { name: "Docker", Icon: FaDocker },
  { name: "Aws", Icon: FaAws },
  { name: "Postegress", Icon: BiLogoPostgresql },
  { name: "C#", Icon: TbBrandCSharp },
];

export default function TechStackTicker() {
  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {techStack.concat(techStack).map((item, idx) => (
          <div key={idx} className="flex flex-col items-center mx-4">
            <item.Icon className="h-12 w-12 hover:scale-110 transition" />
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>

      <div className="flex animate-marquee-reverse whitespace-nowrap mt-8">
        {techStack.concat(techStack).map((item, idx) => (
          <div key={idx} className="flex flex-col items-center mx-4">
            <item.Icon className="h-12 w-12 hover:scale-110 transition" />
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
