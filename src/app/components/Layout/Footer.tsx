"use client";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center relative z-10 bg-transparent/40 backdrop-blur-sm py-9 border-t border-gray-700">
      <div className="flex-1 mx-auto px-4 text-center">
        <p className="text-white">
          {" "}
          2025 - Creato con ❤️ by{" "}
          <span className="font-bold text-orange">Samuele Angelicchio</span>.
          Tutti i diritti riservati.
        </p>
      </div>
      <div className="flex-1 text-white">
        <span>Connessione: </span>
        <div className="flex gap-3 text-2xl text-center">
          {" "}
          <a href="https://github.com/H1R05/">
            <FaGithub className=" text-white mt-6 hover:scale-125 transition-transform hover:text-green-500 " />
          </a>
          <a href="https://www.linkedin.com/in/samuele-angelicchio-639927363/">
            <CiLinkedin className=" text-white mt-6 hover:scale-125 transition-transform hover:text-blue-500" />
          </a>
          <a href="https://www.instagram.com/angelicchio_samuele/">
            <FaInstagram className=" text-white mt-6 hover:scale-125 transition-transform hover:text-pink-600" />
          </a>
        </div>
      </div>
    </footer>
  );
}
