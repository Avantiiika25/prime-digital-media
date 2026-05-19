import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ServicesCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      ref={divRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 
      shadow-md hover:shadow-xl transition-all duration-300 group bg-white dark:bg-gray-900"
    >
      {/* 🔵 Soft Blue Glow */}
      <div
        className={`pointer-events-none absolute w-[250px] h-[250px] rounded-full blur-2xl 
        bg-blue-400/30 transition-opacity duration-500 ${
          visible ? "opacity-60" : "opacity-0"
        }`}
        style={{
          top: position.y - 125,
          left: position.x - 125,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 flex items-start gap-5 p-6 sm:p-7 transition-all duration-300 group-hover:scale-[1.02]">
        
        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-blue-50 dark:bg-gray-800 group-hover:bg-blue-100 transition">
          <img src={service.icon} alt="" className="w-7 h-7 object-contain" />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {service.title}
          </h3>
          <p className="text-sm mt-2 text-gray-500 dark:text-gray-300 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-[2px] w-0 group-hover:w-full bg-blue-500 transition-all duration-500" />
    </motion.div>
  );
};

export default ServicesCard;