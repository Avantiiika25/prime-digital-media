import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";

const Services = () => {
  const serviceCategories = [
    {
      title: "Commercial ",
      subtitle: "Scale brands through performance-driven digital strategies",
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
      title: "Political ",
      subtitle: "Strategic campaign solutions for political growth",
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
  ];

  return (
    <section
      id="services"
      className="relative px-6 sm:px-12 lg:px-24 xl:px-40 py-32
      bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 blur-[180px] rounded-full"></div>
                                  
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      ><center>
        <Title
          title="Our Digital Marketing Services"
          desc="Comprehensive digital solutions designed for business growth and political campaign success."
        />
        </center>
      </motion.div>

      {/* Services Cards */}
      <div className="grid lg:grid-cols-2 gap-10 mt-20">
        {serviceCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index === 0 ? -80 : 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            className="relative overflow-hidden rounded-3xl shadow-2xl group"
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
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all"></div>

            {/* Glass Layer */}
            <div className="relative z-10 backdrop-blur-md bg-white/5 border border-white/10 p-10 h-full">

              {/* Heading */}
              <motion.h3
                whileHover={{ scale: 1.03 }}
                className="text-3xl font-bold text-cyan-400"
              >
                {category.title}
              </motion.h3>

              <p className="text-gray-300 mt-3 mb-8">
                {category.subtitle}
              </p>

              {/* Services List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-3 text-white"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span className="text-sm sm:text-base">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(34,211,238,0.3)",
                }}
                className="mt-10 px-8 py-3 rounded-full
                bg-cyan-500 text-white font-semibold"
              >
                Explore More Services
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;