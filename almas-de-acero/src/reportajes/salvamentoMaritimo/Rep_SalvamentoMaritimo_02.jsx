import React from 'react';

export const Rep_SalvamentoMaritimo_02 = () => {
    return (
        <div>
            <div className="h-screen flex flex-col">
                <div className="flex-grow overflow-y-auto flex justify-center">
                    <div className="max-w-4xl py-8 px-0">
                        {/* Contenedor de imagen + título y autores */}
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            {/* Imagen (izquierda en desktop, arriba en mobile) */}
                            <div>
                                <img
                                    src="/images/reportajes/salvamentoMaritimo/Rep_SalvamentoMaritimo_02.jpg"
                                    alt="Nuria Bravo en las instalaciones del Helimer Cantábrico"
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                                <p className="text-xs text-gray-500 mt-1">Foto de Nuria Bravo, en las instalaciones del Helimer Cantábrico en Gijón. Fuente, La Nueva España.</p>
                            </div>
                            
                            {/* Título y autores (derecha en desktop, abajo en mobile) */}
                            <div className="md:w-2/3">
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                    Nuria Bravo, "vocación de servicio" desde El Musel
                                </h1>
                                
                                {/* Subtítulo */}
                                <h2 className="text-xl text-gray-600 mb-4">
                                    La comandante jefa del Helimer Cantábrico asegura que su motivación principal es el servicio público
                                </h2>
                                
                                <p className="text-lg font-semibold text-gray-600">
                                    Escrito por: Pablo Vázquez Alonso. Miércoles, 14/05/2025
                                </p>
                            </div>
                        </div>
                        {/* Texto del reportaje */}
                        <div className="space-y-4 text-gray-700 pb-20">
                            <p className="text-justify leading-relaxed">
                                Nuria Bravo (Madrid, 1971) lleva dedicándose 17 años a salvar vidas en el Cantábrico, desde la base del Helimer en Gijón. Llegó al Puerto del Musel, donde está la base, procedente de Ceuta, donde pilotaba un helicóptero de pasajeros hacia la costa del estrecho. Desde su llegada hasta 2022, fue piloto normal, es decir, no ostentaba ningún cargo, pero desde 2022 ascendió a Comandante Jefe de la base de Salvamento Marítimo de Gijón en el Musel, además de ser el máximo responsable del helicóptero Helimer del Cantábrico.
                            </p>
                            <p className="text-justify leading-relaxed">
                                Nuria lleva rompiendo estereotipos, ya que fue la primera mujer piloto del ejército del aire, además de ser también la primera mujer al ponerse al mando de un helicóptero de Salvamento Marítimo.
                            </p>
                             <div className="bg-[#e9d3c0] rounded-lg p-4 mt-6 flex items-center gap-4">
                                <svg className="w-8 h-8 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01" />
                                </svg>
                                <div>
                                    <p className="font-semibold text-blue-700">¿Quieres saber más?</p>
                                    <p>
                                        Escucha este podcast que también puede gustarte:&nbsp;
                                        <a
                                            href="https://www.ivoox.com/nuria-bravo-comandante-cantabrico-audios-mp3_rf_147161485_1.html"
                                            className="text-blue-600 underline hover:text-blue-800"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Nuria Bravo, comandante en el Cantábrico  (iVoox)
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};