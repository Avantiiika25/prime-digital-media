import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const countersData = [
  { value: 170, label: "Project Completed" },
  { value: 25, label: "Trusted Clients" },
  { value: 1000, label: "Leads Generated" },
  { value: 8, label: "Years Of Experience" }, 
];

const Counter = ({ target, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 2000;
    const increment = target / (duration / 30);

    const update = () => {
      current += increment;

      if (current < target) {
        setCount(Math.floor(current));
        setTimeout(update, 30);
      } else {
        setCount(target);
      }
    };

    update();
  }, [target, start]);

  return <span>{count}+</span>;
};

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative px-4 sm:px-12 lg:px-24 xl:px-40 py-12 overflow-hidden bg-gray-50 dark:bg-black text-gray-900 dark:text-white transition-colors duration-500"
    >
      {/* Glow Background Elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Heading Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        {/* Label Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-400/30 text-cyan-600 dark:text-cyan-300 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase"
        >
          Who We Are
        </motion.div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-tight">
          Driving Digital Growth Through{" "}
          <span className="block sm:inline bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
            Strategy & Innovation
          </span>
        </h2>

        <div className="space-y-3 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Prime Digital Media Solutions is a results-driven digital marketing agency helping
            businesses accelerate growth through high-performance SEO, paid media,
            social campaigns, branding, and conversion-focused digital solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.45 }}
            className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed"
          >
            We combine data, creativity, and technology to create campaigns that
            attract targeted traffic, generate qualified leads, and deliver measurable ROI.
          </motion.p>
        </div>
      </motion.div>

      {/* Modern Card Grid Redesign */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 relative z-10 max-w-6xl mx-auto"
      >
        {countersData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(6,182,212,0.1)",
            }}
            className="group relative rounded-2xl p-6 sm:p-8 text-center bg-white dark:bg-zinc-900/60 border border-gray-200/60 dark:border-zinc-800 backdrop-blur-md shadow-lg transition-all duration-300 flex flex-col justify-center items-center"
          >
            {/* Top right design element dot */}
            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 group-hover:bg-cyan-400 transition-colors" />

            {/* Counter Numeric Display */}
            <h3 className="text-3xl sm:text-5xl font-black mb-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent tracking-tight">
              <Counter target={item.value} start={isInView} />
            </h3>

            {/* Label */}
            <p className="text-gray-600 dark:text-zinc-400 font-medium tracking-wide text-xs sm:text-sm">
              {item.label}
            </p>

            {/* Bottom Glow Bar Indicator */}
            <div className="w-8 h-[2px] bg-gray-200 dark:bg-zinc-800 mt-4 rounded-full group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300" />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Mini Core Mission Segment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="text-center mt-12 relative z-10 border-t border-gray-200/40 dark:border-zinc-900 pt-6"
      >
        <p className="text-sm sm:text-base font-semibold tracking-wider text-gray-500 dark:text-zinc-400 uppercase bg-gradient-to-r from-gray-600 to-gray-400 dark:from-zinc-400 dark:to-zinc-600 bg-clip-text text-transparent">
          Turning Clicks Into Customers &bull; Ideas Into Impact &bull; Traffic Into Growth
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;