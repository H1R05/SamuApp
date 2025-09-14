"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// Definisco l'interfaccia per le props
interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  skills?: string;
  tags?: string[];
  featured?: boolean;
  index: number;
}

// Hook personalizzato per rilevare quando l'elemento è in vista
const useIsInView = (ref: React.RefObject<HTMLElement>) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  return isInView;
};

export default function TimelineItem({
  year,
  title,
  subtitle,
  description,
  skills,
  tags,
  featured = false,
  index,
}: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      } items-center mb-8`}
    >
      {/* Punto sulla timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-slate-900 z-10 hidden md:block"></div>

      {/* Contenuto */}
      <div
        className={`w-full md:w-5/12 ${
          index % 2 === 0 ? "md:pr-8" : "md:pl-8"
        } mb-4 md:mb-0`}
      >
        <div
          className={`p-6 rounded-2xl shadow-lg ${
            featured
              ? "bg-gradient-to-br from-purple-600/20 to-blue-500/20 border border-purple-500/30"
              : "bg-slate-800/50 border border-slate-700/50"
          } backdrop-blur-sm`}
        >
          {featured && (
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              Tappa Importante!
            </div>
          )}

          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">{title}</h2>
              <p className="text-sm text-purple-300 italic">{subtitle}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                featured
                  ? "bg-white text-purple-700"
                  : "bg-slate-700 text-purple-300"
              }`}
            >
              {year}
            </span>
          </div>

          <p className="text-slate-300 mb-4 leading-relaxed">{description}</p>

          {skills && (
            <div className="bg-slate-700/30 p-4 rounded-lg mb-4">
              <p className="text-sm text-slate-200">
                <strong className="text-purple-300">
                  Competenze sviluppate:
                </strong>{" "}
                {skills}
              </p>
            </div>
          )}

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-xs ${
                    featured
                      ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      : "bg-slate-700/50 text-slate-300"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Spazio per la linea timeline su mobile */}
      <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 mx-auto md:hidden"></div>
    </motion.div>
  );
}
