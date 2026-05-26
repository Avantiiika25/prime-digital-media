import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../assets/assets";

const portfolioItems = [
  {
    type: "video",
    title: "Commercial Videography",
    client: "Rayate Science Academy",
    description:
      "High-quality cinematic brand films and promotional video campaigns.",
    video: assets.v1,
  },

  {
    type: "logo",
    title: "Brand Identity & Logo Design",
    client: "Business Branding Projects",
    description:
      "Minimal, modern and premium logo identities designed for growing businesses.",
    logo: assets.l2,
  },

   {
    type: "video",
    title: "Creative Commercial Production",
    client: "Brand Promotional Campaigns",
    description:
      "Creative storytelling videos, ad shoots and cinematic visual productions.",
    video: assets.v3,
  },
  {
    type: "logo",
    title: "Social Media Marketing",
    client:
      "DeshDoot, Grace, Platinum Hospital, Rayate Science Academy, PMB",
    description:
      "Creative social media campaigns with strategic growth-focused content.",
    logo: assets.smm,
  },

  
  {
    type: "video",
    title: "Event Coverage & Drone Shoots",
    client: "Prime Media Productions",
    description:
      "Professional event videography, drone coverage and cinematic edits.",
    video: "https://www.pexels.com/download/video/32336986/",
  },

 

 
];

const Portfolio = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section
      id="portfolio"
      className="relative min-h-screen px-6 sm:px-12 lg:px-24 py-28 bg-white dark:bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 blur-[160px] rounded-full"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
          Prime Digital Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-5 text-gray-900 dark:text-white leading-tight">
          Creative Work That
          <span className="text-cyan-400"> Drives Growth</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          From branding and social media campaigns to cinematic productions —
          we create modern digital experiences that elevate brands online.
        </p>
      </motion.div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-2xl"
          >
            {/* VIDEO CARDS */}
            {item.type === "video" ? (
              <div className="relative h-72 overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                >
                  <source src={item.video} type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>

                {/* Play Button */}
                <button
                  onClick={() => setActiveVideo(item.video)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white text-3xl shadow-2xl"
                  >
                    ▶
                  </motion.div>
                </button>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
            ) : (
              /* LOGO CARDS */
              <div className="relative flex items-center justify-center h-72 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>

                <motion.div
                  animate={{
                    rotate: [0, 4, -4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                  }}
                  className="absolute w-52 h-52 bg-cyan-400/10 blur-[90px] rounded-full"
                />

                {/* Logo */}
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  src={item.logo}
                  alt={item.title}
                  className="relative z-10 h-32 object-contain drop-shadow-2xl"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-cyan-400 font-medium">
                {item.client}
              </p>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULLSCREEN VIDEO POPUP */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-6"
          >
            {/* Close */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-8 text-white text-5xl z-50 hover:scale-110 transition"
            >
              ×
            </button>

            {/* Full Video */}
            <motion.video
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              controls
              autoPlay
              className="max-w-6xl w-full rounded-3xl shadow-2xl"
            >
              <source src={activeVideo} type="video/mp4" />
            </motion.video>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;