// src/app/layout.tsx
import "./globals.css"; // Importa gli stili globali

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>SamPortfolio</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
