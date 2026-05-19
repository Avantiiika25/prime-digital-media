import React from "react";
import { company_logos } from "../assets/assets";
import { motion } from "framer-motion";

const TrustedBy = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white">

      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl font-semibold mb-10 text-center"
      >
        Trusted by Leading Companies
      </motion.h3>

      {/* Logos Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.08 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-5xl"
      >
        {company_logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="group relative flex items-center justify-center p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl"></div>

            {/* Logo */}
            <img
              src={logo}
              alt="company logo"
              className="relative z-10 h-10 sm:h-12 md:h-14 object-contain transition duration-300 group-hover:scale-110"
            />

            {/* Tooltip */}
            <div className="absolute bottom-[-30px] opacity-0 group-hover:opacity-100 transition text-xs bg-black text-white px-2 py-1 rounded">
              Partner Brand
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrustedBy;