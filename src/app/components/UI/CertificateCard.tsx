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
      className="relative w-80 flex flex-col bg-white
                    border border-gray-200 rounded-xl overflow-hidden shadow-lg p-4
                    group transition-all duration-300 
                    hover:border-redCrayola hover:shadow-xl hover:shadow-redCrayola/40 hover:scale-[1.02]"
    >
      <div
        className="absolute inset-0 rounded-xl pointer-events-none 
                      bg-gradient-to-r from-redCrayola/70 via-transparent to-redCrayola/70
                      opacity-0 group-hover:opacity-70 
                      scale-0 group-hover:scale-105 
                      group-hover:animate-spin-slow 
                      transition-all duration-500 ease-out z-0"
      ></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="relative mb-4">
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
              className="w-full h-40 border border-gray-300 rounded-lg"
              title={name}
            />
          )}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3 flex-grow">
          {name}
        </h3>

        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center py-2 px-4 rounded-lg bg-redCrayola 
                       text-white font-semibold transition-all duration-200 
                       hover:bg-red-800 hover:shadow-lg hover:shadow-redCrayola/40"
        >
          {showPdf ? "Scarica" : "Visualizza PDF"}
          <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
};
export default CertificateCard;
