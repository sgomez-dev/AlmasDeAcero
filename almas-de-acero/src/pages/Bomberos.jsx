import React from 'react';
import ReportajeList from '../components/ReportajeList';
import FadeScrollArea from '../components/FadeScrollArea'; // ruta según dónde lo pongas

const Bomberos = () => {
  return (
    <FadeScrollArea className="flex-1 pt-20 pb-10 px-4">
      <ReportajeList />
    </FadeScrollArea>
  );
};

export default Bomberos;
