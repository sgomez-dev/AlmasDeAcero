import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as WorldMap } from '../assets/world.svg';
import ReportajeList from '../components/ReportajeList';
import { reportajesMilitares } from '../constants/ReportajesMilitares';
import '../assets/Militares.css';

const Militares = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [videoAspectRatio, setVideoAspectRatio] = useState(null);

  const [countriesWithVideos] = useState({
    AR: { name: 'Argentina', videoPath: '/videos/Argentina.mp4' },
    CL: { name: 'Chile', videoPath: '/videos/Chile.mp4' },
    EC: { name: 'Ecuador', videoPath: '/videos/Ecuador.mp4' },
    PE: { name: 'Perú', videoPath: '/videos/Peru.mp4' }
  });

  useEffect(() => {
    // Marcar los países con videos en el SVG
    const paths = document.querySelectorAll('.world-map path');
    paths.forEach(path => {
      if (countriesWithVideos[path.id]) {
        path.setAttribute('data-has-video', 'true');
      }
    });
  }, []);

  const handleZoom = (factor) => {
    setScale(prevScale => {
      const newScale = prevScale * factor;
      // Limitar el zoom entre 0.5 y 3
      return Math.min(Math.max(newScale, 0.5), 3);
    });
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setStartX(e.touches[0].clientX - translateX);
      setStartY(e.touches[0].clientY - translateY);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    
    setTranslateX(currentX - startX);
    setTranslateY(currentY - startY);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleCountryClick = (countryCode) => {
    if (countriesWithVideos[countryCode]) {
      setSelectedCountry(countryCode);
    }
  };

  const closeModal = () => {
    setSelectedCountry(null);
  };

  const resetMap = () => {
    setScale(1);
    setTranslateX(0);
    setTranslateY(0);
  };

  const handleVideoLoad = (e) => {
    const video = e.target;
    const aspectRatio = video.videoWidth / video.videoHeight;
    setVideoAspectRatio(aspectRatio);
    
    // Aplicar el estilo de aspect-ratio al video
    if (aspectRatio < 1) { // Video vertical
      video.style.aspectRatio = '9/16';
    } else { // Video horizontal
      video.style.aspectRatio = '16/9';
    }
  };

  return (
    <div className="militares-container">
      <h1 className="text-4xl font-bold mb-8 text-center">Militares - Almas de Acero alrededor del mundo</h1>
      <div 
        className="map-container"
        ref={mapContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          style={{
            transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
            transition: isDragging ? 'none' : 'transform 0.3s ease'
          }}
        >
          <WorldMap 
            className="world-map" 
            ref={mapRef}
            onClick={(e) => {
              if (!isDragging) {
                const countryCode = e.target.id;
                if (countryCode) {
                  handleCountryClick(countryCode);
                }
              }
            }} 
          />
        </div>
      </div>

      {/* Controles de zoom para móvil */}
      <div className="map-controls">
        <button 
          className="zoom-button"
          onClick={() => handleZoom(1.2)}
          aria-label="Acercar"
        >
          +
        </button>
        <button 
          className="zoom-button"
          onClick={() => handleZoom(0.8)}
          aria-label="Alejar"
        >
          -
        </button>
        <button 
          className="zoom-button"
          onClick={resetMap}
          aria-label="Resetear mapa"
        >
          ↺
        </button>
      </div>

      {selectedCountry && countriesWithVideos[selectedCountry] && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <h2 className="text-2xl font-bold">{countriesWithVideos[selectedCountry].name}</h2>
            <video 
              controls 
              autoPlay 
              className="w-full"
              onLoadedMetadata={handleVideoLoad}
              onError={(e) => {
                console.error('Error loading video:', e);
                alert('Lo sentimos, hubo un error al cargar el video.');
                closeModal();
              }}
            >
              <source src={countriesWithVideos[selectedCountry].videoPath} type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          </div>
        </div>
      )}
      <hr className="my-12 border-t-2 border-black" />
      <ReportajeList reportajes={reportajesMilitares} basePath="/profesiones/militares" />
    </div>
  );
};

export default Militares;