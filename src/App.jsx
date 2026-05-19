import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import FloatingContact from "./components/FloatingContact";
import ScrollToTop from "./components/ScrollToTop";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TeamPage from "./components/TeamPage";
import ClientsPage from "./components/ClientsPage";

// Pages
import Home from "./components/Home";

// Theme setup
const getInitialTheme = () => {
  const saved = localStorage.getItem("theme");

  if (saved === "dark" || saved === "light") return saved;

  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return "light";
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Custom Cursor
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3D(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3D(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative bg-white dark:bg-black transition-colors">
        
        {/* Toast Notifications */}
        <Toaster position="top-right" />

        <ScrollToTop />

        {/* Navbar */}
        <Navbar theme={theme} setTheme={setTheme} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/clients" element={<ClientsPage />} />
        </Routes>

         <FloatingContact />
        {/* Footer */}
        <Footer theme={theme} />

        {/* Custom Cursor Outline */}
        <div
          ref={outlineRef}
          className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]"
          style={{ transition: "transform 0.1s ease-out" }}
        />

        {/* Custom Cursor Dot */}
        <div
          ref={dotRef}
          className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"
        />
      </div>
    </BrowserRouter>
  );
};

export default App;