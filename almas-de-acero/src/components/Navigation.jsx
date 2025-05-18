import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFire, FaShip, FaShieldAlt, FaUserShield, FaUsers, FaGamepad } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/profesiones/bomberos', icon: <FaFire />, label: 'Bomberos' },
    { path: '/profesiones/salvamento-maritimo', icon: <FaShip />, label: 'Salvamento Marítimo' },
    { path: '/profesiones/policia-local', icon: <FaShieldAlt />, label: 'Policía Local' },
    { path: '/profesiones/militares', icon: <FaUserShield />, label: 'Militares' },
    { path: '/nosotros', icon: <FaUsers />, label: 'Nosotros' },
    { path: '/prueba-tu-acero', icon: <FaGamepad />, label: 'Prueba tu acero' },
  ];

  const menuVariants = {
    closed: {
      scale: 0.95,
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      scale: 1,
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 z-50 w-full bg-[#C1B396]/95 backdrop-blur-sm border-b border-black/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" width={40} alt="logo" className="rounded-lg" />
            <span className="text-xl font-bold text-gray-800 hidden lg:inline">Almas de Acero</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors
                    ${location.pathname === item.path 
                      ? 'bg-[#ECE1D5] text-gray-800' 
                      : 'text-gray-600 hover:bg-[#ECE1D5]/50'}`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className='hidden lg:inline'>{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gray-800"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-gray-800"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gray-800"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden`}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
        >
          <div className="mt-4 space-y-2 bg-[#C1B396]/95 backdrop-blur-sm rounded-lg p-2">
            {menuItems.map((item) => (
              <motion.div
                key={item.path}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg
                    ${location.pathname === item.path 
                      ? 'bg-[#ECE1D5] text-gray-800' 
                      : 'text-gray-600 hover:bg-[#ECE1D5]/50'}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;