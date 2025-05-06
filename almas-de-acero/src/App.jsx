import { MyRoutes } from './Router/MyRoutes'
import FloatingSocials from './components/FloatingSocials'

function App() {
  return (
    <div className="h-screen overflow-hidden antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-[#ECE1D5]"></div>
      <div className="relative z-10 h-full">
        <FloatingSocials />
        <MyRoutes />
      </div>
    </div>
  )
}

export default App
