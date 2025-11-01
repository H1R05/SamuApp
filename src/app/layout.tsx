"use client";
import "./globals.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import LoadingScreen from "./components/UI/LoadingScreen";
import { useState, useEffect } from "react";
// import ParticleBackgroundAdvanced from "./components/style/AnimatedBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <html lang="en">
      <head>
        <title>SamuPortfolio</title>
        <link rel="icon" href="../elements/favicon.ico" type="image/x-icon" />
      </head>
      <body className="flex flex-col min-h-screen bg-unique-pattern">
        <Header></Header>
        <main className="flex-1">
          {" "}
          {loading ? <LoadingScreen /> : children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
