import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../assets/assets";

const portfolioItems = [
  {
    type: "video",
    category: "Cinematic Video",
    title: "Commercial Videography",
    client: "Rayate Science Academy",
    description:
      "High-quality cinematic brand films and promotional video campaigns.",
    video: assets.v1,
  },
  {
    type: "logo",
    category: "Brand Identity",
    title: "Brand Identity & Logo Design",
    client: "Business Branding Projects",
    description:
      "Minimal, modern and premium logo identities designed for growing businesses.",
    logo: assets.l2,
  },
  {
    type: "video",
    category: "Commercial Production",
    title: "Creative Commercial Production",
    client: "Rayate Science Academy",
    description:
      "Creative storytelling videos, ad shoots and cinematic visual productions.",
    video: assets.v3,
  },
  {
    type: "smm",
    category: "Social Media Marketing",
    title: "Strategic Growth Campaigns",
    client: "DeshDoot, Grace, Platinum Hospital, Rayate Science Academy, PMB",
    description:
      "Creative social media campaigns designed with strategic growth-focused content.",
    logo: assets.smm,
  },
  {
    type: "video",
    category: "Drone Production",
    title: "Sivaraa 360 Event Coverage & Aerial Drone Shoots",
    client: "Deepak Builders, City Center Mall, Nashik Goda Ghat, Urban Sytes",
    description:
      "Professional event videography, drone coverage and cinematic edits.",
    video: "https://www.pexels.com/download/video/32336986/",
  },
  {
    type: "smm",
    category: "Social Media Marketing",
    title: "Performance & Content Marketing",
    client: "DeshDoot, Grace, Platinum Hospital, Rayate Science Academy, PMB",
    description:
      "End-to-end content production, data analytics infrastructure, and organic reach optimization.",
    logo: assets.smm, // Uses your SMM asset identifier
  },
];

const Portfolio = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section
      id="portfolio"
      className="relative min-h-screen px-4 sm:px-12 lg:px-24 py-16 bg-white dark:bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 blur-[160px] rounded-full pointer-events-none"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto z-10 relative"
      >
        <p className="text-cyan-400 uppercase tracking-[4px] font-semibold text-sm">
          Prime Digital Portfolio
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-4 text-gray-900 dark:text-white leading-tight tracking-tight">
          Creative Work That
          <span className="block sm:inline bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Drives Growth</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          From branding and social media campaigns to cinematic productions —
          we create modern digital experiences that elevate brands online.
        </p>
      </motion.div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto relative z-10">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200/50 dark:border-white/10 bg-zinc-50/80 dark:bg-zinc-900/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-cyan-500/5"
          >
            {/* CARD TOP MEDIA BANNER */}
            {item.type === "video" ? (
              <div className="relative h-64 overflow-hidden bg-black">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition duration-700"
                >
                  <source src={item.video} type="video/mp4" />
                </video>

                {/* Ambient Category Tag */}
                <span className="absolute top-4 left-4 z-20 text-xs font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-cyan-400 px-3 py-1.5 rounded-full border border-white/10">
                  {item.category}
                </span>

                {/* Play Action Layer */}
                <button
                  onClick={() => setActiveVideo(item.video)}
                  className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 group-hover:bg-black/10 transition duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white text-xl shadow-2xl transition-colors hover:bg-cyan-500/80 hover:border-cyan-400"
                  >
                    ▶
                  </motion.div>
                </button>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              </div>
            ) : (
              /* IMAGES / EMBLEMS / LOGOS & SMM CONTAINER */
              <div className="relative flex items-center justify-center h-64 overflow-hidden bg-gradient-to-b from-zinc-100/50 to-zinc-200/20 dark:from-zinc-900/50 dark:to-zinc-900/20 border-b border-gray-200/30 dark:border-white/5">
                <span className="absolute top-4 left-4 z-20 text-xs font-semibold uppercase tracking-wider bg-white/80 dark:bg-black/60 backdrop-blur-md text-blue-500 dark:text-cyan-400 px-3 py-1.5 rounded-full border border-gray-200/50 dark:border-white/10">
                  {item.category}
                </span>

                {/* Radial Glow effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  animate={{ rotate: [0, 6, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                  className="absolute w-40 h-40 bg-cyan-400/10 blur-[60px] rounded-full"
                />

                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  src={item.logo}
                  alt={item.title}
                  className="relative z-10 h-28 max-w-[80%] object-contain drop-shadow-2xl filter dark:brightness-100"
                />
              </div>
            )}

            {/* CARD METADATA INFO BLOCK */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-blue-500 dark:text-cyan-400/90 font-medium tracking-wide">
                  {item.client}
                </p>
              </div>
              <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULLSCREEN MOUNTED PORTAL VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm"
          >
            {/* Dynamic Interactive Backdrop Dismiss overlay */}
            <div className="absolute inset-0" onClick={() => setActiveVideo(null)} />

            {/* Close Button UI */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-4xl z-50 transition-transform duration-200 hover:scale-110 active:scale-95"
            >
              &times;
            </button>

            {/* Responsive Video Window */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 z-10 aspect-video"
            >
              <video
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                <source src={activeVideo} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;