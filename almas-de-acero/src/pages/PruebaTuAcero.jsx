import ControlsModal from "../components/ControlsModal";
import React, { useState,useEffect, useRef } from "react";
import MusicModal from "../components/MusicModal";
import audio from "../audioController";
import { nameToFileMap } from "../utils/musicTracks"; 

const isMobileDevice = () => {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

const PruebaTuAcero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [iframeFocused, setIframeFocused] = useState(true);
  const [musicOpen, setMusicOpen] = useState(false);
  const iframeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileWarning, setShowMobileWarning] = useState(true);

  
  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

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
      const savedTrackName = localStorage.getItem("music_track");
      const track = nameToFileMap[savedTrackName] || "/music/Brain Dance.mp3";

      const savedVolume = localStorage.getItem("music_volume");
      const savedPlaying = localStorage.getItem("music_playing");
  
      const volume = savedVolume !== null ? parseFloat(savedVolume) : 0.2;
      const shouldPlay = savedPlaying === "true";
  
      audio.src = track;  
      audio.volume = volume;
  
      const userHasConfigured =
      savedTrackName !== null || savedVolume !== null || savedPlaying !== null;

      if ((!userHasConfigured || shouldPlay) && volume > 0) {
        audio.play().catch(() => {});
      }

      };
  
    const runOnce = () => {
      startMusic();
      window.removeEventListener("click", runOnce);
      window.removeEventListener("touchstart", runOnce);
    };
  
    window.addEventListener("click", runOnce);
    window.addEventListener("touchstart", runOnce);
  
    return () => {
      window.removeEventListener("click", runOnce);
      window.removeEventListener("touchstart", runOnce);
    };
  }, []);

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
      <div className="w-full flex justify-center px-4 pb-10 mt-8">
        <div className="relative w-full max-w-[1280px] aspect-[16/9] bg-black rounded-md shadow-lg ">
          {isMobile && showMobileWarning ? (
           <div className="w-full h-full bg-yellow-100 text-center flex flex-col items-center justify-center p-6 rounded-md border border-yellow-400 shadow relative">
            <button
              onClick={() => setShowMobileWarning(false)}
              className="absolute top-2 right-2 text-yellow-800 hover:text-red-600 text-2xl font-bold"
              aria-label="Cerrar aviso"
            >
              ✖
            </button>
            <p className="text-lg font-semibold text-yellow-800">
              ⚠️ Este juego está optimizado para ordenadores con teclado y ratón.
            </p>
            <p className="text-sm text-yellow-700 mt-2">
              Puedes continuar si lo deseas, pero algunas funciones podrían no estar disponibles en móviles o tablets.
            </p>
          </div>
          ) : (
            <>

              {/* Botones flotantes estilo pestaña */}
              <div className="absolute -top-8 left-10 flex space-x-2 z-10">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-[#f3e7d0] hover:bg-[#e6dbc5] text-black font-semibold text-sm py-1.5 px-4 rounded-t-md shadow border border-b-0 border-gray-400"
                  aria-haspopup="dialog"
                  aria-controls="controls-modal"
                >
                  <span>🎮</span>
                  <span className="hidden sm:inline"> Controles</span>
                </button>
                <button
                  onClick={() => setMusicOpen(true)}
                  className="bg-[#f3e7d0] hover:bg-[#e6dbc5] text-black font-semibold text-sm py-1.5 px-4 rounded-t-md shadow border border-b-0 border-gray-400"
                >
                  <span>🎶</span>
                  <span className="hidden sm:inline"> Música</span>
                </button>
                <button
                  onClick={goFullScreen}
                  className="bg-[#f3e7d0] hover:bg-[#e6dbc5] text-black font-semibold text-sm py-1.5 px-4 rounded-t-md shadow border border-b-0 border-gray-400"
                >
                  <span>⛶</span>
                  <span className="hidden sm:inline"> Pantalla completa</span>
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
            </>
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
