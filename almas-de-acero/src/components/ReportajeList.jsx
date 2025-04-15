import React from "react";
import { reportajes } from "../constants/ReportajesBomberos";
import { useNavigate } from "react-router-dom";

const ReportajeList = () => {
  const navigate = useNavigate();
  const principal = reportajes[0];
  const secundarios = reportajes.slice(1);

  const handleClick = (id) => {
    navigate(`${id}`);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Principal */}
      <div
        onClick={() => handleClick(principal.id)}
        className="cursor-pointer bg-[#E9D3C0] p-6 rounded-lg shadow-md flex flex-col md:flex-row mb-8"
      >
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{principal.titulo}</h2>
          <p className="text-gray-600 mb-1">
            Por: {principal.autores.join(", ")}
          </p>
          <p className="text-gray-700">{principal.subtitulo}</p>
        </div>
        <div className="md:w-1/3 md:ml-6 mt-4 md:mt-0">
          <img
            src={principal.foto}
            alt={principal.titulo}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Secundarios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {secundarios.map((rep) => (
          <div
            key={rep.id}
            onClick={() => handleClick(rep.id)}
            className="cursor-pointer bg-[#E9D3C0] p-4 rounded-lg shadow-md"
          >
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
