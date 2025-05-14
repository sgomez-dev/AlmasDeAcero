import { MyRoutes } from './Router/MyRoutes'
import FloatingSocials from './components/FloatingSocials'
import Navigation from './components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-hidden antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-[#ECE1D5]"></div>
      <div className="relative z-10 h-full">
        <Navigation />
        <FloatingSocials />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="pt-20" // Add padding for fixed navigation
          >
            <MyRoutes />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
