import React, { useEffect, useState } from "react";
import audio from "../audioController"; // ruta relativa correcta según tu estructura
import { tracks } from "../utils/musicTracks";


export default function MusicModal({ open, setOpen }) {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [volume, setVolume] = useState(0.2);
  const [playing, setPlaying] = useState(true);
  const [playMode, setPlayMode] = useState("loop-all"); //"loop-track" o "loop-all"
  const [loadedFromStorage, setLoadedFromStorage] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);



  useEffect(() => {
    const savedVolume = localStorage.getItem("music_volume");
    const savedTrack = localStorage.getItem("music_track");
    const savedPlaying = localStorage.getItem("music_playing");
    const savedMode = localStorage.getItem("music_mode");
  
    if (savedVolume !== null) setVolume(parseFloat(savedVolume));
    if (savedTrack) {
      const found = tracks.find(t => t.name === savedTrack);
      if (found) setCurrentTrack(found);
    }
    if (savedPlaying !== null) setPlaying(savedPlaying === "true");
    if (savedMode) setPlayMode(savedMode);
  
    setLoadedFromStorage(true);
  }, []);
  
  
  useEffect(() => {
    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);
  
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
  
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);
  
  useEffect(() => {
    if (!loadedFromStorage) return;
  
    if (audio.src !== window.location.origin + currentTrack.file) {
      audio.src = currentTrack.file;
    }
  
    audio.volume = volume;
  
    if (playing) {
      audio.play().catch(() => setPlaying(false));
    }
  
    const handleEnded = () => {
      if (playMode === "loop-all") {
        const currentIndex = tracks.findIndex(t => t.name === currentTrack.name);
        const nextIndex = (currentIndex + 1) % tracks.length;
        setCurrentTrack(tracks[nextIndex]);
      } else {
        audio.currentTime = 0;
        audio.play();
      }
    };
  
    audio.addEventListener("ended", handleEnded);
  
    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack, playMode, loadedFromStorage]);
  
  
  

  useEffect(() => {
    audio.volume = volume;
  }, [volume]);
  
  const togglePlay = () => {
    setUserInteracted(true);
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };
  
  useEffect(() => {
    if (!userInteracted) return;
    localStorage.setItem("music_volume", volume.toString());
  }, [volume, userInteracted]);
  
  useEffect(() => {
    if (!userInteracted) return;
    localStorage.setItem("music_track", currentTrack.name);
  }, [currentTrack, userInteracted]);
  
  useEffect(() => {
    if (!userInteracted) return;
    localStorage.setItem("music_playing", playing.toString());
  }, [playing, userInteracted]);
  
  useEffect(() => {
    if (!userInteracted) return;
    localStorage.setItem("music_mode", playMode);
  }, [playMode, userInteracted]);
  

  const skipToNextTrack = () => {
    setUserInteracted(true); 
    const currentIndex = tracks.findIndex(t => t.name === currentTrack.name);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
  };
  
  
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-[#fef6e4] rounded-xl shadow-lg w-11/12 max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-black"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4">🎶 Música de fondo</h2>

        <label className="block mb-4">
          <span className="text-gray-700">Selecciona tema:</span>
          <select
            className="block w-full mt-1 p-2 border rounded bg-[#f3e7d0]"
            value={currentTrack.name}
            onChange={(e) => {
                setUserInteracted(true);
                const selected = tracks.find((t) => t.name === e.target.value);
                setCurrentTrack(selected);
            }}
          >
            {tracks.map((track) => (
              <option key={track.name} value={track.name}>
                {track.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block mb-4">
            <span className="text-gray-700">Modo de reproducción:</span>
            <select
                className="block w-full mt-1 p-2 border rounded bg-[#f3e7d0]"
                value={playMode}
                onChange={(e) => {setPlayMode(e.target.value); setUserInteracted(true);}}
            >
                <option value="loop-track">🔂 Repetir canción</option>
                <option value="loop-all">🔁 Reproducir todas</option>
            </select>
        </label>


        <div className="flex items-center gap-4">
            <button
                onClick={togglePlay}
                className="bg-[#f3e7d0] hover:bg-[#e6dbc5] text-black font-bold py-2 px-4 rounded shadow"
                >
                {playing ? "⏸️ Pausar" : "▶️ Reproducir"}
            </button>
            {playMode === "loop-all" && (
                <button
                    onClick={skipToNextTrack}
                    className="bg-[#f3e7d0] hover:bg-[#e6dbc5] text-black font-bold py-2 px-4 rounded shadow"
                >
                    ⏭️ Siguiente
                </button>
            )}

            <div className="flex flex-col">
                <label className="text-sm">Volumen</label>
                <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => {
                    setUserInteracted(true); 
                    setVolume(parseFloat(e.target.value));
                  }}
                  
                />
            </div>
        </div>
        
        <div className="mt-6 text-xs text-gray-600">
            <p>
                <strong>Créditos:</strong>
            </p>
            {currentTrack.name === "Cloud Dancer" && (
                <p>
                "Cloud Dancer" Kevin MacLeod (<a href="https://incompetech.com" className="underline" target="_blank">incompetech.com</a>)<br />
                Licensed under <a href="http://creativecommons.org/licenses/by/4.0/" className="underline" target="_blank">CC BY 4.0</a>
                </p>
            )}
            {currentTrack.name === "Brain Dance" && (
                <p>
                "Brain Dance" Kevin MacLeod (<a href="https://incompetech.com" className="underline" target="_blank">incompetech.com</a>)<br />
                Licensed under <a href="http://creativecommons.org/licenses/by/4.0/" className="underline" target="_blank">CC BY 4.0</a>
                </p>
            )}
            <div className="mt-6 text-right">
                <button
                    onClick={() => {
                    localStorage.removeItem("music_volume");
                    localStorage.removeItem("music_track");
                    localStorage.removeItem("music_playing");
                    localStorage.removeItem("music_mode");

                    setVolume(0.2);
                    setCurrentTrack(tracks[0]);
                    setPlayMode("loop-all");
                    setPlaying(true);
                    setUserInteracted(false);
                    }}
                    className="text-sm text-red-600 hover:underline"
                >
                    🗑️ Restablecer configuración
                </button>
            </div>
        </div>
      </div>

    </div>
  );
}
