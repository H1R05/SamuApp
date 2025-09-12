"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const [isModalOpen, setisModalOpen] = useState(true);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });
  const firstSectionRef = useRef(null);
  const isFirstSectionInView = useInView(firstSectionRef, { once: true });

  return (
    <>
      <main className="min-h-screen bg-orange-50">
        {/* Header con tema fantasy */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">
              L'Esploratore del Codice
            </h1>
            <p className="text-xl text-gray-300">
              Un viaggio nel Regno Digitale
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="container mx-auto px-4 py-16">
          <div className="timeline-container">
            {/* La Scoperta della Mappa */}
            <motion.div
              ref={firstSectionRef}
              initial={{ opacity: 0, x: -50 }}
              animate={
                isFirstSectionInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 5, delay: 0.5 }}
              className="timeline-item"
            >
              <div className="timeline-line"></div>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="timeline-title">
                      🗺️ La Scoperta della Mappa
                    </h2>
                    <p className="text-sm text-gray-600 italic">
                      Avvicinamento all'informatica
                    </p>
                  </div>
                  <span className="timeline-badge">2018</span>
                </div>
                <p className="timeline-description">
                  Un ragazzo curioso trova una vecchia mappa misteriosa che
                  conduce verso il "Regno del Digitale". Non sa ancora cosa
                  troverà, ma decide di partire per questa avventura
                  sconosciuta.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>Competenze sviluppate:</strong> Primo interesse per
                    la tecnologia, curiosità per il mondo digitale, decisione di
                    esplorare nuovi ambiti.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="timeline-tag">Curiosità</span>
                  <span className="timeline-tag">Esplorazione</span>
                </div>
              </div>
            </motion.div>

            {/* La Prima Spada: Python */}
            <div className="timeline-item">
              <div className="timeline-line"></div>
              <div className="timeline-dot"></div>
              <div className="timeline-card-featured">
                <div className="absolute -top-3 -right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  Prima Arma!
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="timeline-title">
                      ⚔️ La Prima Spada: Python
                    </h2>
                    <p className="text-sm text-gray-600 italic">
                      Primo linguaggio di programmazione
                    </p>
                  </div>
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    2020
                  </span>
                </div>
                <p className="timeline-description">
                  Durante il viaggio, l'esploratore ottiene la sua prima arma
                  magica: una spada di luce chiamata Python. Con essa impara a
                  domare piccoli incantesimi, scoprendo che il codice può dare
                  vita a cose incredibili.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>Progetti concreti:</strong> Script di automazione,
                    elaborazione dati, primi algoritmi. Comprensione dei
                    fondamenti della programmazione.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="timeline-tag-featured">Python</span>
                  <span className="timeline-tag-featured">Algoritmi</span>
                  <span className="timeline-tag-featured">Problem Solving</span>
                </div>
              </div>
            </div>

            {/* La Costruzione del Villaggio */}
            <div className="timeline-item">
              <div className="timeline-line"></div>
              <div className="timeline-dot"></div>
              <div className="timeline-card-featured">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="timeline-title">
                      🏰 La Costruzione del Villaggio
                    </h2>
                    <p className="text-sm text-gray-600 italic">
                      Progetti e portfolio
                    </p>
                  </div>
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    2022
                  </span>
                </div>
                <p className="timeline-description">
                  L'esploratore non si limita più a piccole magie: ora
                  costruisce villaggi digitali, bot, gallerie e piccoli sistemi.
                  Ogni creazione lo rende più forte e aumenta la sua reputazione
                  nel regno.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>Progetto principale:</strong> Galleria immagini con
                    steganografia - sistema completo che unisce sicurezza
                    informatica, elaborazione immagini e user interface.
                  </p>
                </div>
                <div className="flex gap-3 mb-4">
                  <a
                    href="#"
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Esplora il Villaggio
                  </a>
                  <a
                    href="#"
                    className="border-2 border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    Codice Magico
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="timeline-tag-featured">Steganografia</span>
                  <span className="timeline-tag-featured">
                    Image Processing
                  </span>
                  <span className="timeline-tag-featured">UI Design</span>
                </div>
              </div>
            </div>

            {/* L'Alleanza dei DevOps */}
            <div className="timeline-item">
              <div className="timeline-line"></div>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="timeline-title">🤝 L'Alleanza dei DevOps</h2>
                    <p className="text-sm text-gray-600 italic">
                      Formazione specialistica ITS
                    </p>
                  </div>
                  <span className="timeline-badge">2024-presente</span>
                </div>
                <p className="timeline-description">
                  Arriva il momento di unirsi a una gilda: il giovane entra in
                  un ordine di costruttori che usano strumenti potenti come
                  Docker, GitHub e il cloud. Impara il valore del lavoro di
                  squadra e delle grandi infrastrutture.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>Competenze DevOps:</strong> Containerizzazione,
                    CI/CD, cloud computing, automation, monitoring e
                    orchestrazione di sistemi distribuiti.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="timeline-tag">Docker</span>
                  <span className="timeline-tag">CI/CD</span>
                  <span className="timeline-tag">Cloud</span>
                  <span className="timeline-tag">Kubernetes</span>
                </div>
              </div>
            </div>

            {/* L'Odissea Universitaria */}
            <div className="timeline-item">
              <div className="timeline-line"></div>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="timeline-title">
                      🚀 L'Odissea Universitaria
                    </h2>
                    <p className="text-sm text-gray-600 italic">
                      Prossimi obiettivi accademici
                    </p>
                  </div>
                  <span className="timeline-badge">2026+</span>
                </div>
                <p className="timeline-description">
                  Dopo aver raccolto esperienza, il viaggiatore parte per la sua
                  avventura più grande: il viaggio all'interno della Cittadella
                  della Conoscenza. Qui dovrà affrontare nuove prove, sfide
                  matematiche e nemici sconosciuti, ma ormai è pronto.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>Obiettivi futuri:</strong> Formazione universitaria
                    in informatica o ingegneria, specializzazione in aree
                    avanzate, contributi open source e crescita professionale.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="timeline-tag">Università</span>
                  <span className="timeline-tag">Ricerca</span>
                  <span className="timeline-tag">Open Source</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>L'avventura continua... 🌟</p>
          </div>
        </footer>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 border-2 border-orange-400 p-8 rounded-lg max-w-md text-center shadow-lg"
          >
            <div className="bg-gray-800 p-8 rounded-lg max-w-md text-center">
              <h2 className="text-2xl font-bold mb-4 text-orange-300">
                Benvenuto, Esploratore!
              </h2>
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 shadow-orange-500/50 border-2 border-orange-300"></div>
              <p className="mb-6 text-gray-200">
                Sei pronto per scoprire la storia del viaggiatore perduto?
              </p>
              <button
                onClick={() => setisModalOpen(false)}
                className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
              >
                Entra per conoscere la storia del viaggiatore!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
