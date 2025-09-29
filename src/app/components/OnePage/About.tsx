import { GoProjectRoadmap } from "react-icons/go";
import { BiSolidCertification } from "react-icons/bi";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center bg-slate-100 px-8 py-16"
      >
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <p className="text-gray-600 leading-relaxed mb-8 text-xl">
            Fin da piccolo sono sempre stato affascinato dalla tecnologia e
            dall'informatica. All’inizio ho fatto qualche passo falso, e dopo
            anni di lavori diversi ho deciso finalmente di seguire la mia
            passione e studiare informatica. Ora, a 23 anni, sono qui pronto a
            inseguire i miei sogni, con l’unico obiettivo di crescere e
            migliorare ogni giorno.
          </p>
          <a
            href=""
            className="inline-block bg-verdigris text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-redCrayola hover:text-night transition"
          >
            Download CV
          </a>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h2 className="text-4xl font-bold text-verdigris">1</h2>
              <p className="mt-2 text-gray-500 font-medium">Progetti</p>
              <GoProjectRoadmap className="text-5xl mx-auto" />
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h2 className="text-4xl font-bold text-verdigris">2</h2>
              <p className="mt-2 text-gray-500 font-medium">Certificati</p>
              <BiSolidCertification className="text-5xl mx-auto" />
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h2 className="text-4xl font-bold text-verdigris">1</h2>
              <p className="mt-2 text-gray-500 font-medium">Anni Esperienza</p>
              <FaPersonArrowUpFromLine className="text-5xl mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
