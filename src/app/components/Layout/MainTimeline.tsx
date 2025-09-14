"use client";
import TimelineItem from "../Home/TimelineItem";

export default function MainTimeline() {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      {/* Linea della timeline centrale */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>

      <div className="space-y-12 md:space-y-24">
        <TimelineItem
          index={0}
          year="2018"
          title="🗺️ La Scoperta della Mappa"
          subtitle="Avvicinamento all'informatica"
          description="Un ragazzo curioso trova una vecchia mappa misteriosa che conduce verso il 'Regno del Digitale'. Non sa ancora cosa troverà, ma decide di partire per questa avventura sconosciuta."
          skills="Primo interesse per la tecnologia, curiosità per il mondo digitale, decisione di esplorare nuovi ambiti."
          tags={["Curiosità", "Esplorazione"]}
        />
        <TimelineItem
          index={1}
          year="2020"
          title="⚔️ La Prima Spada: Python"
          subtitle="Primo linguaggio di programmazione"
          description="Durante il viaggio, l'esploratore ottiene la sua prima arma magica: una spada di luce chiamata Python. Con essa impara a domare piccoli incantesimi, scoprendo che il codice può dare vita a cose incredibili."
          skills="Script di automazione, elaborazione dati, primi algoritmi. Comprensione dei fondamenti della programmazione."
          tags={["Python", "Algoritmi", "Problem Solving"]}
          featured={true}
        />
        <TimelineItem
          index={0}
          year="2020"
          title="⚔️ La Prima Spada: Python"
          subtitle="Primo linguaggio di programmazione"
          description="Durante il viaggio, l'esploratore ottiene la sua prima arma magica: una spada di luce chiamata Python. Con essa impara a domare piccoli incantesimi, scoprendo che il codice può dare vita a cose incredibili."
          skills="Script di automazione, elaborazione dati, primi algoritmi. Comprensione dei fondamenti della programmazione."
          tags={["Python", "Algoritmi", "Problem Solving"]}
          featured={true}
        />
      </div>
    </div>
  );
}
