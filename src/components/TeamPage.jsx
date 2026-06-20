import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../assets/assets";

const teamMembers = [
  {
    name: "Vijay Waghchoure",
    role: "Founder & CEO",
    image: assets.m1,
  },
  {
    name: "Divya Gaykar",
    role: "Digital Marketing Head",
    image: assets.m3,
  },
  {
    name: "Om Sonawane",
    role: "Graphic Designer",
    image: assets.m4,
  },
  {
    name: "Awantika Gondal",
    role: "Web Development Lead",
    image: assets.m7,
  },
  {
    name: "Mohit Chaudhari",
    role: "Cinematographer",
    image: assets.m5,
  },
  {
    name: "Netra Kharde",
    role: "Social Media Manager",
    image: assets.m6,
  },
  {
    name: "Shubhangi Sonawane",
    role: "Video Editor",
    image: assets.m8,
  },
];

const phrase1 = "Meet The Minds ";
const phrase2 = "Behind Innovation";

const TeamPage = () => {
  const [current, setCurrent] = useState(0);
  const [typedPart1, setTypedPart1] = useState("");
  const [typedPart2, setTypedPart2] = useState("");
  const dragRef = useRef(null);

  // Auto rotate members
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % teamMembers.length);
    }, 3500);

    return () => clearInterval(slider);
  }, []);

  // Strict structural dual-color sequential typing implementation
  useEffect(() => {
    let i = 0;
    let j = 0;
    setTypedPart1("");
    setTypedPart2("");

    const type1 = setInterval(() => {
      if (i < phrase1.length) {
        setTypedPart1(phrase1.slice(0, i + 1));
        i++;
      } else {
        clearInterval(type1);
        const type2 = setInterval(() => {
          if (j < phrase2.length) {
            setTypedPart2(phrase2.slice(0, j + 1));
            j++;
          } else {
            clearInterval(type2);
          }
        }, 50);
      }
    }, 60);

    return () => clearInterval(type1);
  }, []);

  const getMember = (offset) =>
    teamMembers[(current + offset + teamMembers.length) % teamMembers.length];

  // Mobile Swipe Gesture Handler
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      setCurrent((prev) => (prev + 1) % teamMembers.length);
    } else if (info.offset.x > swipeThreshold) {
      setCurrent((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex flex-col items-center justify-start px-4 sm:px-6 pt-24 md:pt-20 pb-10">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      >
        <source
          src="https://pixabay.com/videos/download/video-46284_medium.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/80 via-[#0f172a]/70 to-black/90"></div>

      {/* Glow Rings */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl w-full text-center flex flex-col flex-grow justify-center">

        {/* Dynamic Split Typing Heading */}
        <div className="mt-4 mb-4 md:mb-8">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span>{typedPart1}</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              {typedPart2}
            </span>
            <span className="text-cyan-400 animate-pulse ml-0.5">|</span>
          </motion.h1>

          <p className="text-gray-300 max-w-3xl mx-auto mb-10 md:mb-16 text-sm sm:text-base md:text-lg px-4">
            The strategists, creatives and performance experts driving growth,
            innovation and measurable digital success.
          </p>
        </div>

        {/* DESKTOP 3D COMPACT CAROUSEL VIEW */}
        <div className="hidden md:flex relative justify-center items-center h-[460px] overflow-visible">
          {[ -2, -1, 0, 1, 2 ].map((offset) => {
            const member = getMember(offset);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={`desktop-card-${member.name}-${offset}`}
                initial={{ opacity: 0, y: 80, scale: 0.7 }}
                animate={{
                  opacity: isCenter ? 1 : 0.75,
                  scale: isCenter ? 1.15 : 0.85,
                  x: offset * 230,
                  y: isCenter ? -10 : 30,
                  rotateY: offset * -8,
                  zIndex: 10 - Math.abs(offset),
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                onClick={() => setCurrent((prev) => (prev + offset + teamMembers.length) % teamMembers.length)}
                className={`absolute rounded-3xl overflow-hidden backdrop-blur-xl border cursor-pointer group shadow-2xl transition-all duration-300 ${
                  isCenter
                    ? "w-80 h-[420px] border-cyan-400/50 shadow-cyan-500/10"
                    : "w-56 h-[330px] border-white/10 bg-zinc-950/20"
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <h3 className="text-white text-xl font-bold tracking-wide group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 text-sm mt-1 font-medium">
                    {member.role}
                  </p>
                </div>

                {isCenter && (
                  <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-3xl animate-pulse pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* RESPONSIVE INTERACTIVE MOBILE 3D SWIPE TRACK */}
        <div 
          ref={dragRef}
          className="flex md:hidden relative justify-center items-center h-[340px] mt-2 overflow-visible touch-none select-none"
        >
          {[-1, 0, 1].map((offset) => {
            const member = getMember(offset);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={`mobile-swipe-card-${member.name}-${offset}`}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                  opacity: isCenter ? 1 : 0.45,
                  scale: isCenter ? 1 : 0.78,
                  x: offset * 130, 
                  y: isCenter ? -8 : 15,
                  rotateZ: offset * 6,
                  zIndex: 5 - Math.abs(offset),
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={handleDragEnd}
                onClick={() => {
                  if (!isCenter) {
                    setCurrent((prev) => (prev + offset + teamMembers.length) % teamMembers.length);
                  }
                }}
                className={`absolute rounded-2xl overflow-hidden backdrop-blur-md border shadow-xl ${
                  isCenter
                    ? "w-56 h-[285px] border-cyan-400/60 shadow-cyan-500/10"
                    : "w-48 h-[245px] border-white/5 bg-zinc-950/50 pointer-events-none"
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-black via-black/90 to-transparent">
                  <h3 className="text-white text-base font-bold truncate">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 text-xs mt-0.5 font-medium truncate">
                    {member.role}
                  </p>
                </div>

                {isCenter && (
                  <div className="absolute inset-0 border border-cyan-400/40 rounded-2xl pointer-events-none animate-pulse" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Global Track Indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {teamMembers.map((_, idx) => (
            <button
              key={`dot-navigation-${idx}`}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === idx ? "w-5 bg-cyan-400" : "w-1.5 bg-zinc-700"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamPage;