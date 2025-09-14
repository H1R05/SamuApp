"use client";

import { motion } from "framer-motion";

export default function AnimatedCharacter() {
  return (
    <div className="text-center mb-8 mt-4">
      <div className="inline-block transform scale-200 origin-center">
        <motion.img
          src="/character/pixelArt.png"
          alt="Digital Explorer"
          className="w-16 h-16 mx-auto"
          style={{ imageRendering: "pixelated" }}
          animate={{
            y: [0, -8, 0], // Movimento su e giù
            rotate: [0, 7, 0, -7, 0], // Leggera rotazione
            filter: [
              "drop-shadow(0 0 0px rgba(139, 92, 246, 0))",
              "drop-shadow(0 0 13px rgba(139, 92, 246, 0.5))",
              "drop-shadow(0 0 0px rgba(139, 92, 246, 0))",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
