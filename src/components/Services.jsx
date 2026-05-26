import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Title from "./Title";

const Services = () => {
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
      className="relative px-6 sm:px-12 lg:px-24 xl:px-40 py-32
      bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 blur-[180px] rounded-full"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <Title
            title="Our Premium Digital Services"
            desc="Powerful digital solutions crafted for businesses, political campaigns, real estate and modern brands."
          />
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">
        {serviceCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            className="relative overflow-hidden rounded-[32px] group border border-white/10"
          >
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            >
              <source src={category.video} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-all duration-500"></div>

            {/* Glow Border */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent blur-2xl"></div>

            {/* Content */}
            <div className="relative z-10 backdrop-blur-md bg-white/5 p-10 h-full flex flex-col">

              {/* Small Tag */}
              <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-cyan-300 text-sm mb-6">
                Premium Services
              </div>

              {/* Title */}
              <motion.h3
                whileHover={{ scale: 1.03 }}
                className="text-3xl font-bold text-white leading-tight"
              >
                {category.title}
              </motion.h3>

              {/* Subtitle */}
              <p className="text-gray-300 mt-4 mb-8 leading-relaxed">
                {category.subtitle}
              </p>

              {/* Services */}
              <div className="grid grid-cols-1 gap-4 flex-1">
                {category.services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>

                    <span className="text-sm sm:text-base">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(34,211,238,0.3)",
                }}
                whileTap={{ scale: 0.96 }}
                className="mt-10"
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-3
                  px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400
                  text-white font-semibold transition-all duration-300 w-full"
                >
                  Explore Portfolio
                  <span>→</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;