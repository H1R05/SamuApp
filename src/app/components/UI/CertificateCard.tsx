import React from "react";

interface CertificateCardProps {
  src: string;
  name: string;
  file: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  src,
  name,
  file,
}) => (
  <div className="bg-gradient-to-r from-slate-50 to-slate-200 px-8 py-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform">
    <iframe
      src={src}
      width="100%"
      height="200px"
      className="border rounded"
      title="Certificato"
    ></iframe>
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

export default CertificateCard;
