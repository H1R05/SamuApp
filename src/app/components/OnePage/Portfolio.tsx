import ProjectCard from "../UI/ProjectCard";
import { useState } from "react";
import TechStackTicker from "../UI/lineTechStack";
import CertificateCard from "../UI/CertificateCard";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { russoOne } from "../style/permanentMarker";

const projects = [
  {
    Img: "/project/galleriaSteganografia.png",
    title: "Galleria Immagini Steganografia",
    description:
      "Una semplice galleria immagini con l'implementazione della steganografia ",
    github: "https://github.com/H1R05/GalleriaIMG-Steganografia",
  },
  {
    Img: "/project/sitoPortfolio.png",
    title: "Modern Web Portfolio",
    description: "Portfolio personale moderno che mi rappresenta",
    github: "https://github.com/H1R05/SamuApp",
  },
];
const certificates = [
  {
    preview: "/certificate/CertificatoWebDeveloperPreview.png",
    name: "Certificato Web Developer",
    file: "/certificate/CertificatoWebDeveloper.pdf",
  },
  {
    preview: "/certificate/AWSCertifiedCloudPractitionerPreview.png",
    name: "Certificato AWS Cloud Practitioner",
    file: "/certificate/AWSCertifiedCloudPractitioner.pdf",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });

  const [activeTab, setActiveTab] = useState<
    "projects" | "certificates" | "stack"
  >("projects");

  return (
    <>
      <section
        id="portfolio"
        className="min-h-screen px-8 py-16 bg-transparent w-full relative z-10"
      >
        <div className="container text-center justify-center mx-auto max-w-5xl mt-10">
          <h2
            className={`${russoOne.className} text-white drop-shadow-[0_0_8px_#00ffff] text-5xl font-bold mb-4`}
          >
            Portfolio
          </h2>
          <p
            className={`${russoOne.className} text-xl mb-8 text-white/80 font-semibold`}
          >
            Dai un’occhiata ai miei progetti, certificati e competenze tecniche.
          </p>
          <div className="flex justify-center border-b border-gray-500 mb-10">
            <button
              onClick={() => setActiveTab("projects")}
              className={`
            px-6 py-3 text-lg font-semibold transition-all duration-300 ease-in-out
            ${
              activeTab === "projects"
                ? "text-orange border-b-2 border-orange"
                : "text-gray-400 hover:text-orange/50 border-b-2 border-transparent hover:border-orange/50"
            }
        `}
            >
              Progetti
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`
            px-6 py-3 text-lg font-semibold transition-all duration-300 ease-in-out
            ${
              activeTab === "certificates"
                ? "text-orange border-b-2 border-orange"
                : "text-gray-400 hover:text-orange/50 border-b-2 border-transparent hover:border-orange/50"
            }
        `}
            >
              Certificati
            </button>
            <button
              onClick={() => setActiveTab("stack")}
              className={`
            px-6 py-3 text-lg font-semibold transition-all duration-300 ease-in-out
            ${
              activeTab === "stack"
                ? "text-orange border-b-2 border-orange"
                : "text-gray-400 hover:text-orange/50 border-b-2 border-transparent hover:border-orange/50"
            }
        `}
            >
              Stack Tecnologico
            </button>
          </div>

          <div>
            {activeTab === "projects" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                  <ProjectCard
                    key={idx}
                    Img={project.Img}
                    title={project.title}
                    description={project.description}
                    github={project.github}
                  />
                ))}
              </div>
            )}

            {activeTab === "certificates" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates.map((cert, idx) => (
                  <CertificateCard key={idx} {...cert} />
                ))}
              </div>
            )}

            {activeTab === "stack" && (
              <div className="relative overflow-hidden py-8 text-white">
                <TechStackTicker></TechStackTicker>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
