import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../assets/assets";

const slides = [
  {
    video: assets.h1,
    title: "Digital Growth That Drives Results",
    subtitle:
      "Scale your business through performance marketing, SEO, paid advertising and powerful digital experiences.",
  },
  {
    video: assets.h2,
    title: "Turn Traffic Into Revenue",
    subtitle:
      "We craft data-driven marketing strategies that generate leads, conversions and measurable ROI.",
  },
  {
    video: assets.h3,
    title: "SEO • Ads • Growth",
    subtitle:
      "Helping brands dominate search, outperform competitors and grow faster with precision marketing.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [typedText, setTypedText] = useState("");

  const currentSlide = slides[current];

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  /* TYPING EFFECT */
  useEffect(() => {
    let index = 0;
    setTypedText("");

    const typing = setInterval(() => {
      if (index < currentSlide.title.length) {
        setTypedText(currentSlide.title.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typing);
      }
    }, 60);

    return () => clearInterval(typing);
  }, [current]);

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center bg-black"
    >
      {/* BACKGROUND VIDEO */}
      <AnimatePresence mode="wait">
        <motion.video
          key={current}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <source src={currentSlide.video} type="video/mp4" />
        </motion.video>
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* PREMIUM GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 blur-[160px] rounded-full"></div>

      {/* GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 w-full">
        <div className="max-w-3xl">

          {/* TAG */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-cyan-300 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

            Strategy • Performance • Branding
          </motion.div>

          {/* MAIN TITLE */}
          <motion.h1
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            {typedText}

            <span className="animate-pulse text-cyan-400">|</span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            key={`sub-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-7 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
          >
            {currentSlide.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="#services"
              className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>

            <a
              href="/portfolio"
              className="px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition-all duration-300"
            >
              View Portfolio
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-10 mt-14"
          >
            <div>
              <h3 className="text-3xl font-bold text-white">200+</h3>

              <p className="text-gray-400 mt-1">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">100+</h3>

              <p className="text-gray-400 mt-1">
                Trusted Clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">24/7</h3>

              <p className="text-gray-400 mt-1">
                Creative Support
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "w-10 bg-cyan-400"
                : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;