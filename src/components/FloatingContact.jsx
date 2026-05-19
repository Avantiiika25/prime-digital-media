import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);

      if ("speechSynthesis" in window) {
        const msg = new SpeechSynthesisUtterance(
          "Hello, welcome to Prime Digital Media."
        );
        msg.rate = 0.95;
        msg.pitch = 1.1;
        window.speechSynthesis.speak(msg);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-20 right-0 w-[280px] rounded-3xl bg-black/80 backdrop-blur-2xl border border-cyan-400/20 shadow-2xl overflow-hidden"
          >
            <div className="p-4">

              {/* Assistant Header */}
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-2xl"
                >
                  👩🏻‍💼
                </motion.div>

                <div>
                  <h3 className="text-white font-semibold text-sm">
                    Prime Assistant
                  </h3>
                  <p className="text-cyan-400 text-xs">
                    Online now
                  </p>
                </div>
              </div>

              {/* Message */}
              <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                👋 Hi there!  
                Need help growing your business online?
              </p>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">
                <a
                  href="https://wa.me/918652705658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-medium text-center transition"
                >
                  Chat
                </a>

                <a
                  href="mailto:contact.primedigitalmedia@gmail.com"
                  className="w-10 flex items-center justify-center rounded-xl border border-white/10 text-white"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/918652705658"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white text-3xl shadow-xl"
      >
        <FaWhatsapp />

        {/* Ping */}
        <span className="absolute inset-0 rounded-full border border-cyan-300 animate-ping opacity-30"></span>
      </motion.a>
    </div>
  );
};

export default FloatingContact;