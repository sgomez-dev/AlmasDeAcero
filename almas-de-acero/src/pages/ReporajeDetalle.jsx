import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { reportajes } from '../constants/ReportajesBomberos';
import { BOMBEROS_COMPONENTES } from '../reportajes/bomberos';

const ReportajeDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const reportaje = reportajes.find((r) => String(r.id) === id);
  const index = reportajes.findIndex((r) => String(r.id) === id);
  const ReportajeComponent = BOMBEROS_COMPONENTES[id];

  if (!reportaje || !ReportajeComponent) {
    return <p className="mt-20 text-center p-6">Reportaje no encontrado.</p>;
  }

  const anterior = reportajes[index - 1];
  const siguiente = reportajes[index + 1];

  return (
    <div className="mt-20 p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-center">{reportaje.titulo}</h1>
      <p className="text-center text-gray-600 mb-6">Por: {reportaje.autores.join(", ")}</p>

      <ReportajeComponent />

      <div className="flex justify-between items-center mt-12 text-sm text-[#A18167]">
        {anterior && (
          <button
            onClick={() => navigate(`/profesiones/bomberos/${anterior.id}`)}
            className="hover:underline"
          >
            ← {anterior.titulo}
          </button>
        )}
        {siguiente && (
          <button
            onClick={() => navigate(`/profesiones/bomberos/${siguiente.id}`)}
            className="hover:underline ml-auto"
          >
            {siguiente.titulo} →
          </button>
        )}
      </div>
    </div>
  );
};

export default ReportajeDetalle;
