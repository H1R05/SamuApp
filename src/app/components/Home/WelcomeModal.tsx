// components/Welcome/WelcomeModal.tsx
"use client";

import AnimatedCharacter from "../Character/AnimatedCharacter";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="relative z-50">
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div
          className="rounded-2xl p-8 border-2 border-purple-500/30 
                      shadow-lg shadow-purple-500/20 
                      bg-gradient-to-br from-slate-800 to-slate-900"
        >
          <AnimatedCharacter />

          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-5">
              Benvenuto, Esploratore!
            </div>
            <p className="text-slate-300 mb-9">
              Sei pronto per scoprire la mia storia
            </p>
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-700 hover:to-blue-800 transition-all"
            >
              Inizia l'Avventura
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
