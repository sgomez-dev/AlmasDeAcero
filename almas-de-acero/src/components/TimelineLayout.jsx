const TimelineLayout = ({ title, events }) => {
    return (
      <div className="p-6 bg-gradient-to-b from-[#A18167] to-[#e9dac1] min-h-screen">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-[#3e2723] drop-shadow-lg tracking-wide">{title}</h1>
        <hr className="mb-10 border-[#3e2723] w-1/2 mx-auto" />

        {/* Secciones por año */}
        <div className="space-y-12">
          {events.map((event, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center bg-white/80 rounded-xl shadow-lg p-6 md:p-8 gap-6 border-l-8 border-[#A18167] hover:scale-[1.02] transition-transform duration-200">
              {/* Año destacado */}
              <div className="flex-shrink-0 flex flex-col items-center md:items-end w-full md:w-32 mb-4 md:mb-0">
                <div className="bg-[#A18167] text-white text-2xl md:text-3xl font-bold rounded-full w-28 h-28 flex items-center justify-center shadow-md border-4 border-[#e9dac1] mb-2 text-center">
                  <span className="w-full text-center">{event.year}</span>
                </div>
              </div>
              {/* Texto */}
              <div className="flex-1 text-center md:text-left text-lg text-[#3e2723] font-medium px-2">
                {event.text}
              </div>
              {/* Imagen y fuente */}
              {event.image && (
                <div className="flex flex-col items-center md:items-end w-full md:w-72">
                  <img src={event.image} alt={`Foto de ${event.year}`} className="w-full max-w-xs rounded-lg shadow-md mb-2 object-cover aspect-video" />
                  <p className="text-xs text-gray-500 mt-1 italic">Fuente: {event.source}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TimelineLayout;