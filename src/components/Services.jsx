import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  const [typedText, setTypedText] = useState("");
  const headingText = "Our Premium Digital Services";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < headingText.length) {
        setTypedText(headingText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 65);
    return () => clearInterval(interval);
  }, []);

  const serviceCategories = [
    {
      title: "Commercial Growth Solutions",
      subtitle: "Scale brands through high-performance marketing, advertising and digital growth strategies.",
      video: "https://www.pexels.com/download/video/7947438/",
      accentColor: "from-cyan-500 to-cyan-400",
      badgeBg: "bg-cyan-500",
      services: [
        "Social Media Marketing",
        "Search Engine Optimization",
        "Google Ads",
        "Website Design & Development",
        "Content Marketing",
        "Influencer Marketing",
        "Performance Marketing",
        "Lead Generation",
        "Meta Ads",
        "Google My Business Optimization",
      ],
      redirectToExternal: false,
      path: "/portfolio"
    },
    {
      title: "Political Campaign Management",
      subtitle: "Strategic political branding, campaign execution and election growth solutions.",
      video: "https://www.pexels.com/download/video/7660169/",
      accentColor: "from-blue-600 to-cyan-500",
      badgeBg: "bg-blue-600",
      services: [
        "Political Campaign Strategy",
        "Political PR Management",
        "Election Campaign Management",
        "Political Social Media Management",
        "Rally & Event Promotion",
        "Political Graphic Design",
        "Candidate Personal Branding",
        "Campaign Speech Content Writing",
        "Political Digital Strategy",
        "Political Ad Campaign Management",
        "Live Streaming",
      ],
      redirectToExternal: false,
      path: "/portfolio"
    },
    {
      title: "Spatial Media & Smart Mapping",
      subtitle: "Immersive digital experiences for real estate, land management and smart location visualization.",
      video: "https://www.pexels.com/download/video/11487761/",
      accentColor: "from-blue-500 to-blue-600",
      badgeBg: "bg-cyan-600",
      services: [
        "360° Virtual Tours",
        "Plot Management CRM",
        "Interactive Maps",
        "Google Street View Integration",
        "Drone Aerial Shoots",
        "Event Coverage",
      ],
      redirectToExternal: true,
      path: "https://sivaraa360studio.com/"
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-black py-24 px-5 sm:px-10 lg:px-20 text-white">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* HEADING */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >
        <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm tracking-wider backdrop-blur-xl mb-6">
          PRIME DIGITAL MEDIA
        </div>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {typedText}
          </span>
          <span className="animate-pulse text-cyan-400">|</span>
        </h2>
        <p className="max-w-3xl mx-auto mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
          Powerful digital solutions crafted for businesses, political campaigns, real estate and modern brands with cinematic visuals.
        </p>
      </motion.div>

      {/* SERVICE CARDS GRID */}
      <div className="relative z-10 grid md:grid-cols-2 xl:grid-cols-3 gap-12 mt-28 max-w-7xl mx-auto">
        {serviceCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="relative flex flex-col pt-8"
          >
            {/* FLOATING TOP SPEECH BUBBLE BADGE */}
            <div className="absolute top-0 left-8 z-20 flex flex-col items-center">
              <div className={`px-5 py-2.5 rounded-2xl ${category.badgeBg} text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-black/50 flex items-center justify-center gap-2`}>
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                Premium Suite
              </div>
              <div className={`w-3 h-3 ${category.badgeBg} rotate-45 -mt-1.5 ml-4 rounded-sm`} />
            </div>

            {/* MAIN CONTAINER BODY */}
            <div className="relative flex-1 flex flex-col rounded-3xl overflow-hidden border border-cyan-500/30 bg-zinc-950 shadow-2xl min-h-[580px] group">
              
              {/* BACKGROUND INTEGRATED VIDEO */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-60 group-hover:scale-105 transition duration-1000"
              >
                <source src={category.video} type="video/mp4" />
              </video>

              {/* GRADIENT OVERLAY ON TOP OF VIDEO */}
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-950/75 to-zinc-950/90 transition duration-500"></div>

              {/* CONTENT INNER WRAPPER */}
              <div className="relative z-10 p-8 flex flex-col flex-1">
                
                {/* TITLE */}
                <h3 className="text-2xl font-bold mt-2 text-white group-hover:text-cyan-300 transition duration-300">
                  {category.title}
                </h3>

                {/* SUBTITLE */}
                <p className="text-gray-300 mt-3 mb-6 text-sm leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {category.subtitle}
                </p>

                {/* ITEM DETAILED SERVICES LIST */}
                <div className="space-y-3 flex-1">
                  {category.services.map((service, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-gray-200 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                    >
                      {/* ACCENT COLOR BULLET DOT */}
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_#22d3ee]" />
                      <span className="text-sm tracking-wide font-medium">{service}</span>
                    </motion.div>
                  ))}
                </div>

                {/* FOOTER CTA ACTION ACTION BUTTON */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-8">
                  {category.redirectToExternal ? (
                    <a
                      href={category.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/40 hover:border-cyan-400 bg-cyan-950/60 hover:bg-cyan-500 text-cyan-400 hover:text-white text-sm font-semibold transition-all duration-300 w-full shadow-inner backdrop-blur-sm"
                    >
                      Explore Portfolio
                      <span>→</span>
                    </a>
                  ) : (
                    <Link
                      to={category.path}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/40 hover:border-cyan-400 bg-cyan-950/60 hover:bg-cyan-500 text-cyan-400 hover:text-white text-sm font-semibold transition-all duration-300 w-full shadow-inner backdrop-blur-sm"
                    >
                      Explore Portfolio
                      <span>→</span>
                    </Link>
                  )}
                </motion.div>
              </div>

              {/* BASE COLOURED ACCENT BAR */}
              <div className={`h-[8px] w-full bg-gradient-to-r ${category.accentColor}`} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;