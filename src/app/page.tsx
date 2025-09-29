"use client";
import { useState, useEffect } from "react";
import WelcomeModal from "./components/OnePage/WelcomeModal";
import Portfolio from "./components/OnePage/Portfolio";
import About from "./components/OnePage/About";
import Home from "./components/OnePage/Home";
import Contact from "./components/OnePage/Contact";

export default function HomePage() {
  const [isModalOpen, setisModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <WelcomeModal
        isOpen={isModalOpen}
        onClose={() => setisModalOpen(false)}
      ></WelcomeModal>
    </>
  );
}
