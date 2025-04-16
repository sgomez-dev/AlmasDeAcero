import React from 'react'
import { reportajesSalvamentoMaritimo } from '../constants/ReportajesSalvamentoMaritimo';
import ReportajeList from '../components/ReportajeList';
import FadeScrollArea from '../components/FadeScrollArea';

const SalvamentoMaritimo = () => {
  return (
    <FadeScrollArea className="flex-1 pt-20 pb-10 px-4">
    <ReportajeList reportajes={reportajesSalvamentoMaritimo} basePath="/profesiones/salvamento-maritimo" />
  </FadeScrollArea>
  )
}

export default SalvamentoMaritimo;
