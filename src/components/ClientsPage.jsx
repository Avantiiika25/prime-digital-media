import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const clients = [
  { logo: assets.l1, name: "Rayate Science Academy" },
  { logo: assets.l2, name: "VR Farm" },
  { logo: assets.l3, name: "DeshDoot" },
  { logo: assets.l4, name: "Keto Pharma Solution" },
  { logo: assets.l5, name: "SR Empire" },
  { logo: assets.l6, name: "Platinum Hospital Nashik" },
  { logo: assets.l7, name: "Acme Adventures Nashik" },
  { logo: assets.l8, name: "Dnyanvardhini Nursing Institute" },
  { logo: assets.l9, name: "GRACE-IN HARMONY WITH NATURE " },
  { logo: assets.l10, name: "PMB education guidance" },
  { logo: assets.l11, name: "SPEEDWELL EDUSPORTS SCHOOL & JR. COLLEGE " },
  { logo: assets.L12, name: "Deepak Builders & Developers" },
{ logo: assets.L13, name: "Fravashi International School" },
{ logo: assets.L14, name: "samraat group " },
{ logo: assets.L15, name: "Hotel West In (East End) Family Restaurant and Bar" },
{ logo: assets.L16, name: "Parksyde Homes" },
{ logo: assets.L17, name: "City Centre Mall, Nashik" },

];

const typingText =
  "Building long-term partnerships with visionary brands through creative digital strategies, measurable growth campaigns, and performance-driven execution.";

const ClientsPage = () => {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < typingText.length) {
        setTyped(typingText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white dark:bg-black pt-28 px-6 sm:px-12 lg:px-24">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source
          src="https://pixabay.com/videos/download/x-4382_medium.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 dark:bg-black/70 backdrop-blur-sm"></div>

      {/* Glow */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-400/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 blur-[160px] rounded-full"></div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-500 font-semibold tracking-[4px] uppercase mb-4">
            Trusted Partnerships
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
            Our <span className="text-cyan-400">Clients</span>
          </h1>

          <p className="mt-8 text-lg leading-relaxed max-w-xl">
            <span className="text-gray-700 dark:text-gray-300">
              {typed}
            </span>
            <span className="animate-pulse text-cyan-400">|</span>
          </p>

          <motion.div
            className="mt-10 flex gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div>
              <h3 className="text-4xl font-bold text-cyan-500">100+</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-500">50+</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Trusted Brands
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CLIENT SCROLLER */}
        <div className="relative h-[650px] overflow-hidden">

          <motion.div
            animate={{
              y: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="space-y-8"
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  x: -10,
                }}
                className="group flex items-center gap-6 p-6 rounded-3xl bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-xl"
              >
                <div className="w-24 h-24 rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center p-4 shadow-md">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-cyan-400 transition">
                    {client.name}
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Trusted Growth Partner
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsPage;  