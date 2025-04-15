import React from 'react';

export const Rep_PoliciaLocal_01 = () => {
    return (
        <div className="mt-16">
            <div className="h-screen flex flex-col">
                <div className="flex-grow overflow-y-auto flex justify-center">
                    <div className="max-w-4xl py-8 px-0">
                        {/* Contenedor de imagen + título y autores */}
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            {/* Imagen (izquierda en desktop, arriba en mobile) */}
                           
                            
                            {/* Título y autores (derecha en desktop, abajo en mobile) */}
                            <div className="md:w-2/3">
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                    Policía Local en España: más que agentes de tráfico
                                </h1>
                                
                                <p className="text-lg font-semibold text-gray-600">
                                    Por Pablo Vázquez y Sofía Toraya.
                                </p>
                            </div>
                        </div>
                        {/* Texto del reportaje */}
                        <div className="space-y-4 text-gray-700 pb-20">
                            <p className="text-justify leading-relaxed">
                                En cada parte de una comunidad, regulando el tráfico, en las escuelas, o respondiendo a la llamada de un vecino, la Policía Local es parte del cotidiano de millones de personas. Aunque a menudo su imagen se ha relacionado con tareas menores, su labor es mucho más extensa y vital para asegurar la convivencia y la seguridad en las ciudades. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                La Policía Local es la fuerza de seguridad más cercana a la gente. Se encuentra bajo la autoridad de los gobiernos locales y está presente en casi todos los pueblos y ciudades de España, aunque sus funciones y recursos pueden cambiar según el tamaño del lugar. Sin embargo, su papel es esencial en la red de seguridad del país, ya que cumplen funciones importantes. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                ¿Qué funciones tienen que realizar en su trabajo? Todo el mundo se piensa que solo ponen multas y no es así, aquí hay un breve resumen de sus diversos trabajos
                            </p>
                            <ul className="list-disc list-inside text-justify leading-relaxed">
                                <li>La vigilancia de áreas públicas y la garantía del orden en calles, plazas, parques y escuelas.</li>
                                <li>La seguridad de las autoridades locales y la protección de edificios e instalaciones de la municipalidad.</li>
                                <li>La respuesta inmediata ante emergencias, trabajando en conjunto con otros cuerpos como la Policía Nacional, la Guardia Civil, los bomberos o los servicios de salud.</li>
                                <li>La intervención en disputas entre vecinos, situaciones de violencia de género y problemas de convivencia.</li>
                                <li>La salvaguarda del medio ambiente, la supervisión de animales y el cumplimiento de las normativas de la municipalidad.</li>
                                <li>En muchos pueblos, también cuentan con equipos especializados en adicciones, mediación social, seguridad en las escuelas o violencia en el hogar.</li>
                            </ul>
                            <p className="text-justify leading-relaxed">
                                Además, en los municipios que tienen playa o áreas rurales, también participan en actividades de salvamento, localización de personas y cuidado del medio ambiente. 
                            </p>
                            <p className="text-justify leading-relaxed text-xl font-bold">
                                Una labor de proximidad
                            </p>
                            <p className="text-justify leading-relaxed">
                                Uno de los fundamentos del trabajo de la Policía Local es su orientación hacia la comunidad. Como un cuerpo cercano, sus oficiales suelen tener un buen conocimiento del entorno social de las zonas donde laboran. Esta proximidad facilita una respuesta más humana, rápida y efectiva ante los problemas cotidianos de los ciudadanos. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                "No solo hacemos cumplir la ley, sino que también escuchamos, reflexionamos y orientamos. A menudo, una conversación puede prevenir un conflicto", señala Marta, una agente de Policía Local con más de 15 años de experiencia en una ciudad de la Comunidad Valenciana. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                Este enfoque de policía en el vecindario, aunque no se aplica de manera uniforme en toda España, ha mostrado ser efectivo para construir confianza entre los ciudadanos y mejorar la percepción de seguridad. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                A pesar de su relevancia, la Policía Local enfrenta numerosos retos. Uno de los más significativos es la carencia de personal y recursos. En muchas localidades, particularmente en las más pequeñas, los policías deben asumir varios turnos con plantillas reducidas y escaso equipo. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                Además, existe una disparidad entre los diferentes cuerpos locales, ya que las condiciones laborales, sueldos y recursos varían considerablemente de una ciudad a otra. Durante años, los sindicatos y asociaciones han exigido una legislación básica que asegure estándares mínimos para todos los policías en el país. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                También piden más capacitación y especialización, sobre todo frente a nuevas amenazas como los delitos informáticos, el aumento de agresiones a profesionales de la salud o las ocupaciones ilegales. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                A pesar de estas dificultades, el trabajo de la Policía Local sigue siendo fundamental para el correcto funcionamiento de nuestros pueblos y ciudades. Su adaptabilidad, proximidad y capacidad de respuesta convierten a estos agentes en una parte esencial de la convivencia ciudadana. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                Su trabajo discreto, a menudo poco reconocido, asegura que, ante cualquier inconveniente, siempre habrá una patrulla cercana dispuesta a ofrecer ayuda. 
                            </p>
                            <p className="text-sm text-gray-500 mt-8 font-bold">
                                Fuentes:<br />
                            </p>
                            <ul className="list-disc list-inside text-justify">
                                <li>https://academia-granada.es/oposiciones/funciones-policia-local/</li>
                                <li>https://www.santander.es/ayuntamiento/gobierno-municipal/organigrama-ayto-concejalias/concejalia-servicios/polic%C3%ADa-local/</li>
                                <li>https://vinfopol.com/9-competencias-de-la-policia-local-en-la-seguridad-ciudadana/</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};