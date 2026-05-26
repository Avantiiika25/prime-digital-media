import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../assets/assets";

const TrustedBy = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <section className="relative overflow-hidden bg-black py-28 px-6 sm:px-12 lg:px-24">

      {/* BACKGROUND WAVES */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">

        {/* WAVE 1 */}
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear",
          }}
          className="absolute bottom-0 w-[200%]"
        >
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-[520px]"
          >
            <path
              fill="#06b6d4"
              fillOpacity="0.6"
              d="M0,128L80,144C160,160,320,192,480,202.7C640,213,800,203,960,176C1120,149,1280,107,1360,90.7L1440,74.7L1440,320L0,320Z"
            />
          </svg>
        </motion.div>

        {/* WAVE 2 */}
        <motion.div
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="absolute bottom-0 w-[200%]"
        >
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-[450px]"
          >
            <path
              fill="#fcfdff"
              fillOpacity="0.5"
              d="M0,224L80,202.7C160,181,320,139,480,128C640,117,800,139,960,170.7C1120,203,1280,245,1360,266.7L1440,288L1440,320L0,320Z"
            />
          </svg>
        </motion.div>
      </div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[180px] rounded-full"></div>

      {/* MAIN SECTION */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          {/* GEOMETRIC SHAPES */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 14,
              ease: "linear",
            }}
            className="absolute -top-10 -left-10 w-32 h-32 border border-cyan-400/30 rounded-3xl"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
            className="absolute -bottom-10 -right-10 w-40 h-40 border border-blue-400/20 rounded-full"
          />

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute top-20 -right-8 w-14 h-14 bg-cyan-400/20 blur-md rotate-45"
          />

          {/* VIDEO BOX */}
          <motion.div
            layout
            transition={{ duration: 0.5 }}
            className={`relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl bg-black ${
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

            {/* VIDEO */}
            <video
              autoPlay
              muted={!openVideo}
              loop
              playsInline
              controls={false}
              className={`w-full transition-all duration-500 ${
                openVideo
                  ? "h-full object-cover"
                  : "h-[540px] object-cover"
              }`}
            >
              <source src={assets.v4} type="video/mp4" />
            </video>

            {/* DARK OVERLAY */}
            {!openVideo && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            )}

            {/* CLICK OUTSIDE TO CLOSE */}
            {openVideo && (
              <div
                className="fixed inset-0 -z-10 bg-black/70 backdrop-blur-md"
                onClick={() => setOpenVideo(false)}
              ></div>
            )}

            {/* SMALL LOGO */}
            {!openVideo && (
              <div className="absolute top-5 left-5">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={assets.logo}
                  alt="Prime Digital Media"
                  className="h-12 object-contain drop-shadow-2xl"
                />
              </div>
            )}

            {/* PLAY SECTION */}
            {!openVideo && (
              <div className="absolute bottom-8 left-8">
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                  }}
                  className="flex items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-400/20 backdrop-blur-xl border border-cyan-300/30 flex items-center justify-center text-white text-2xl">
                    ▶
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Watch Showcase
                    </h3>

                    <p className="text-gray-300 text-sm">
                      Click to experience our cinematic production
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Prime Digital Media
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">
              Beyond Marketing
            </span>

            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              We Create Digital Impact
            </span>
          </h2>

          <p className="mt-10 text-lg md:text-xl text-gray-300 leading-relaxed">
            Prime Digital Media blends strategy, creativity and modern visuals
            to craft experiences that help brands stand out online. From
            cinematic videography and premium website experiences to
            social media campaigns and branding — every project is designed
            to create attention and drive measurable growth.
          </p>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Our focus is not just creating content, but building a powerful
            digital presence that connects brands with people. Through
            storytelling, visuals and performance-driven execution, we help
            businesses establish trust, increase visibility and grow faster
            in the modern digital world.
          </p>

          {/* LINE */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "220px" }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="h-[4px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-14"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;