import React from 'react';
import { Rep_Bomberos_01 } from '../constants/ReportajesBomberos/Rep_Bomberos_01';

const Bomberos = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {Rep_Bomberos_01.titulo}
          </h1>
          
          <div className="space-y-4 text-gray-700">
            {Rep_Bomberos_01.texto.map((parrafo, index) => (
              <p key={index} className="text-justify leading-relaxed">
                {parrafo}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bomberos;