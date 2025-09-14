"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="relative py-10 overflow-hidden bg-gradient-to-r from-purple-705 to-blue-695">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Titolo e sottotitolo */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Esplora il codice
            </h1>
            <p className="text-lg text-purple-200 mt-2">
              Un viaggio nella storia
            </p>
          </div>

          {/* Link di navigazione */}
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              className="text-lg font-medium text-white hover:text-purple-300 transition-colors py-2 px-4 bg-purple-700/30 rounded-lg"
              href="#"
            >
              Home
            </a>
            <a
              className="text-lg font-medium text-white hover:text-purple-300 transition-colors py-2 px-4 bg-purple-700/30 rounded-lg"
              href="#"
            >
              Progetti
            </a>
            <a
              className="text-lg font-medium text-white hover:text-purple-300 transition-colors py-2 px-4 bg-purple-700/30 rounded-lg"
              href="#"
            >
              Contatti
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
