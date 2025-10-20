import { useState } from "react";

interface CertificateCardProps {
  preview: string;
  name: string;
  file: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  preview,
  name,
  file,
}) => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div
      className="relative w-80 flex flex-col 
      bg-[#0b132b]/80 border border-yellow-300/30 rounded-2xl overflow-hidden 
      shadow-[0_0_20px_rgba(255,215,0,0.15)]
      p-4 transition-all duration-300 hover:scale-[1.04] 
      hover:shadow-[0_0_25px_rgba(255,215,0,0.35)]"
    >
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl 
        bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 
        opacity-0 group-hover:opacity-80 
        transition-opacity duration-500 ease-out z-0"
      ></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="relative mb-4 ">
          {!showPdf ? (
            <img
              src={preview}
              alt={`Anteprima del certificato ${name}`}
              className="w-full h-40 object-cover rounded-lg cursor-pointer shadow-md 
              transition-transform duration-300 hover:scale-[1.03]"
              onClick={() => setShowPdf(true)}
            />
          ) : (
            <iframe
              src={file}
              className="w-full h-40 border border-yellow-400/30 rounded-lg"
              title={name}
            />
          )}
        </div>

        <h3 className="text-white text-xl font-semibold mb-3 drop-shadow-[0_0_6px_#00ffff]">
          {name}
        </h3>

        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block w-full text-center py-2 px-4 rounded-lg 
          bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 font-bold 
          transition-all duration-300 
          shadow-[0_0_15px_rgba(255,215,0,0.4)]
          hover:shadow-[0_0_25px_rgba(255,215,0,0.7)] 
          hover:scale-105"
        >
          {showPdf ? "Scarica" : "Visualizza PDF"}
          <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;
