
import { reportajesBomberos } from '../constants/ReportajesBomberos';
import { reportajesPoliciaLocal } from '../constants/ReportajesPoliciaLocal';
import { reportajesSalvamentoMaritimo } from '../constants/ReportajesSalvamentoMaritimo';

import { useParams, useNavigate } from 'react-router-dom';

import { COMPONENTES_BOMBEROS } from '../reportajes/bomberos';
import { COMPONENTES_POLICIA_LOCAL } from '../reportajes/policiaLocal';
import { COMPONENTES_SALVAMENTO_MARITIMO } from '../reportajes/salvamentoMaritimo';

const dataMap = {
  'bomberos': {
    reportajes: reportajesBomberos,
    componentes: COMPONENTES_BOMBEROS,
  },
  'policia-local': {
    reportajes: reportajesPoliciaLocal,
    componentes: COMPONENTES_POLICIA_LOCAL,
  },
  'salvamento-maritimo': {
    reportajes: reportajesSalvamentoMaritimo,
    componentes: COMPONENTES_SALVAMENTO_MARITIMO,
  }
};

const ReportajeDetalle = () => {
  const { profesion, id } = useParams(); // ⚠️ Asegúrate de usar la ruta `/profesiones/:profesion/:id`
  const navigate = useNavigate();

  const { reportajes = [], componentes = {} } = dataMap[profesion] || {};
  const reportaje = reportajes.find((r) => String(r.id) === id);
  const index = reportajes.findIndex((r) => String(r.id) === id);
  const ReportajeComponent = componentes[id];

  if (!reportaje || !ReportajeComponent) {
    return <p className="mt-20 text-center p-6">Reportaje no encontrado.</p>;
  }


  const anterior = reportajes[index - 1];
  const siguiente = reportajes[index + 1];

  return (
    <div className="overflow-y-auto scrollbar-hide relative">
      {/* BARRA SUPERIOR PARA < 1605px */}
      <div className="xl2:hidden sticky top-0 z-40 bg-[#EFE6DA] flex justify-between items-center px-4 py-1 shadow-md border-b border-gray-300">
        {anterior ? (
          <button
            onClick={() => navigate(`/profesiones/${profesion}/${anterior.id}`)}
            className="text-sm font-medium text-black hover:underline"
          >
            ← {anterior.titulo}
          </button>
        ) : <div></div>}

        {siguiente && (
          <button
            onClick={() => navigate(`/profesiones/${profesion}/${siguiente.id}`)}
            className="text-sm font-medium text-black hover:underline"
          >
            {siguiente.titulo} →
          </button>
        )}
      </div>

      {/* CONTENIDO DEL REPORTAJE */}
      <ReportajeComponent />

      {/* BOTONES LATERALES FIJOS SOLO A PARTIR DE 1605px */}
      {anterior && (
        <button
          onClick={() => navigate(`/profesiones/${profesion}/${anterior.id}`)}
          className="hidden xl2:block fixed left-6 bottom-12 px-4 py-2 hover:underline z-50"
        >
          ← {anterior.titulo}
        </button>
      )}

      {siguiente && (
        <button
          onClick={() => navigate(`/profesiones/${profesion}/${siguiente.id}`)}
          className="hidden xl2:block fixed right-6 bottom-12 px-4 py-2 hover:underline z-50"
        >
          {siguiente.titulo} →
        </button>
      )}
    </div>
  );
};

export default ReportajeDetalle;
