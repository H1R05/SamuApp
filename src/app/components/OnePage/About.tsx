import { GoProjectRoadmap } from "react-icons/go";
import { BiSolidCertification } from "react-icons/bi";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import CounterCard from "../UI/CounterCard";

const counters = [
  { number: 1, label: "Progetti", Icon: GoProjectRoadmap },
  { number: 2, label: "Certificati", Icon: BiSolidCertification },
  { number: 1, label: "Anni Esperienza", Icon: FaPersonArrowUpFromLine },
];

export default function About() {
  return (
    <>
      <section
        id="about"
        className="relative min-h-screen flex flex-col justify-center bg-white px-8 py-16"
      >
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <p className="text-gray-600 leading-relaxed mb-8 text-2xl">
            Fin da piccolo sono sempre stato affascinato dalla tecnologia e
            dall’informatica: adoro capire come funzionano le cose e trovare
            soluzioni creative ai problemi. Negli ultimi anni, dopo varie
            esperienze lavorative, ho deciso di seguire finalmente la mia vera
            passione e iniziare gli studi in informatica. Ora, a 23 anni, sono
            pronto a imparare, crescere e costruire il mio futuro, un passo alla
            volta, con tanta voglia di realizzare i miei sogni.
          </p>
          <a href="">
            <button className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-redCrayola before:to-red-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
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
