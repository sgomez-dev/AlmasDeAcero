import React from 'react'
import { reportajesPoliciaLocal } from '../constants/ReportajesPoliciaLocal';
import ReportajeList from '../components/ReportajeList';
import FadeScrollArea from '../components/FadeScrollArea';
import FloatingCTA from '../components/FloatingCTA';

const PoliciaLocal = () => {
  return (
    <FadeScrollArea className="flex-1 pt-20 pb-10 px-4">
    <ReportajeList reportajes={reportajesPoliciaLocal} basePath="/profesiones/policia-local" />
    <FloatingCTA path="/linea-del-tiempo/policia-local" />

  </FadeScrollArea>
  )
}

export default PoliciaLocal;