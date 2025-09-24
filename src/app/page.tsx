"use client";
import { useState, useEffect } from "react";
import WelcomeModal from "./components/Home/WelcomeModal";
import Projects from "./components/Home/Projects";
import About from "./components/Home/About";
import Home from "./components/Home/Home";
import Contacts from "./components/Home/Contacts";

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
