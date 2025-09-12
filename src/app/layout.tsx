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
        <title>Timeline Hub</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
