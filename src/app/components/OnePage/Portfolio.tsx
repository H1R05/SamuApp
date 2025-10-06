import ProjectCard from "../UI/ProjectCard";
import { useState } from "react";
import TechStackTicker from "../UI/lineTechStack";
import CertificateCard from "../UI/CertificateCard";

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
    description: "portfolio personale",
    github: "https://github.com/H1R05/SamuApp",
  },
];
const certificates = [
  {
    src: "/certificate/CertificatoWebDeveloper.pdf",
    name: "Certificato Web Developer",
    file: "/certificate/CertificatoWebDeveloper.pdf",
  },
  {
    src: "/certificate/AWSCertifiedCloudPractitioner.pdf",
    name: "Certificato AWS Cloud Practitioner",
    file: "/certificate/AWSCertifiedCloudPractitioner.pdf",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<
    "projects" | "certificates" | "stack"
  >("projects");

  return (
    <>
      <section id="portfolio" className="min-h-screen bg-white px-8 py-16">
        <div className="container text-center justify-center mx-auto max-w-5xl mt-10">
          <h2 className="text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-lg mb-8 text-gray-600">
            Dai un’occhiata ai miei progetti, certificati e competenze tecniche.
          </p>
          {/* Barra tab */}
          <div className="flex space-x-4 mb-10 justify-center">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeTab === "projects"
                  ? "bg-verdigris text-white"
                  : "bg-gray-200"
              }`}
            >
              Progetti
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeTab === "certificates"
                  ? "bg-verdigris text-white"
                  : "bg-gray-200"
              }`}
            >
              Certificati
            </button>
            <button
              onClick={() => setActiveTab("stack")}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeTab === "stack"
                  ? "bg-verdigris text-white"
                  : "bg-gray-200"
              }`}
            >
              Stack Tecnologico
            </button>
          </div>

          {/* Contenuto tab */}
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
              <div className="relative overflow-hidden py-8">
                <TechStackTicker></TechStackTicker>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
