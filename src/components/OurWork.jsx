import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const OurWork = () => {
  const navigate = useNavigate();

  const workData = [
    {
      title: "Web Development",
      video: "https://www.pexels.com/download/video/5585939/",
    },
    {
      title: "Commercial Videography",
      video: "https://www.pexels.com/download/video/8779938/",
    },
    {
      title: "Social Media Marketing",
      video: "https://www.pexels.com/download/video/7801548/",
    },
    {
      title: "Paid Ads Campaigns",
      video: "https://www.pexels.com/download/video/32606765/",
    },
    {
      title: "Search Engine Optimization",
      video: "https://www.pexels.com/download/video/4549682/",
    },
    {
      title: "Creative Campaigns",
      video: "https://www.pexels.com/download/video/29538693/",
    },
    {
      title: "Lead Generation",
      video: "https://www.pexels.com/download/video/36455152/",
    },
    
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-12 px-4 sm:px-12 lg:px-24 xl:px-40 py-28 bg-white dark:bg-black"
      id="our-work"
    >
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-cyan-500">Our</span>{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Creative
          </span>{" "}
          <span className="text-purple-500">Work</span>
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-5 text-lg text-gray-600 dark:text-gray-400"
        >
          Explore our recent digital campaigns, branding strategies and
          performance-driven marketing projects.
        </motion.p>
      </motion.div>

      {/* Work Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 w-full">
        {workData.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="relative group overflow-hidden rounded-3xl cursor-pointer shadow-2xl"
          >
            {/* Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110"
            >
              <source src={work.video} type="video/mp4" />
            </video>

            {/* Glass Overlay */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              className="absolute bottom-0 left-0 right-0 p-5
              bg-gradient-to-t from-black/90 via-black/40 to-transparent
              backdrop-blur-md"
            >
              <motion.h3
                whileHover={{ x: 8 }}
                className="text-white text-lg font-semibold tracking-wide"
              >
                {work.title}
              </motion.h3>

              <motion.div
                className="h-[2px] bg-cyan-400 mt-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "45%" }}
                transition={{
                  delay: index * 0.2 + 0.4,
                  duration: 0.8,
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.button
        whileHover={{
          scale: 1.07,
          boxShadow: "0 0 30px rgba(6,182,212,0.35)",
        }}
        whileTap={{ scale: 0.96 }}
        onClick={() => navigate("/portfolio")}
        className="mt-8 bg-cyan-500 hover:bg-cyan-400 text-white px-10 py-4 rounded-full font-semibold transition-all"
      >
        View More Work →
      </motion.button>
    </motion.section>
  );
};

export default OurWork;