import { MyRoutes } from './Router/MyRoutes'
import FloatingInstagram from './components/FloatingInstagram'
import FloatingYoutube from './components/FloatingYoutube'
import FloatingTiktok from './components/FloatingTiktok'

function App() {
  return (
    <div className="h-screen overflow-hidden antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-[#ECE1D5]"></div>
      <div className="relative z-10 h-full">
        <FloatingInstagram />
        <FloatingYoutube />
        <FloatingTiktok />
        <MyRoutes />
      </div>
    </div>
  )
}

export default App
