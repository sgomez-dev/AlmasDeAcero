import React from 'react'
import FloatingCTA from '../components/FloatingCTA';
import TimelineLayout from '../components/TimelineLayout';
import { salvamentoEvents } from '../constants/PasadoSalvamento';

const SalvamentoMaritimo = () => {
  return (
    <>
    <TimelineLayout title="Línea del Tiempo: Salvamento Marítimo" events={salvamentoEvents} />
    <FloatingCTA path="/profesiones/salvamento-maritimo" />
    </>
  )
}

export default SalvamentoMaritimo;
