import { GoProjectRoadmap } from "react-icons/go";
import { BiSolidCertification } from "react-icons/bi";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import CounterCard from "../UI/CounterCard";

const counters = [
  { number: 1, label: "Progetti", Icon: GoProjectRoadmap },
  { number: 2, label: "Certificati", Icon: BiSolidCertification },
  { number: 1, label: "Anni Esperienza", Icon: FaPersonArrowUpFromLine },
];

const cv = "/cvDocument/CVSamu.pdf";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="relative min-h-screen flex flex-col justify-center px-8 py-1 bg-transparent"
      >
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 text-redCrayola/80">
            About Me
          </h1>
          <p className="text-white/80 leading-relaxed mb-8 text-2xl font-semibold">
            Da sempre sono affascinato dal mondo della tecnologia e
            dell'informatica, ma anche dal design e dall’importanza di un
            aspetto curato e piacevole. Questa passione mi ha portato a
            scegliere un percorso di studi che mi permette di unire competenze
            tecniche e creatività. Mi piace affrontare nuove sfide, trovare
            soluzioni originali e realizzare progetti che funzionano bene ma
            sono anche belli da vedere. Sono curioso, voglio imparare sempre di
            più e godermi il viaggio nel mondo della tecnologia, mettendo il
            cuore in tutto quello che faccio.
          </p>
          <a href={cv} download="CVSamu.pdf">
            <button className="relative py-2 px-8 text-black text-base font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-purple-500 before:to-purple-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
              Download CV
            </button>
          </a>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            {counters.map((counters, idx) => (
              <CounterCard
                key={idx}
                number={counters.number}
                label={counters.label}
                Icon={counters.Icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
