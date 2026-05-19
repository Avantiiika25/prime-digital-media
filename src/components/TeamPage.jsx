import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../assets/assets";

const teamMembers = [
  {
    name: "Vijay Waghchoure",
    role: "Founder & CEO",
    image: assets.m1,
  },
  {
    name: "Rehan Kadri",
    role: "Manager",
    image: assets.m2,
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
    name: "Vedanti Sonawane",
    role: "Back Office Head",
    image: assets.m8,
  },
];

const headingText = "Meet The Minds Behind Innovation";

const TeamPage = () => {
  const [current, setCurrent] = useState(0);
  const [typed, setTyped] = useState("");

  // Auto rotate members
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % teamMembers.length);
    }, 3500);

    return () => clearInterval(slider);
  }, []);

  // Typing effect
  useEffect(() => {
    let i = 0;
    setTyped("");

    const type = setInterval(() => {
      if (i < headingText.length) {
        setTyped(headingText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(type);
      }
    }, 60);

    return () => clearInterval(type);
  }, []);

  const getMember = (offset) =>
    teamMembers[(current + offset + teamMembers.length) % teamMembers.length];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-6">

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

      {/* Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl w-full text-center">

        {/* Typing Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {typed}
          <span className="text-cyan-400 animate-pulse">|</span>
        </motion.h1>

        <p className="text-gray-300 max-w-3xl mx-auto mb-20 text-lg">
          The strategists, creatives and performance experts driving growth,
          innovation and measurable digital success.
        </p>

        {/* Cards */}
        <div className="relative flex justify-center items-center h-[500px]">

          {[ -2, -1, 0, 1, 2 ].map((offset, index) => {
            const member = getMember(offset);
            const isCenter = offset === 0;

            return (
              <AnimatePresence mode="wait" key={member.name}>
                <motion.div
                  initial={{ opacity: 0, y: 80, scale: 0.7 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.75,
                    scale: isCenter ? 1.15 : 0.85,
                    x: offset * 230,
                    y: isCenter ? -10 : 30,
                    rotateY: offset * -8,
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className={`absolute rounded-3xl overflow-hidden backdrop-blur-xl border
                    ${
                      isCenter
                        ? "w-80 h-[420px] border-cyan-400/50"
                        : "w-56 h-[330px] border-white/10"
                    }`}
                >
                  {/* Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-left"
                  >
                    <h3 className="text-white text-xl font-bold">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 text-sm mt-1">
                      {member.role}
                    </p>
                  </motion.div>

                  {/* Center glow */}
                  {isCenter && (
                    <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-3xl animate-pulse"></div>
                  )}
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;