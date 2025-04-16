import React from 'react';

const Reportaje = ({ data }) => {
  return (
    <div className="mt-16 pb-10"> {/* Margen para el navbar */}
      <div className="h-screen flex flex-col">
        <div className="flex-grow overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Contenedor de imagen + título y autores */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              {/* Imagen (izquierda en desktop, arriba en mobile) */}
              <div className="md:w-1/3">
                <img
                  src={data.foto}
                  alt="Imagen del reportaje"
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </div>
              
              {/* Título y autores (derecha en desktop, abajo en mobile) */}
              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {data.titulo}
                </h1>
                
                {/* Subtítulo (solo si existe) */}
                {data.subtitulo && (
                  <h2 className="text-xl text-gray-600 mb-4">
                    {data.subtitulo}
                  </h2>
                )}
                
                <p className="text-lg font-semibold text-gray-600">
                  Autores: {data.autores.join(', ')}
                </p>
              </div>
            </div>

            {/* Texto del reportaje */}
            <div className="space-y-4 text-gray-700 pb-20">
              {data.texto.map((parrafo, index) => (
                <p key={index} className="text-justify leading-relaxed">
                  {parrafo}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reportaje;