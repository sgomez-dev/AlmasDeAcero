const TimelineLayout = ({ title, events }) => {
    return (
      <div className="p-6 bg-[#A18167]">
        <h1 className="text-3xl font-bold text-center mb-2">{title}</h1>
        <hr className="mb-8 border-black" />
  
        {/* Secciones por año */}
        {events.map((event, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 border-b-4 border-black">
            <div className="md:col-span-1 text-4xl font-bold border-b-2 pb-2 md:border-b-0 md:border-r-4 border-black text-center justify-center items-center flex">{event.year}</div>
            <div className="md:col-span-1 text-center justify-center items-center flex">{event.text}</div>
            <div className="md:col-span-2">
              <img src={event.image} alt={`Foto de ${event.year}`} className="w-full rounded shadow-md mb-4" />
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default TimelineLayout;