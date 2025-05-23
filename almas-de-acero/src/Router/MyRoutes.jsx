import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from '../components/Navbar'
import Inicio from '../pages/Inicio'
import Nosotros from '../pages/Nosotros'
import Profesiones from '../pages/Profesiones'
import PruebaTuAcero from '../pages/PruebaTuAcero'
import Bomberos from '../pages/Bomberos'
import PoliciaLocal from '../pages/PoliciaLocal'
import SalvamentoMaritimo from '../pages/SalvamentoMaritimo'
import Militares from '../pages/Militares'
import ReportajeDetalle from '../pages/ReporajeDetalle';
import PasadoBomberos from '../pages/PasadoBomberos';
import PasadoPoliciaLocal from '../pages/PasadoPoliciaLocal';
import PasadoSalvamentoMaritimo from '../pages/PasadoSalvamentoMaritimo';

export const MyRoutes = () => {
  return (
    <>
      <section>
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />}></Route>
          <Route path="/inicio" element={<Inicio />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route path="/profesiones" element={<Profesiones />}></Route>
          <Route path="/profesiones/bomberos" element={<Bomberos />}></Route>
          <Route path="/profesiones/:profesion/:id" element={<ReportajeDetalle />} />
          <Route path="/profesiones/policia-local" element={<PoliciaLocal />}></Route>
          <Route path="/profesiones/salvamento-maritimo" element={<SalvamentoMaritimo />}></Route>
          <Route path="/profesiones/militares" element={<Militares />}></Route>
          <Route path="/prueba-tu-acero" element={<PruebaTuAcero />}></Route>
          <Route path="/linea-del-tiempo/bomberos" element={<PasadoBomberos />}></Route>
          <Route path="/linea-del-tiempo/policia-local" element={<PasadoPoliciaLocal />}></Route>
          <Route path="/linea-del-tiempo/salvamento-maritimo" element={<PasadoSalvamentoMaritimo />}></Route>
          <Route path="*" element={
            <div className='page mt-20'>
              <h1 className='heading'>Error 404</h1>
              <p className='paragraph'>La página que estás buscando no existe</p>
            </div>
          }></Route>
        </Routes>
      </section>
    </>
  )
}