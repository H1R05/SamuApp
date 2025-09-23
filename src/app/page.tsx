"use client";
import { useState, useEffect } from "react";
import WelcomeModal from "./components/Home/WelcomeModal";
import Header from "./components/Layout/Header";
import MainTimeline from "./components/Layout/MainTimeline";
import Footer from "./components/Layout/Footer";

export default function Home() {
  const [isModalOpen, setisModalOpen] = useState(true);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <>
      <main className="min-h-screen bg-silver">
        <Header></Header>
        <Footer></Footer>
      </main>
      <WelcomeModal
        isOpen={isModalOpen}
        onClose={() => setisModalOpen(false)}
      ></WelcomeModal>
    </>
  );
}
