"use client";

import AnimatedCharacter from "../Character/AnimatedCharacter";
import { motion, AnimatePresence, easeOut } from "framer-motion";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="relative z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Container */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center p-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div
              className="rounded-2xl p-8 border-2 border-silver
                      shadow-md shadow-silver
                      bg-slate-950"
            >
              <AnimatedCharacter />

              <div className="text-center">
                <div className="text-2xl font-bold text-silver mb-5">
                  Benvenuto nel mio sito!
                </div>
                <button
                  onClick={onClose}
                  className="bg-gradient-to-r from-white to-yellow-200 text-black px-6 py-2 rounded-full font-medium transition-all"
                >
                  Entra!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
