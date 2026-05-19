import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const countersData = [
  { value: 443, label: "Project Completed" },
  { value: 199, label: "Trusted Clients" },
  { value: 259, label: "Leads Generated" },
  { value: 11, label: "Years Of Experience" },
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative px-6 sm:px-12 lg:px-24 xl:px-40 py-32 overflow-hidden
      bg-gray-50 dark:bg-black text-gray-900 dark:text-white"
    >
      {/* Glow Background */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 blur-[160px] rounded-full"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="inline-block px-5 py-2 rounded-full
          bg-cyan-500/10 dark:bg-cyan-500/20
          border border-cyan-400/30
          text-cyan-500 dark:text-cyan-300
          text-sm font-medium mb-6"
        >
          Who We Are
        </motion.div>

        <h2 className="text-4xl sm:text-6xl font-bold leading-tight mb-8">
          Driving Digital Growth Through{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
            Strategy & Innovation
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          Prime Digital Media Solutionsis a results-driven digital marketing agency helping
          businesses accelerate growth through high-performance SEO, paid media,
          social campaigns, branding and conversion-focused digital solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-500 dark:text-gray-400 mt-6 leading-relaxed"
        >
          We combine data, creativity and technology to create campaigns that
          attract traffic, generate qualified leads and deliver measurable ROI.
        </motion.p>
      </motion.div>

      {/* Counters */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-24 relative z-10"
      >
        {countersData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -12,
              scale: 1.03,
              boxShadow: "0 0 35px rgba(34,211,238,0.15)",
            }}
            className="group rounded-3xl p-8 text-center
            bg-white/70 dark:bg-white/5
            backdrop-blur-xl
            border border-gray-200 dark:border-white/10
            shadow-xl transition-all duration-500"
          >
            {/* Counter */}
            <h3 className="text-4xl sm:text-5xl font-bold mb-3
            bg-gradient-to-r from-cyan-400 to-blue-500
            bg-clip-text text-transparent">
              <Counter target={item.value} start={isInView} />
            </h3>

            {/* Label */}
            <p className="text-gray-600 dark:text-gray-300 tracking-wide text-sm sm:text-base">
              {item.label}
            </p>

            {/* Animated Line */}
            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: 60 }}
              className="h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center mt-20 relative z-10"
      >
        <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
          Turning Clicks Into Customers • Ideas Into Impact • Traffic Into Growth
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;