import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const words = ["Connect.", "Create.", "Grow."];

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      if (i < words[wordIndex].length) {
        setTypedText(words[wordIndex].slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);

        setTimeout(() => {
          setTypedText("");
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 1500);
      }
    }, 120);

    return () => clearInterval(typing);
  }, [wordIndex]);

  // Form Submit
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "7c7b8f07-cc38-42e7-9386-5622569fb26c"
    );

    formData.append("subject", "New Prime Digital Inquiry");
    formData.append("from_name", "Prime Digital Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message Sent Successfully 🚀");
        event.target.reset();
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact-us"
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 sm:px-12 lg:px-24 py-24"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://player.vimeo.com/external/371433846.sd.mp4?s=2369408f53ec34cbf4f55e6b5c6c6a17f65d4c16&profile_id=139&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 blur-[160px] rounded-full"></div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-14 max-w-7xl w-full items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 tracking-[4px] uppercase font-semibold">
            Contact Prime Digital
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 leading-tight">
            Let’s{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {typedText}
            </span>
            <span className="text-cyan-400 animate-pulse">|</span>
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-xl">
            Partner with Prime Digital Media Solutions to accelerate your
            brand visibility, lead generation, and measurable business growth.
          </p>

          <div className="mt-10 space-y-4 text-gray-300">
            <p>📍 Nashik, Maharashtra</p>
            <p>📞 +91 86527 05658</p>
            <p>📞 +91 70572 56253</p>
            <p>📞 +91 99232 51933</p>
            <p>✉ contact.primedigitalmedia@gmail.com</p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            Send Us Your Inquiry
          </h2>

          <p className="text-gray-300 mb-8">
            We’ll get back to you quickly.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:border-cyan-400"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:border-cyan-400"
            />
          </div>

          <textarea
            name="message"
            rows="5"
            required
            placeholder="Tell us about your project..."
            className="w-full mt-4 p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:border-cyan-400"
          ></textarea>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 30px rgba(34,211,238,0.4)",
            }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            disabled={loading}
            className="w-full mt-6 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all"
          >
            {loading ? "Sending..." : "Submit Inquiry"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;