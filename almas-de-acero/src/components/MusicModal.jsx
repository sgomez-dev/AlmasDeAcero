import React, { useEffect, useRef, useState } from "react";
import audio from "../audioController"; // ruta relativa correcta según tu estructura


const tracks = [
  { name: "Brain Dance", file: "/music/Brain Dance.mp3" },
  { name: "Cloud Dancer", file: "/music/Cloud Dancer.mp3" },
];

export default function MusicModal({ open, setOpen }) {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [volume, setVolume] = useState(0.2);
  const [playing, setPlaying] = useState(true);
  const [playMode, setPlayMode] = useState("loop-all"); //"loop-track" o "loop-all"

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
    audio.src = currentTrack.file;
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
  }, [currentTrack, playMode]);
  
  

  useEffect(() => {
    audio.volume = volume;
  }, [volume]);
  
  const togglePlay = () => {
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };
  

  const skipToNextTrack = () => {
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
                onChange={(e) => setPlayMode(e.target.value)}
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
                onChange={(e) => setVolume(parseFloat(e.target.value))}
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
        </div>
      </div>
    </div>
  );
}
