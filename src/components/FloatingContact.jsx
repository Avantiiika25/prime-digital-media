import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

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
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end">

      {/* SMALL CHAT POPUP */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 relative"
          >
            <div className="bg-black/85 backdrop-blur-2xl border border-cyan-400/10 rounded-2xl px-3 py-2 shadow-2xl min-w-[220px]">

              {/* TOP */}
              <div className="flex items-center gap-2">

                {/* AVATAR */}
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-sm"
                >
                  👩🏻
                </motion.div>

                {/* TEXT */}
                <div className="flex-1">
                  <h4 className="text-white text-xs font-semibold">
                    Prime Assistant
                  </h4>

                  <p className="text-gray-300 text-[11px] leading-tight mt-0.5">
                    👋 Need help with your business?
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex items-center gap-2 mt-3">

                <a
                  href="https://wa.me/918652705658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-9 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition flex items-center justify-center gap-2 text-white text-xs font-medium"
                >
                  <FaWhatsapp className="text-sm" />
                  WhatsApp
                </a>

                <a
                  href="mailto:contact.primedigitalmedia@gmail.com"
                  className="w-9 h-9 rounded-xl border border-white/10 hover:bg-white/10 transition flex items-center justify-center text-white"
                >
                  <FaEnvelope className="text-sm" />
                </a>
              </div>
            </div>

            {/* SMALL POINTER */}
            <div className="absolute -bottom-2 right-5 w-4 h-4 bg-black rotate-45 border-r border-b border-cyan-400/10"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING BUTTON */}
      <motion.a
        href="https://wa.me/918652705658"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.2,
        }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white text-2xl shadow-[0_0_30px_rgba(34,211,238,0.35)]"
      >
        <FaWhatsapp />

        {/* PING */}
        <span className="absolute inset-0 rounded-full border border-cyan-300 animate-ping opacity-20"></span>
      </motion.a>
    </div>
  );
};

export default FloatingContact;