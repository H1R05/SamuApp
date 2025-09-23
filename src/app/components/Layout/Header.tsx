"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="relative h-20 flex bg-night items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex py-1 flex-col md:flex-row md:items-center md:justify-between">
          {/* Titolo e sottotitolo */}
          <div className="">
            <a href="">
              <img
                src="/character/logoSitoWeb.png"
                alt=""
                className="h-40 w-auto object-contain "
              />
            </a>
          </div>

          {/* Link di navigazione */}
          <nav className="flex gap-8">
            <a
              className="font-medium text-silver hover:text-violet-600 transition-colors"
              href="#"
            >
              Home
            </a>
            <a
              className="font-medium text-silver hover:text-violet-600 transition-colors"
              href="#"
            >
              About
            </a>
            <a
              className="font-medium text-silver hover:text-violet-600 transition-colors"
              href="#"
            >
              Progetti
            </a>
            <a
              className="font-medium text-silver hover:text-violet-600 transition-colors"
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
