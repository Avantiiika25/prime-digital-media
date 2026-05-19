import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolioData = [
  {
    category: "",
    title: "Logo Designing",
    client: "Multiple Business Brands",
    desc: "Crafted modern brand identities that establish trust and strong market positioning.",
    stats: "50+ Logos Delivered",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200",
  },
  {
    category: "Local Business Growth",
    title: "Google Business & Local Listings",
    client: "Rayate Science Academy",
    desc: "Optimized Google Business Profile, Justdial, IndiaMART & local directories for higher visibility.",
    stats: "4X Local Search Visibility",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
  },
  {
    category: "Video Production",
    title: "Commercial Videography",
    client: "Speedwell Edusports",
    desc: "High-converting promotional ad films for brand awareness and lead generation.",
    stats: "100K+ Reach",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200",
  },
  {
    category: "Social Media Marketing",
    title: "Growth Campaigns",
    client: "Deshdoot",
    desc: "Built engaging social campaigns with content strategy and audience targeting.",
    stats: "300% Engagement Growth",
    image:
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1200",
  },
  {
    category: "Paid Advertising",
    title: "Google & Meta Ads",
    client: "PMB Education",
    desc: "Lead generation funnels through Google Ads and Meta campaigns.",
    stats: "5.2X ROAS",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200",
  },
  {
    category: "Client Success",
    title: "Digital Growth Strategy",
    client: "Platinum Hospital",
    desc: "Integrated digital strategy combining SEO, ads, and local optimization.",
    stats: "250% Lead Growth",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200",
  },
];

const categories = [
  "All",
  "Brand Identity",
  "Local Business Growth",
  "Video Production",
  "Social Media Marketing",
  "Paid Advertising",
];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === active);

  return (
    <section
      id="portfolio"
      className="relative min-h-screen py-28 px-6 sm:px-12 lg:px-24 bg-white dark:bg-black overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 blur-[140px] rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
        >
          Our <span className="text-cyan-400">Work</span>
        </motion.h1>

        <p className="mt-5 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Showcasing impactful branding, digital campaigns and growth-focused
          solutions delivered for visionary businesses.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-3 rounded-full transition-all ${
              active === cat
                ? "bg-cyan-500 text-white"
                : "bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filtered.map((item, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              className="group rounded-3xl overflow-hidden bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

                <div className="absolute top-5 left-5 bg-cyan-500 text-white px-4 py-2 rounded-full text-sm">
                  {item.category}
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-cyan-400 mt-1">{item.client}</p>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>

                <div className="mt-6 text-lg font-semibold text-blue-500">
                  {item.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;