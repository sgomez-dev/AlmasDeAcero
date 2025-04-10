import { useState, useEffect } from 'react';
import { TEAM_MEMBERS } from '../constants/team';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TeamGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Actualizar itemsToShow basado en el ancho de la pantalla
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1); // Móvil
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2); // Tablet
      } else {
        setItemsToShow(3); // Desktop
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      const maxIndex = TEAM_MEMBERS.length - itemsToShow;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      const maxIndex = TEAM_MEMBERS.length - itemsToShow;
      return nextIndex < 0 ? maxIndex : nextIndex;
    });
  };

  return (
    <div className="w-full bg-[#E9D3C0] mb-10">
      <div className="container mx-auto px-4 py-8">
        <div className="relative max-w-6xl mx-auto">
          {/* Botón Anterior */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/80 hover:bg-white p-3 rounded-full shadow-md z-10"
          >
            <FaChevronLeft className="text-2xl text-gray-800" />
          </button>

          {/* Contenedor del carrusel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  className="flex-none w-full md:w-1/2 lg:w-1/3 p-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center border-2 border-black">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <h3 className="text-xl font-bold mt-4 mb-2">{member.name}</h3>
                    <p>{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botón Siguiente */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/80 hover:bg-white p-3 rounded-full shadow-md z-10"
          >
            <FaChevronRight className="text-2xl text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamGrid; 