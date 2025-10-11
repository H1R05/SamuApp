// src/app/layout.tsx
import "./globals.css"; // Importa gli stili globali
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>SamuPortfolio</title>
        <link rel="icon" href="../elements/favicon.ico" type="image/x-icon" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header></Header>
        <main className="flex-1">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
