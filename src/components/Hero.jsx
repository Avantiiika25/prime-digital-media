import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    video:
      "https://www.pexels.com/download/video/6558419/",
    title: "Digital Growth That Drives Results",
    subtitle:
      "Scale your business through performance marketing, SEO, paid advertising and powerful digital experiences.",
  },
  {
    video:
      "https://www.pexels.com/download/video/6561343/",
    title: "Turn Traffic Into Revenue",
    subtitle:
      "We craft data-driven marketing strategies that generate leads, conversions and measurable ROI.",
  },
  {
    video:
      "https://www.pexels.com/download/video/7149053/",
    title: "SEO • Ads • Growth",
    subtitle:
      "Helping brands dominate search, outperform competitors and grow faster with precision marketing.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [typedText, setTypedText] = useState("");

  const currentSlide = slides[current];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Typing effect
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
    }, 70);

    return () => clearInterval(typing);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center"
    >
      {/* Background Video */}
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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400/20 blur-[140px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 w-full">
        <div className="max-w-3xl">

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-cyan-300 mb-6"
          >
            Strategy • Performance • Growth
          </motion.div>

          {/* Typing Heading */}
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

          {/* Subtitle */}
          <motion.p
            key={`sub-${current}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
          >
            {currentSlide.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="#services"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-all"
            >
              Request Quote
            </a>

            <a
              href="#portfolio"
              className="px-8 py-4 border border-white/30 bg-white/10 backdrop-blur-xl text-white rounded-full hover:bg-white/20 transition-all"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-cyan-500 transition"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-cyan-500 transition"
      >
        →
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all ${
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