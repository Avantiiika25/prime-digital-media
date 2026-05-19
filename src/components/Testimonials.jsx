import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const testimonials = [
  {
    logo: assets.l1,
    name: "Rayate Science Academy",
    review: "Admissions visibility increased through strategic digital campaigns."
  },
  {
    logo: assets.l3,
    name: "DeshDoot",
    review: "Creative branding campaigns delivered exceptional audience engagement."
  },
  {
    logo: assets.l6,
    name: "Platinum Hospital",
    review: "Lead generation and local reach improved significantly."
  }
];

const Testimonials = () => {
  const [typed, setTyped] = useState(["", "", ""]);

  useEffect(() => {
    testimonials.forEach((item, index) => {
      let i = 0;
      const interval = setInterval(() => {
        setTyped((prev) => {
          const updated = [...prev];
          updated[index] = item.review.slice(0, i + 1);
          return updated;
        });

        i++;
        if (i >= item.review.length) clearInterval(interval);
      }, 25);
    });
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      >
        <source
          src="https://www.pexels.com/download/video/36439665/"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-white/85 dark:bg-black/85 backdrop-blur-sm"></div>

      <div className="relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold">
            <span className="text-cyan-400">Client</span>{" "}
            <span className="text-yellow-400">Reviews</span>
          </h2>
        </motion.div>

        {/* Compact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="relative p-6 pt-10 rounded-2xl bg-white/25 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-lg"
            >
              {/* Logo */}
              <div className="absolute -top-6 left-6 w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center p-2">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.15
                    }}
                    className="text-yellow-400 text-sm"
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              <h4 className="font-semibold text-base mb-2 dark:text-white">
                {item.name}
              </h4>

              <p className="text-sm text-gray-600 dark:text-gray-300 min-h-[60px]">
                {typed[index]}
                <span className="animate-pulse text-cyan-400">|</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;