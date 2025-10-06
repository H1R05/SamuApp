"use client";
import Portfolio from "./components/OnePage/Portfolio";
import About from "./components/OnePage/About";
import Home from "./components/OnePage/Home";
import Contact from "./components/OnePage/Contact";

export default function HomePage() {
  return (
    <>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </>
  );
}
