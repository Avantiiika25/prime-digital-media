import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../assets/assets";

const TrustedBy = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 px-6 sm:px-12 lg:px-24">
      
      {/* BACKGROUND WAVES */}
      <div className="absolute inset-0 opacity-25 overflow-hidden pointer-events-none">
        {/* WAVE 1 */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="absolute bottom-0 w-[200%]"
        >
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[450px]">
            <path fill="#06b6d4" fillOpacity="0.5" d="M0,128L80,144C160,160,320,192,480,202.7C640,213,800,203,960,176C1120,149,1280,107,1360,90.7L1440,74.7L1440,320L0,320Z" />
          </svg>
        </motion.div>

        {/* WAVE 2 */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute bottom-0 w-[200%]"
        >
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[400px]">
            <path fill="#ffffff" fillOpacity="0.3" d="M0,224L80,202.7C160,181,320,139,480,128C640,117,800,139,960,170.7C1120,203,1280,245,1360,266.7L1440,288L1440,320L0,320Z" />
          </svg>
        </motion.div>
      </div>

      {/* LIGHT CYAN GRADIENT GLOWS */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-400/30 blur-[200px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/25 blur-[200px] rounded-full pointer-events-none"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT VIDEO SECTION (Narrower width, increased length) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex justify-center w-full"
        >
          {/* VIDEO BOX CONTAINER */}
          <motion.div
            layout
            transition={{ duration: 0.4 }}
            className={`relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl bg-black max-w-md md:w-[400px] ${
              openVideo
                ? "fixed inset-0 z-[99999] m-auto w-[92vw] h-[85vh] max-w-6xl"
                : "w-full cursor-pointer"
            }`}
            onClick={() => !openVideo && setOpenVideo(true)}
          >
            {/* CLOSE BUTTON */}
            <AnimatePresence>
              {openVideo && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenVideo(false);
                  }}
                  className="absolute top-5 right-5 z-50 w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl text-white text-3xl flex items-center justify-center"
                >
                  ×
                </motion.button>
              )}
            </AnimatePresence>

            {/* VIDEO ELEMENT (Increased height to 620px) */}
            <video
              autoPlay
              muted={!openVideo}
              loop
              playsInline
              controls={openVideo}
              className={`w-full transition-all duration-500 object-cover ${
                openVideo ? "h-full" : "h-[620px]"
              }`}
            >
              <source src={assets.v4} type="video/mp4" />
            </video>

            {/* OVERLAYS & TEXT WHEN CLOSED */}
            {!openVideo && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                
                <div className="absolute top-5 left-5">
                  <img src={assets.logo} alt="Prime Digital Media" className="h-10 object-contain drop-shadow-2xl" />
                </div>

                <div className="absolute bottom-8 left-6 right-6">
                  <motion.div 
                    animate={{ y: [0, -5, 0] }} 
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-full bg-cyan-400/20 backdrop-blur-xl border border-cyan-300/30 flex items-center justify-center text-white text-lg">
                      ▶
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Watch Showcase</h3>
                      <p className="text-gray-400 text-xs">Click to experience production</p>
                    </div>
                  </motion.div>
                </div>
              </>
            )}

            {/* BACKDROP CLOSER */}
            {openVideo && (
              <div className="fixed inset-0 -z-10 bg-black/70 backdrop-blur-md" onClick={() => setOpenVideo(false)}></div>
            )}
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT SECTION (Clean & Condensed) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold text-sm">
            Prime Digital Media
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-white">Beyond Marketing</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              We Create Digital Impact
            </span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
            We blend strategy, cinematic videography, and premium web design to craft experiences that make your brand memorable. Through impactful storytelling and data-driven execution, we build a powerful presence that establishes trust and accelerates market visibility.
          </p>

          {/* GRADIENT ACCENT LINE */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "160px" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-[4px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-10"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default TrustedBy;