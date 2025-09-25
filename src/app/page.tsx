"use client";
import { useState, useEffect } from "react";
import WelcomeModal from "./components/OnePage/WelcomeModal";
import Projects from "./components/OnePage/Projects";
import About from "./components/OnePage/About";
import Home from "./components/OnePage/Home";
import Contacts from "./components/OnePage/Contacts";

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
      <Projects></Projects>
      <Contacts></Contacts>
      <WelcomeModal
        isOpen={isModalOpen}
        onClose={() => setisModalOpen(false)}
      ></WelcomeModal>
    </>
  );
}
