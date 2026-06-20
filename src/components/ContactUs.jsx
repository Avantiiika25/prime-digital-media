import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const words = ["Connect.", "Create.", "Grow."];

const ContactUs = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Structural dynamic looping typewriter engine
  useEffect(() => {
    const activeWord = words[currentWordIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayedText(activeWord.slice(0, displayedText.length + 1));
        if (displayedText === activeWord) {
          setTimeout(() => setIsDeleting(true), 1500); // Pause on completed word
        }
      } else {
        setDisplayedText(activeWord.slice(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const loopTimeout = setTimeout(handleType, isDeleting ? 40 : typingSpeed);
    return () => clearTimeout(loopTimeout);
  }, [displayedText, isDeleting, currentWordIndex, typingSpeed]);

  // Form Submission Handler Engine via Web3Forms
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Replace with your Web3Forms Access Key if needed
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");

    const loadingToast = toast.loading("Sending your message...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!", { id: loadingToast });
        event.target.reset();
      } else {
        toast.error(data.message || "Something went wrong.", { id: loadingToast });
      }
    } catch (error) {
      toast.error("Network error. Please try again later.", { id: loadingToast });
    }
  };

  return (
    <section id="contact-us" className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black px-4 sm:px-8 lg:px-16 py-20">
      
      {/* Background Cinematic Media Engine */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      >
        <source
          src="https://pixabay.com/videos/download/video-46284_medium.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Ambient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/90 via-[#0f172a]/80 to-black/95 -z-10"></div>

      {/* Glow Rings */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: BRAND INFO & TYPEWRITER */}
        <div className="text-left space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Let’s{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent min-h-[1.2em] inline-block">
              {displayedText}
            </span>
            <span className="text-cyan-400 animate-pulse ml-1">|</span>
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Have a project in mind or looking to scale your brand's digital footprints? Reach out to our team and let's craft something remarkable together.
          </p>

          <div className="space-y-4 pt-4">
            {/* Clickable Mobile Communication Route */}
            <a 
              href="tel:+918652705658" 
              className="flex items-center gap-4 text-zinc-300 hover:text-cyan-400 transition-colors group w-fit"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-cyan-500/30 transition-all">
                <FaPhoneAlt className="text-cyan-400 text-sm" />
              </div>
              <span className="text-sm font-medium tracking-wide">+91 86527 05658</span>
            </a>

            {/* Clickable Direct Mail Transfer Route */}
            <a 
              href="mailto:contact.primedigitalmedia@gmail.com" 
              className="flex items-center gap-4 text-zinc-300 hover:text-cyan-400 transition-colors group w-fit"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-cyan-500/30 transition-all">
                <FaEnvelope className="text-cyan-400 text-sm" />
              </div>
              <span className="text-sm font-medium tracking-wide break-all">
                contact.primedigitalmedia@gmail.com
              </span>
            </a>

            <div className="flex items-center gap-4 text-zinc-300 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <FaMapMarkerAlt className="text-cyan-400 text-sm" />
              </div>
              <span className="text-sm font-medium tracking-wide">Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CONTACT INTERACTION FORM */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-950/60 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        >
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="John Doe"
                className="w-full h-11 bg-zinc-900/50 border border-zinc-800 focus:border-cyan-500/50 rounded-xl px-4 text-white text-sm outline-none transition-all placeholder:text-zinc-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="john@example.com"
                  className="w-full h-11 bg-zinc-900/50 border border-zinc-800 focus:border-cyan-500/50 rounded-xl px-4 text-white text-sm outline-none transition-all placeholder:text-zinc-600"
                />
              </div>
              <div>
                <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="+91 00000 00000"
                  className="w-full h-11 bg-zinc-900/50 border border-zinc-800 focus:border-cyan-500/50 rounded-xl px-4 text-white text-sm outline-none transition-all placeholder:text-zinc-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Message / Requirement</label>
              <textarea 
                name="message" 
                required 
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-cyan-500/50 rounded-xl p-4 text-white text-sm outline-none transition-all placeholder:text-zinc-600 resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-cyan-500/10 mt-2"
            >
              Send Brief
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};


export default ContactUs;