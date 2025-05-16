import ControlsModal from "../components/ControlsModal";
import React, { useState,useEffect, useRef } from "react";
import MusicModal from "../components/MusicModal";
import audioRef from "../audioController";



const PruebaTuAcero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [iframeFocused, setIframeFocused] = useState(true);
  const [musicOpen, setMusicOpen] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const iframeRef = useRef(null);
  

  const goFullScreen = () => {
    const iframe = document.querySelector("iframe");
    if (iframe?.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe?.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe?.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe?.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  };

  useEffect(() => {
    const startMusic = () => {
      if (!musicStarted) {
        audioRef.src = "/music/Brain Dance.mp3"; // pista por defecto
        audioRef.play().then(() => {
          setMusicStarted(true);
        }).catch(() => {});
      }
    };

    window.addEventListener("click", startMusic, { once: true });
    window.addEventListener("touchstart", startMusic, { once: true });

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };
  }, [musicStarted]);


  // Monitorea el foco del iframe real
  useEffect(() => {
    const checkFocus = () => {
      const active = document.activeElement;
      const focused = iframeRef.current && active === iframeRef.current;
      setIframeFocused(focused);
    };

    const interval = setInterval(checkFocus, 300); // check cada 300ms
    return () => clearInterval(interval);
  }, []);
  


  
  return (
    <div className="w-full min-h-[calc(100vh-65px)] flex flex-col items-center justify-start">
      <h1 className="text-4xl font-bold my-4">Prueba tu acero</h1>

      {/* Contenedor del juego */}
      <div className="w-full flex justify-center px-4 pb-10">
        <div className="relative w-full max-w-[1280px] aspect-[16/9]">

          {/* Botones flotantes estilo pestaña */}
          <div className="absolute -top-8 left-10 flex space-x-2 z-10">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#f3e7d0] hover:bg-[#e6dbc5] text-black font-semibold text-sm py-1.5 px-4 rounded-t-md shadow border border-b-0 border-gray-400"
              aria-haspopup="dialog"
              aria-controls="controls-modal"
            >
              🎮 Controles
            </button>
            <button
              onClick={() => setMusicOpen(true)}
              className="bg-[#f3e7d0] hover:bg-[#e6dbc5] text-black font-semibold text-sm py-1.5 px-4 rounded-t-md shadow border border-b-0 border-gray-400"
            >
              🎶 Música
            </button>
            <button
              onClick={goFullScreen}
              className="bg-[#f3e7d0] hover:bg-[#e6dbc5] text-black font-semibold text-sm py-1.5 px-4 rounded-t-md shadow border border-b-0 border-gray-400"
            >
              ⛶ Pantalla completa
            </button>

          </div>

          {/* IFRAME del juego */}
          <iframe
            ref={iframeRef}
            src="/prueba-tu-acero/index.html"
            className="absolute top-0 left-0 w-full h-full border rounded-md"
            title="Unity Game"
            allowFullScreen
            tabIndex={0}
          ></iframe>

          {/* Overlay cuando pierde el foco */}
          {!iframeFocused && (
           <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center text-white text-xl font-bold cursor-pointer z-20 rounded-md animate-pulse"

              onClick={() => {
                setIframeFocused(true);
                iframeRef.current?.focus();
              }}
            >
              🎮 Haz clic para volver al juego 🎮
            </div>
          )}


          {/* Modal de controles */}
          <ControlsModal open={modalOpen} setOpen={setModalOpen} />
          <MusicModal open={musicOpen} setOpen={setMusicOpen} />

        </div>
      </div>
    </div>
  );
};

export default PruebaTuAcero;
