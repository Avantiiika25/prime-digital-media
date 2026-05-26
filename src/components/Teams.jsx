import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const featuredTeam = [
  {
    name: "Vijay Waghchoure",
    role: "Founder & CEO",
    image: assets.m1,
    top: "8%",
    left: "8%",
  },
  {
    name: "Rehan Kadri",
    role: "Manager",
    image: assets.m2,
    top: "42%",
    left: "12%",
  },
  {
    name: "Divya Gaykar",
    role: "Head of Digital Marketing",
    image: assets.m3,
    top: "10%",
    right: "10%",
  },
  {
    name: "Om Sonawane",
    role: "Graphic Designer",
    image: assets.m4,
    top: "72%",
    left: "22%",
  },
  {
    name: "Mohit Chaudhry",
    role: "Cinematographer",
    image: assets.m5,
    top: "32%",
    right: "22%",
  },
  {
    name: "Netra Kharde",
    role: "Social Media Manager",
    image: assets.m6,
    top: "72%",
    right: "12%", 
  },
  {
    name: "Awantika Gondal",
    role: "Website Development Lead",
    image: assets.m7,
    top: "50%",
    right: "5%",
  },
  {
    name: "Vedanti Sonawane",
    role: "Back Office Head",
    image: assets.m8,
    top: "20%",
    left: "25%",
  },
  {
    name: "Shubhangi Sonawane",
    role: "Video Editor",
    image: assets.m8,
    top: "20%",
    left: "25%",
  },
];

const Teams = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [typedName, setTypedName] = useState("");
  const [typedRole, setTypedRole] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % featuredTeam.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const member = featuredTeam[active];

    setTypedName("");
    setTypedRole("");

    let i = 0;

    const nameTyping = setInterval(() => {
      if (i < member.name.length) {
        setTypedName(member.name.slice(0, i + 1));
        i++;
      } else {
        clearInterval(nameTyping);

        let j = 0;

        const roleTyping = setInterval(() => {
          if (j < member.role.length) {
            setTypedRole(member.role.slice(0, j + 1));
            j++;
          } else {
            clearInterval(roleTyping);
          }
        }, 35);
      }
    }, 55);

    return () => clearInterval(nameTyping);
  }, [active]);

  return (
    <section
      id="team"
      className="relative py-28 px-6 sm:px-12 lg:px-24 overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-white"
    >
      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl font-bold"
        >
          Meet Our
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent animate-pulse">
            Creative Minds
          </span>
        </motion.h2>
      </div>

      <div className="relative h-[650px] max-w-7xl mx-auto">
        {/* Floating Members */}
        {featuredTeam.map((member, index) => (
          <motion.div
            key={index}
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
              },
            }}
            whileHover={{
              scale: 1.25,
              rotate: 4,
            }}
            className="absolute cursor-pointer"
            style={{
              top: member.top,
              left: member.left,
              right: member.right,
            }}
            onMouseEnter={() => setActive(index)}
          >
            {/* Rotating Ring */}
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
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-2xl"
            />
          </motion.div>
        ))}

        {/* Center Info */}
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-xl"
        >
          <h3 className="text-3xl sm:text-5xl font-bold text-cyan-400">
            {typedName}
            <span className="animate-pulse">|</span>
          </h3>

          <p className="mt-4 text-lg text-blue-500 font-medium">
            {typedRole}
          </p>

          <p className="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
            Delivering innovative digital strategies that create measurable
            business growth and lasting brand impact.
          </p>

          <button
            onClick={() => navigate("/team")}
            className="mt-8 px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition hover:scale-105"
          >
            Meet Our Full Team →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Teams;