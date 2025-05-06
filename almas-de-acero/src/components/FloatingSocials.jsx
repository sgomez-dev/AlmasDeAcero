import { useState } from "react";
import { FaInstagram, FaYoutube, FaTiktok, FaShareAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingSocials = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socials = [
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/almas_de_aceroo",
      color: "bg-pink-500",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@Almas_de_acero",
      color: "bg-red-600",
    },
    {
      icon: <FaTiktok />,
      link: "https://www.tiktok.com/@almas_de_aceroo",
      color: "bg-black",
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-2">
      <AnimatePresence>
        {isOpen &&
          socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`flex items-center justify-center w-12 h-12 text-white rounded-full shadow-lg ${social.color}`}
            >
              {social.icon}
            </motion.a>
          ))}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-stone-200 text-stone-900 shadow-lg border border-stone-400 hover:bg-stone-300 transition"
      >
        <FaShareAlt className="text-xl" />
      </button>
    </div>
  );
};

export default FloatingSocials;