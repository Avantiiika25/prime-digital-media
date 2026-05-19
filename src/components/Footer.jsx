import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Footer = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className={`relative mt-24 overflow-hidden border-t transition-all duration-500
      ${
        isDark
          ? "bg-black text-white border-white/10"
          : "bg-white text-gray-900 border-gray-200"
      }`}
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 px-6 sm:px-12 lg:px-24 py-16">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <img
                src={assets.logo}
                alt="Prime Digital"
                className="w-16 rounded-2xl bg-white p-2 shadow-xl"
              />
              <div>
                <h2 className="text-xl font-bold">Prime Digital</h2>
                <p className="text-cyan-400 text-sm tracking-wider">
                  Strategy • Performance • Growth
                </p>
              </div>
            </div>

            <p
              className={`text-sm leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              We help brands scale through digital marketing, political campaign
              strategy, performance advertising, and creative digital solutions.
            </p>

            {/* CTA */}
            <a href="/#contact-us">
  <button className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full font-semibold transition hover:scale-105">
    Let’s Grow Together
  </button>
</a>
          </div>

          {/* COMMERCIAL SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-cyan-400">
              Commercial
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Social Media Marketing",
                "SEO Optimization",
                "Google Ads",
                "Website Development",
                "Lead Generation",
                "Performance Marketing",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:translate-x-2 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* POLITICAL SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-cyan-400">
              Political
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Political Strategy",
                "Election Campaigns",
                "Political PR",
                "Rally Promotion",
                "Candidate Branding",
                "Live Streaming",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:translate-x-2 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-cyan-400">
              Contact
            </h3>

            <div
  className={`space-y-3 text-sm ${
    isDark ? "text-gray-400" : "text-gray-600"
  }`}
>
  <p>
    📍{" "}
    <a
      href="https://maps.google.com/?q=Office+No.7104,+7th+floor,+Roongta+Shopping+Hub,+Kamod+Nagar,+Indira+Nagar,+Nashik"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-cyan-400 transition"
    >
      Office No.7104, 7th floor, Roongta Shopping Hub, near Surya Hotel,
      Kamod Nagar, Indira Nagar, Nashik, Maharashtra 422009
    </a>
  </p>

  <p>
    📞{" "}
    <a href="tel:+918652705658" className="hover:text-cyan-400 transition">
      +91 86527 05658
    </a>
  </p>

  <p>
    📞{" "}
    <a href="tel:+917057256253" className="hover:text-cyan-400 transition">
      +91 70572 56253
    </a>
  </p>

  <p>
    📞{" "}
    <a href="tel:+919923251933" className="hover:text-cyan-400 transition">
      +91 99232 51933
    </a>
  </p>

  <p>
    ✉️{" "}
    <a
      href="mailto:contact.primedigitalmedia@gmail.com"
      className="hover:text-cyan-400 transition"
    >
      contact.primedigitalmedia@gmail.com
    </a>
  </p>
</div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
  {[
    {
      icon: assets.facebook_icon,
      link: "https://www.instagram.com/primedigitalnashik/"
    },
    {
      icon: assets.instagram_icon,
      link: "https://www.facebook.com/PrimeDigitalNashik/"
    },
    {
      icon: assets.linkedin_icon,
      link: "https://in.linkedin.com/in/prime-digital-media-digital-marketing-training-institute-52b8b4286 ",
    },
  ].map((item, i) => (
    <motion.a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 0 }}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 2 + i * 0.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.25,
        y: -8,
        rotate: 8,
        boxShadow: "0 0 18px rgba(6,182,212,0.45)",
      }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-cyan-400/20 flex items-center justify-center cursor-pointer transition-all"
    >
      <img
        src={item.icon}
        className="w-6 object-contain"
        alt="social"
      />
    </motion.a>
  ))}
</div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`my-10 border-t ${
            isDark ? "border-white/10" : "border-gray-200"
          }`}
        ></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className={isDark ? "text-gray-500" : "text-gray-600"}>
            © 2026 Prime Digital Media SolutionsMedia Solutions. All rights reserved.
          </p>

          <p className="text-cyan-400 hover:text-cyan-300 transition cursor-pointer">
            Designed & Developed by Prime Digital Media SolutionsTeam
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;