import React from 'react';

export const Rep_SalvamentoMaritimo_04 = () => {
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
                                    src="images/reportajes/salvamentoMaritimo/Rep_Salvamento_04.jpg"
                                    alt="Centro de Enseñanza Jovellanos de Gijón"
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                                <p className="text-xs text-gray-500 mt-1">Fuente: Salvamento Marítimo</p>
                            </div>
                            
                            {/* Título y autores (derecha en desktop, abajo en mobile) */}
                            <div className="md:w-2/3">
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                    Gijón, base de la enseñanza de Salvamento Marítimo
                                </h1>
                                
                                {/* Subtítulo */}
                                <h2 className="text-xl text-gray-600 mb-4">
                                    En la ciudad asturiana, Salvamento Marítimo tiene su centro de enseñanza del país
                                </h2>
                                
                                <p className="text-lg font-semibold text-gray-600">
                                    Escrito por: Pablo Vázquez Alonso. Jueves, 15 de mayo de 2025.
                                </p>
                            </div>
                        </div>
                        
                        {/* Texto del reportaje */}
                        <div className="space-y-4 text-gray-700 pb-20">
                            <p className="text-justify leading-relaxed">
                                Salvamento Marítimo tiene verdaderos héroes en el mar, los guardianes de todas las embarcaciones o cualquier desgracia natural que pueda ocurrir, por lo que todos sus profesionales disponen de una formación exhaustiva. De eso mismo, se encarga el <a href="http://www.salvamentomaritimo.es/conocenos/nuestros-medios/centro-de-formacion-en-seguridad-jovellanos" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Centro de Enseñanza Jovellanos de Gijón</a>, ubicado a unos 10 kilómetros de la ciudad, en la parroquia de Veranes.
                            </p>
                            
                            <p className="text-justify leading-relaxed">
                                El objetivo de este centro es la formación integral en la seguridad marítima, portuaria e industrial, además de la prevención de riesgos laborales y la protección del medio marítimo. Cuenta con unas instalaciones de más de 140.000 metros cuadrados, lo que le hace ser un centro de enseñanza en salvamento pionero en Europa y en el mundo. Uno de sus principales fuertes son los simuladores marinos, lo que hace que reciba expertos de toda Europa y de otros países.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};