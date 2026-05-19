import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaChartLine,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBullseye />,
    title: "Result Driven Strategy",
    desc: "Every campaign is built with measurable goals, precise targeting and growth-focused execution.",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Marketing",
    desc: "We optimize ads, funnels and digital campaigns to maximize ROI and lead conversions.",
  },
  {
    icon: <FaUsers />,
    title: "Client-Centric Approach",
    desc: "Transparent communication, creative collaboration and dedicated support at every step.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Brand Growth",
    desc: "Helping businesses scale visibility, engagement and revenue through digital innovation.",
  },
];

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "25+", label: "Happy Clients" },
  { number: "95%", label: "Client Retention" },
  { number: "24/7", label: "Support" },
];

const TrustedBy = () => {
  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            About Prime Digital
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Digital Growth Engine For Modern Brands
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Prime Digital Media empowers businesses with strategic marketing,
            performance campaigns, creative branding and cutting-edge digital
            solutions that turn visibility into measurable business growth.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center hover:border-cyan-400/40 transition"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {stat.number}
              </h3>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400/40 transition-all"
            >
              <div className="text-cyan-400 text-3xl mb-5 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;