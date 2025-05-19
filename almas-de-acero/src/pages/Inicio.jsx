import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFire, FaShip, FaShieldAlt, FaUserShield, FaArrowRight } from 'react-icons/fa';

const Inicio = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const professions = [
    {
      icon: <FaFire className="text-4xl" />,
      title: "Bomberos",
      description: "Valentía y sacrificio en cada llamada",
      path: "/profesiones/bomberos",
      color: "from-red-500/20 to-red-600/20"
    },
    {
      icon: <FaShip className="text-4xl" />,
      title: "Salvamento Marítimo",
      description: "Guardianes del mar",
      path: "/profesiones/salvamento-maritimo",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Policía Local",
      description: "Protección y servicio a la comunidad",
      path: "/profesiones/policia-local",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: <FaUserShield className="text-4xl" />,
      title: "Militares",
      description: "Honor y deber patrio",
      path: "/profesiones/militares",
      color: "from-gray-500/20 to-gray-600/20"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-gray-800"
          variants={itemVariants}
        >
          Almas de Acero
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Descubre las historias de aquellos que dedican sus vidas a proteger y servir
        </motion.p>
      </motion.div>

      {/* Professions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {professions.map((profession, index) => (
          <motion.div
            key={profession.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${profession.color} p-6 backdrop-blur-sm`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-gray-800">{profession.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{profession.title}</h3>
              <p className="text-gray-600 mb-4">{profession.description}</p>
              <Link
                to={profession.path}
                className="inline-flex items-center text-gray-800 hover:text-gray-600 transition-colors"
              >
                Descubrir más
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>



      {/* Featured Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-[#d2c2b0] backdrop-blur-sm rounded-2xl p-8 mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Tienes lo que se necesita?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre si tienes el espíritu y la fortaleza para servir a los demás
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            to="/prueba-tu-acero"
            className="inline-flex items-center px-6 py-3 bg-[#ECE1D5] text-gray-800 rounded-lg hover:bg-[#ECE1D5]/80 transition-colors"
          >
            Prueba tu Acero
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </motion.div>

      {/* Buzzfeed Test Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-[#d2c2b0] backdrop-blur-sm rounded-2xl p-8 mb-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué héroe de uniforme eres?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Descubre con este test de BuzzFeed qué tipo de héroe vive en ti.
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.buzzfeed.com/lazyowl487/aqua-haroe-de-uniforme-vive-en-ti-71d5o2g782?utm_source=dynamic&utm_campaign=bfsharecopy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#ECE1D5] text-gray-800 rounded-lg hover:bg-[#ECE1D5]/80 transition-colors font-semibold"
          >
            Ir al test en BuzzFeed
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Inicio;
