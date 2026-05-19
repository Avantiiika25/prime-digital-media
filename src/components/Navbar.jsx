import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    setSidebarOpen(false);

    if (id === "portfolio-page") {
      navigate("/portfolio");
      return;
    }

    if (id === "team-page") {
      navigate("/team");
      return;
    }

    if (id === "clients-page") {
      navigate("/clients");
      return;
    }

    if (window.location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 500);

      return;
    }

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    ["Home", "hero"],
    ["About", "about"],
    ["Services", "services"],
    ["Portfolio", "portfolio-page"],
    ["Team", "team-page"],
    ["Our Clients", "clients-page"],
    ["Contact", "contact-us"],
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-100"
    >
      <div className="flex justify-between items-center px-6 sm:px-12 lg:px-24 py-4">

        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <img
            src={assets.logo}
            alt="Prime Digital"
            className="w-16 sm:w-20 object-contain"
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-xl sm:text-2xl font-bold text-black">
              Prime Digital Media Solutions
            </h1>

            <p className="text-cyan-500 text-xs sm:text-sm tracking-wider">
              Strategy • Performance • Growth
            </p>
          </motion.div>
        </motion.div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map(([name, id]) => (
            <motion.button
              key={id}
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(id)}
              className="relative font-medium text-black group"
            >
              {name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <div className="rounded-full bg-gray-100 px-2 py-2 shadow-sm">
            <ThemeToggleBtn theme={theme} setTheme={setTheme} />
          </div>

          {/* REQUEST QUOTE */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 18px rgba(6,182,212,0.25)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact-us")}
            className="hidden sm:block px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all"
          >
            Request Quote
          </motion.button>

          {/* HAMBURGER */}
          <motion.button
            whileTap={{ scale: 0.9, rotate: 90 }}
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-3xl text-black"
          >
            ☰
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45 }}
              className="fixed right-0 top-0 h-full w-72 bg-white shadow-2xl p-8"
            >
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-5 right-5 text-3xl text-black"
              >
                ×
              </button>

              <div className="mt-20 flex flex-col gap-8">
                {navItems.map(([name, id], i) => (
                  <motion.button
                    key={id}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => scrollToSection(id)}
                    className="text-left text-lg font-medium text-black hover:text-cyan-500 transition"
                  >
                    {name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;