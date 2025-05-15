import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReportajeList = ({ reportajes, basePath }) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [maskClass, setMaskClass] = useState("");

  const principal = reportajes[0];
  const secundarios = reportajes.slice(1);

  const handleClick = (id) => {
    navigate(`${basePath}/${id}`);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const atTop = el.scrollTop === 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      setMaskClass(atTop && atBottom ? "" : "fade-mask");
    };

    handleScroll(); // estado inicial
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      className={`relative h-[calc(100vh-120px)] overflow-y-auto scrollbar-hide ${maskClass} px-4`}
    >
      {/* Principal */}
      <div
        onClick={() => handleClick(principal.id)}
        className="cursor-pointer bg-[#E9D3C0] p-6 rounded-lg shadow-md flex flex-col md:flex-row mb-8 transition hover:shadow-lg gap-6"
      >
        <div className="flex-1 flex flex-col md:mt-6">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">{principal.titulo}</h2>
          <p className="text-gray-600 mb-2 md:text-lg">
            Por: {principal.autores.join(", ")}
          </p>
          <p className="mt- text-gray-700 md:text-xl">{principal.subtitulo}</p>
        </div>
        {/* Imagen principal más grande y protagonista */}
        <div className="md:w-[600px] md:ml-8 mt-6 md:mt-0">
          {principal.foto ? (
            <img
              src={principal.foto}
              alt={principal.titulo}
              className="rounded-xl w-full h-[180px] md:h-[320px] object-cover shadow-lg"
            />
          ) : (
            <div className="w-full h-[180px] md:h-[320px] bg-[#D9C6B7] rounded-xl" />
          )}
        </div>


      </div>


      {/* Secundarios */}
{/* Secundarios */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-10">
  {secundarios.map((rep) => (
    <div
      key={rep.id}
      onClick={() => handleClick(rep.id)}
      className="cursor-pointer bg-[#E9D3C0] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
    >
      {/* Contenedor de imagen con altura fija de 50px */}
      <div className="w-full h-[275px] overflow-hidden"> {/* Altura fija de 50px */}
        {rep.foto ? (
          <img
            src={rep.foto}
            alt={rep.titulo}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#D9C6B7]" />
        )}
      </div>
      
      {/* Contenedor de texto (sin altura fija, se ajusta al contenido) */}
      <div className="p-3">
        <h3 className="text-sm md:text-base font-semibold">{rep.titulo}</h3>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default ReportajeList;
