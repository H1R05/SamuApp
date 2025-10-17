"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackgroundAdvanced() {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#0d0d1f", // sfondo scuro profondo
        },
        particles: {
          color: {
            value: ["#ff4d4d", "#4d94ff", "#4dff88", "#ff4db8", "#ffb84d"], // rosso, blu, verde acqua, rosa, arancio
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 160,
            opacity: 0.25,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
          number: {
            value: 120,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.7,
            random: { enable: true, minimumValue: 0.4 },
          },
          size: {
            value: { min: 1, max: 4 },
            random: { enable: true, minimumValue: 1 },
          },
          shape: { type: "circle" },
          // Colore dinamico
          animation: {
            enable: true,
            speed: 20,
            sync: false,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
      className="fixed top-0 left-0 w-full h-screen z-0"
    />
  );
}
