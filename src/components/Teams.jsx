import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const featuredTeam = [
  {
    name: "Vijay Waghchoure",
    role: "Founder & CEO",
    image: assets.m1,
    top: "8%",
    left: "12%",
  },
  {
    name: "Divya Gaykar",
    role: "Head of Digital Marketing",
    image: assets.m3,
    top: "14%",
    right: "14%",
  },
  {
    name: "Om Sonawane",
    role: "Graphic Designer",
    image: assets.m4,
    top: "76%",
    left: "15%",
  },
  {
    name: "Mohit Chaudhry",
    role: "Cinematographer",
    image: assets.m5,
    top: "38%",
    right: "24%",
  },
  {
    name: "Netra Kharde",
    role: "Social Media Manager",
    image: assets.m6,
    top: "74%",
    right: "10%",
  },
  {
    name: "Awantika Gondal",
    role: "Website Development Lead",
    image: assets.m7,
    top: "48%",
    left: "4%",
  },
  {
    name: "Shubhangi Sonawane",
    role: "Video Editor",
    image: assets.m8,
    top: "68%",
    left: "38%",
  },
];

const Teams = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [typedName, setTypedName] = useState("");
  const [typedRole, setTypedRole] = useState("");

  // Cycle through team members smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % featuredTeam.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Clean and smooth medium speed typewriter behavior
  useEffect(() => {
    const member = featuredTeam[active];
    setTypedName("");
    setTypedRole("");

    let currentName = "";
    let nameIdx = 0;
    let roleIdx = 0;

    const nameTyping = setInterval(() => {
      if (nameIdx < member.name.length) {
        currentName += member.name[nameIdx];
        setTypedName(currentName);
        nameIdx++;
      } else {
        clearInterval(nameTyping);
        
        let currentRole = "";
        const roleTyping = setInterval(() => {
          if (roleIdx < member.role.length) {
            currentRole += member.role[roleIdx];
            setTypedRole(currentRole);
            roleIdx++;
          } else {
            clearInterval(roleTyping);
          }
        }, 25);
      }
    }, 35);

    return () => {
      clearInterval(nameTyping);
    };
  }, [active]);

  return (
    <section
      id="team"
      className="relative py-10 px-4 sm:px-12 lg:px-24 overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-white"
    >
      {/* Glow Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Global Header Section */}
      <div className="text-center mb-6 lg:mb-12 max-w-2xl mx-auto relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-bold tracking-tight"
        >
          Meet Our
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent animate-pulse">
            Creative Minds
          </span>
        </motion.h2>
        <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed px-2">
          Delivering innovative digital strategies that create measurable business growth and lasting brand impact.
        </p>
      </div>

      {/* DESKTOP VIEW LAYOUT (lg screens and above) */}
      <div className="hidden lg:block relative h-[580px] max-w-7xl mx-auto z-10">
        {featuredTeam.map((member, index) => (
          <motion.div
            key={`desktop-${index}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: active === index ? 1 : 0.45,
              scale: active === index ? 1.18 : 0.9,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1,
              y: {
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              },
            }}
            whileHover={{
              scale: 1.25,
              rotate: 4,
              opacity: 1
            }}
            className="absolute cursor-pointer"
            style={{
              top: member.top,
              left: member.left,
              right: member.right,
            }}
            onMouseEnter={() => setActive(index)}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 14,
                ease: "linear",
              }}
              className="absolute inset-[-10px] border-2 border-dashed border-cyan-400/40 rounded-full"
            />
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-2xl"
            />
          </motion.div>
        ))}

        {/* Center content container for desktop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-xl w-full px-4">
          <h3 className="text-3xl sm:text-5xl font-bold text-cyan-400 h-[60px] flex items-center justify-center">
            {typedName}
            <span className="animate-pulse text-cyan-400 ml-1">|</span>
          </h3>
          <p className="mt-2 text-lg text-blue-500 font-medium h-[28px]">
            {typedRole}
          </p>
        </div>
      </div>

      {/* MOBILE & TABLET RESPONSIVE VIEW LAYOUT (Below lg breakdown) */}
      <div className="block lg:hidden w-full relative max-w-md mx-auto min-h-[400px] flex flex-col justify-between items-center z-10">
        
        {/* Top Edge Ambient Profile Track */}
        <div className="w-full flex justify-center gap-3 py-1 overflow-x-auto no-scrollbar opacity-60">
          {featuredTeam.slice(0, 4).map((m, idx) => (
            <img 
              key={`top-thumb-${idx}`}
              onClick={() => setActive(idx)}
              src={m.image} 
              className={`w-11 h-11 rounded-full object-cover border-2 transition-all duration-300 ${active === idx ? 'border-cyan-400 scale-110 opacity-100' : 'border-white/10 opacity-50'}`}
            />
          ))}
        </div>

        {/* Dynamic Center Stage Area */}
        <div className="relative my-auto flex flex-col items-center justify-center text-center w-full min-h-[230px]">
          
          {/* Static Orbit lines on back */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-44 h-44 rounded-full border border-dashed border-white/5 animate-spin duration-10000" />
            <div className="absolute w-56 h-56 rounded-full border border-white/[0.02]" />
          </div>

          {/* Center Active Profile Flash In/Out Wrapper */}
          <div className="relative h-28 w-28 mb-4 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-active-img-${active}`}
                initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.7, rotate: 15 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute z-10"
              >
                <div className="absolute inset-[-6px] border border-cyan-400/50 rounded-full animate-ping opacity-30" />
                <img
                  src={featuredTeam[active].image}
                  alt={featuredTeam[active].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-zinc-900 shadow-2xl shadow-cyan-500/20"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Typewriter Text fields to contain layout height shifts */}
          <div className="w-full px-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 min-h-[36px] flex items-center justify-center tracking-wide">
              {typedName}
              <span className="animate-pulse text-cyan-400 ml-0.5">|</span>
            </h3>
            <p className="text-sm sm:text-base text-blue-500 font-medium tracking-wide mt-0.5 min-h-[24px]">
              {typedRole}
            </p>
          </div>
        </div>

        {/* Bottom Edge Ambient Profile Track */}
        <div className="w-full flex justify-center gap-3 py-1 overflow-x-auto no-scrollbar opacity-60">
          {featuredTeam.slice(4).map((m, idx) => {
            const calculatedIdx = idx + 4;
            return (
              <img 
                key={`bottom-thumb-${calculatedIdx}`}
                onClick={() => setActive(calculatedIdx)}
                src={m.image} 
                className={`w-11 h-11 rounded-full object-cover border-2 transition-all duration-300 ${active === calculatedIdx ? 'border-cyan-400 scale-110 opacity-100' : 'border-white/10 opacity-50'}`}
              />
            );
          })}
        </div>
      </div>

      {/* Global Primary Footer Navigation Action */}
      <div className="w-full text-center mt-6 sm:mt-10 relative z-20">
        <button
          onClick={() => navigate("/team")}
          className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/30 hover:scale-105 active:scale-95"
        >
          Meet Our Full Team →
        </button>
      </div>
    </section>
  );
};

export default Teams;