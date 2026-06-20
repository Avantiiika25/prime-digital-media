import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const OurWork = () => {
  const navigate = useNavigate();

  const workData = [
    {
      title: "Web Development",
      video: "https://www.pexels.com/download/video/5585939/#t=0.5",
    },
    {
      title: "Commercial Videography",
      video: "https://www.pexels.com/download/video/8779938/#t=0.5",
    },
    {
      title: "Social Media Marketing",
      video: "https://www.pexels.com/download/video/7801548/#t=0.5",
    },
    {
      title: "Paid Ads Campaigns",
      video: "https://www.pexels.com/download/video/32606765/#t=0.5",
    },
    {
      title: "Search Engine Optimization",
      video: "https://www.pexels.com/download/video/4549682/#t=0.5",
    },
    {
      title: "Creative Campaigns",
      video: "https://www.pexels.com/download/video/29538693/#t=0.5",
    },
    {
      title: "Lead Generation",
      video: "https://www.pexels.com/download/video/36455152/#t=0.5",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 py-8 overflow-hidden bg-white dark:bg-black transition-colors duration-500"
      id="our-work"
    >
      {/* Soft, Animated Light Light-Mesh Gradient Layer */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, 15, 0],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.08)_0%,rgba(59,130,246,0.05)_30%,transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15)_0%,rgba(147,51,234,0.1)_40%,transparent_70%)] pointer-events-none"
      />

      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl relative z-10"
      >
        <h2 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
          <span className="text-gray-900 dark:text-white">Our</span>{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Creative
          </span>{" "}
          <span className="text-purple-500">Work</span>
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Explore our recent digital campaigns, branding strategies and performance-driven marketing projects.
        </motion.p>
      </motion.div>

      {/* Work Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full relative z-10">
        {workData.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-md border border-gray-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 transition-all duration-300"
          >
            {/* Fast Native Loading High-Performance Video Container */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-[220px] object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-95"
            >
              <source src={work.video} type="video/mp4" />
            </video>

            {/* Content Glass Overlay */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.08 + 0.2,
                duration: 0.4,
              }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent backdrop-blur-[2px]"
            >
              <motion.h3
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="text-white text-sm sm:text-base font-semibold tracking-wide"
              >
                {work.title}
              </motion.h3>

              <motion.div
                className="h-[2px] bg-cyan-400 mt-1 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "35%" }}
                transition={{
                  delay: index * 0.08 + 0.4,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Navigation CTA */}
      <motion.button
        whileHover={{
          scale: 1.03,
          boxShadow: "0 4px 20px rgba(6,182,212,0.25)",
        }}
        whileTap={{ scale: 0.97 }}
        onClick={() => navigate("/portfolio")}
        className="mt-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative z-10 shadow-md shadow-cyan-500/10"
      >
        View More Work →
      </motion.button>
    </motion.section>
  );
};

export default OurWork;