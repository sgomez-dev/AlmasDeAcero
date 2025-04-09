import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from '../components/Navbar'
import Inicio from '../pages/Inicio'
import Nosotros from '../pages/Nosotros'
import Profesiones from '../pages/Profesiones'
import PruebaTuAcero from '../pages/PruebaTuAcero'

export const MyRoutes = () => {
  return (
    <>
        <Navbar />

        <section className='h-[calc(100%-65px)]'>
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />}></Route>
            <Route path="/inicio" element={<Inicio />}></Route>
            <Route path="/nosotros" element={<Nosotros />}></Route>
            <Route path="/profesiones" element={<Profesiones />}></Route>
            <Route path="/prueba-tu-acero" element={<PruebaTuAcero />}></Route>
            <Route path="*" element={
              <div className='page'>
                <h1 className='heading'>Error 404</h1>
                <p className='paragraph'>La página que estás buscando no existe</p>
              </div>
            }></Route>
          </Routes>
        </section>
    </>
  )
}