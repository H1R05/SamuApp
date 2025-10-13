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
  const cardClasses =
    "bg-gray-800 rounded-lg p-6 h-full transition-all duration-300 relative border border-gray-700 hover:border-lime-500 hover:shadow-xl hover:shadow-lime-500/20";

  return (
    <div className={cardClasses}>
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
