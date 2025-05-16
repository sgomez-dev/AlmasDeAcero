import { useEffect, useRef } from "react";

export default function ControlsModal({ open, setOpen }) {
  const modalRef = useRef(null);

  // Cierra el modal al presionar ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setOpen]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="controls-title"
      className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={() => setOpen(false)}
    >
      <div
        ref={modalRef}
        role="document"
        tabIndex={0}
        className="bg-[#fef6e4] w-11/12 max-w-md rounded-xl shadow-lg p-6 relative<"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
          aria-label="Cerrar controles"
        >
          ×
        </button>
        <h2 id="controls-title" className="text-xl font-bold mb-4">Controles del juego</h2>
        <ul className="space-y-2 text-left text-sm sm:text-base">
            <li><strong>W</strong> → Mover hacia arriba</li>
            <li><strong>S</strong> → Mover hacia abajo</li>
            <li><strong>D</strong> → Mover Camara hacia la derecha</li>
            <li><strong>A</strong> → Mover Camara hacia la izquierda</li>
            <li>🡪 <strong>Flecha derecha</strong> → Mover Camara hacia la derecha</li>
            <li>🡨, 🡩, 🡫 <strong>Resto de flechas</strong> → Mover Camara hacia la izquierda</li>
            <li>␣ <strong>Espacio</strong> → Disparar y poner nombre</li>
            <li>🖱️ <strong>Clic derecho</strong>,<strong>Q</strong> → Vista Aerea</li>
        </ul>
      </div>
    </div>
  );
}
