import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Profesiones from './pages/Profesiones'
import Nosotros from './pages/Nosotros'
import PruebaTuAcero from './pages/PruebaTuAcero'

function App() {
  return (
    <div className="h-screen overflow-hidden antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-[#ECE1D5]"></div>
      <div className="relative z-10 h-full">
        <Navbar />
        <main className="h-[calc(100%-65px)]">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/profesiones" element={<Profesiones />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/prueba-tu-acero" element={<PruebaTuAcero />} />
          </Routes>
        </main>
        </div>
      </div>
  )
}

export default App
