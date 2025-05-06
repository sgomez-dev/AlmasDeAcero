import { useNavigate } from "react-router-dom";
import { FaHourglassHalf } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const FloatingCTA = ({
  path = "/linea-del-tiempo/bomberos",
  icon = <FaHourglassHalf className="text-2xl" />,
  bgColor = "bg-stone-200",
  hoverColor = "hover:bg-yellow-500",
  title = "Viajar en el tiempo",
}) => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate(path);
    }, 500); // espera a que termine la animación
  };

  return (
    <motion.button
      whileTap={{ scale: 0.85, rotate: -20 }}
      animate={isAnimating ? { scale: [1, 1.3, 1], rotate: [0, 360] } : {}}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
      className={`fixed bottom-20 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full text-stone-900 shadow-lg transition-colors duration-300 ${bgColor} ${hoverColor} border border-stone-400`}
      title={title}
    >
      {icon}
    </motion.button>
  );
};

export default FloatingCTA;