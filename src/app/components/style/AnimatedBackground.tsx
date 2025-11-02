"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackgroundAdvanced() {
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "black", // background sfondo
        },
        particles: {
          color: {
            value: ["#ffffff", "#4d94ff", "#4dff88", "#ff4db8", "#ffb84d"],
          },
          move: {
            enable: true,
            speed: 0.8,
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
              enable: false,
              area: 800,
            },
          },
          opacity: {
            value: 0.7,
            random: { enable: true, minimumValue: 0.4 },
          },
          size: {
            value: { min: 0.5, max: 4 },
            random: { enable: true, minimumValue: 1 },
          },
          shape: { type: "circle" },
          // Colore dinamico
          animation: {
            enable: true,
            speed: 30,
            sync: true,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
      className="fixed top-0 left-0 w-full h-screen z-0"
    />
  );
}
