import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);

      // VOICE
      if ("speechSynthesis" in window) {
        const msg = new SpeechSynthesisUtterance(
          "Hello from Prime Digital."
        );

        msg.rate = 1;
        msg.pitch = 1.1;
        msg.volume = 0.7;

        window.speechSynthesis.speak(msg);
      }
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-3 right-3 z-[9999] flex flex-col items-end">

      {/* SMALL CHAT POPUP */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-2 relative"
          >
            <div className="bg-black/85 backdrop-blur-2xl border border-cyan-400/10 rounded-xl px-2.5 py-1.5 shadow-2xl min-w-[180px]">

              {/* TOP */}
              <div className="flex items-center gap-1.5">

                {/* AVATAR */}
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-xs"
                >
                  👩🏻
                </motion.div>

                {/* TEXT */}
                <div className="flex-1">
                  <h4 className="text-white text-[10px] font-semibold leading-tight">
                    Prime Assistant
                  </h4>

                  <p className="text-gray-300 text-[9px] leading-tight mt-0.5">
                    👋 Need business help?
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex items-center gap-1.5 mt-2">

                {/* Updated with WhatsApp contact number */}
                <a
                  href="https://wa.me/917057256253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-7 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition flex items-center justify-center gap-1 text-white text-[10px] font-medium"
                >
                  <FaWhatsapp className="text-xs" />
                  WhatsApp
                </a>

                {/* Kept explicit email target */}
                <a
                  href="mailto:contact.primedigitalmedia@gmail.com"
                  className="w-7 h-7 rounded-lg border border-white/10 hover:bg-white/10 transition flex items-center justify-center text-white"
                >
                  <FaEnvelope className="text-xs" />
                </a>
              </div>
            </div>

            {/* SMALL POINTER */}
            <div className="absolute -bottom-1 right-4 w-2.5 h-2.5 bg-black rotate-45 border-r border-b border-cyan-400/10"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING BUTTON (Updated to Call Icon and Call Number) */}
      <motion.a
        href="tel:+918652705658"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.2,
        }}
        className="relative w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white text-xl shadow-[0_0_20px_rgba(34,211,238,0.3)]"
      >
        <FaPhoneAlt className="text-base" />

        {/* PING */}
        <span className="absolute inset-0 rounded-full border border-cyan-300 animate-ping opacity-20"></span>
      </motion.a>
    </div>
  );
};

export default FloatingContact;