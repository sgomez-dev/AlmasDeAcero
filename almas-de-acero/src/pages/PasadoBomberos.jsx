import React from 'react';
import FloatingCTA from '../components/FloatingCTA';
import TimelineLayout from '../components/TimelineLayout';
import { bomberosEvents } from '../constants/PasadoBomberos';

const PasadoBomberos = () => {
  return (
    <>
  <TimelineLayout title="Línea del Tiempo: Bomberos" events={bomberosEvents} />
      <FloatingCTA path="/profesiones/bomberos" />
    </>
  );
};

export default PasadoBomberos;
