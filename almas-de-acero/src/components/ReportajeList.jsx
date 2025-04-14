import React from "react";
import { reportajes } from "../constants/ReportajesBomberos";

const ReportajeList = () => {
  const principal = reportajes[0]; // Primer reportaje
  const secundarios = reportajes.slice(1); // El resto

  return (
    <div className="container mx-auto px-4 max-h-[80vh] overflow-y-auto pr-2">
        
      {/* Reportaje principal */}
      <div className="bg-[#E9D3C0] p-6 rounded-lg shadow-md flex flex-col md:flex-row mb-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{principal.titulo}</h2>
          <p className="text-gray-600 mb-1">
            Por: {principal.autores.join(", ")}
          </p>
          <p className="text-gray-700">{principal?.subtitulo}</p>
        </div>
        <div className="md:w-1/3 md:ml-6 mt-4 md:mt-0">
          <img
            src={principal.foto}
            alt={principal.titulo}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Reportajes secundarios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {secundarios.map((rep) => (
          <div key={rep.id} className="bg-[#E9D3C0] p-4 rounded-lg shadow-md">
            <img
              src={rep.foto}
              alt={rep.titulo}
              className="rounded-md w-full h-48 object-cover mb-3"
            />
            <h3 className="text-lg font-semibold">{rep.titulo}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportajeList;
