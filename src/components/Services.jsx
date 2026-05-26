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
      subtitle:
        "Scale brands through high-performance marketing, advertising and digital growth strategies.",
      video:
        "https://media.istockphoto.com/id/1337605898/video/4k-online-advertising-animated-tag-word-cloud-text-design-animation-typography.mp4",
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
    },

    {
      title: "Political Campaign Management",
      subtitle:
        "Strategic political branding, campaign execution and election growth solutions.",
      video:
        "https://media.istockphoto.com/id/1337605898/video/4k-online-advertising-animated-tag-word-cloud-text-design-animation-typography.mp4",
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
    },

    {
      title: "Spatial Media & Smart Mapping",
      subtitle:
        "Immersive digital experiences for real estate, land management and smart location visualization.",
      video:
        "https://media.istockphoto.com/id/1337605898/video/4k-online-advertising-animated-tag-word-cloud-text-design-animation-typography.mp4",
      services: [
        "360° Virtual Tours",
        "Plot Management CRM",
        "Interactive Maps",
        "Google Street View Integration",
        "Drone Aerial Shoots",
        "Event Coverage",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black py-24 px-5 sm:px-10 lg:px-20 text-white"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-600/10 blur-[160px] rounded-full"></div>

      {/* GRID BG */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >
        {/* TAG */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm backdrop-blur-xl mb-7"
        >
          PRIME DIGITAL MEDIA
        </motion.div>

        {/* TITLE */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {typedText}
          </span>

          <span className="animate-pulse text-cyan-400">|</span>
        </h2>

        {/* DESC */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-6 text-base md:text-lg text-gray-300 leading-relaxed"
        >
          Powerful digital solutions crafted for businesses, political
          campaigns, real estate and modern brands with cinematic visuals,
          premium branding and measurable growth strategies.
        </motion.p>
      </motion.div>

      {/* SERVICE BOXES */}
      <div className="relative z-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-7 mt-20">
        {serviceCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 70,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
            }}
            className="relative group rounded-[28px] overflow-hidden"
          >
            {/* ANIMATED BORDER */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "linear",
              }}
              className="absolute inset-[-2px] rounded-[30px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 opacity-70 blur-sm"
            />

            {/* CARD */}
            <div className="relative h-full rounded-[28px] overflow-hidden border border-white/10 bg-black/80">
              
              {/* FLOATING SHAPES */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: "linear",
                }}
                className="absolute -top-10 -right-10 w-28 h-28 border border-cyan-400/10 rounded-full z-0"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
                className="absolute -bottom-10 -left-10 w-36 h-36 border border-blue-400/10 rounded-[30px] z-0"
              />

              {/* VIDEO */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-1000"
              >
                <source src={category.video} type="video/mp4" />
              </video>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/80 group-hover:bg-black/70 transition duration-500"></div>

              {/* CONTENT */}
              <div className="relative z-10 p-7 flex flex-col h-full backdrop-blur-md bg-white/[0.03]">

                {/* TAG */}
                <div className="inline-flex w-fit items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-cyan-300 text-xs mb-5">
                  Premium Solutions
                </div>

                {/* TITLE */}
                <motion.h3
                  whileHover={{ scale: 1.02 }}
                  className="text-2xl md:text-3xl font-bold leading-tight"
                >
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </motion.h3>

                {/* SUBTITLE */}
                <p className="text-gray-300 mt-4 mb-6 leading-relaxed text-sm md:text-base">
                  {category.subtitle}
                </p>

                {/* SERVICES */}
                <div className="space-y-3 flex-1">
                  {category.services.map((service, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{
                        x: 6,
                      }}
                      className="flex items-center gap-3 text-white/90"
                    >
                      {/* DOT */}
                      <motion.div
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          delay: idx * 0.08,
                        }}
                        className="w-2 h-2 rounded-full bg-cyan-400"
                      />

                      <span className="text-sm">
                        {service}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* BUTTON */}
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 30px rgba(34,211,238,0.25)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-8"
                >
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center justify-center gap-3
                    px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400
                    text-white font-semibold transition-all duration-300 w-full"
                  >
                    Explore Portfolio
                    <span>→</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;