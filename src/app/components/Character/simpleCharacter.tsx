import { div } from "framer-motion/client";

export default function SimpleCharacter() {
  return (
    <div className="text-center mb-8 mt-4">
      <div className="inline-block transform scale-200 origin-center">
        <img
          src="/character/pixelArt.png"
          alt="Digital Explorer"
          className="w-16 h-16 mx-auto"
          style={{ imageRendering: "pixelated" }}
        />
      </div>
    </div>
  );
}
