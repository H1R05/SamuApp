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
    <div className="bg-gradient-to-r from-slate-50 to-slate-200 px-8 py-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform">
      {!showPdf && (
        <img
          src={preview}
          alt={"Anteprima ${name}"}
          width="100%"
          height="200px"
          className="rounded cursor-pointer"
          onClick={() => setShowPdf(true)}
        />
      )}

      {showPdf && (
        <iframe
          src={file}
          width="100%"
          height="200px"
          className="border rounded"
          title={name}
        />
      )}

      <a
        href={file}
        target="_blank"
        rel="noopener noreferrer"
        className="text-redCrayola font-semibold"
      >
        {name}
        (Visualizza)
      </a>
    </div>
  );
};
export default CertificateCard;
