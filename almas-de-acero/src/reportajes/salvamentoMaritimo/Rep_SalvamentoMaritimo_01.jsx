import React from 'react';

export const Rep_SalvamentoMaritimo_01 = () => {
    return (
        <div>
            <div className="h-screen flex flex-col">
                <div className="flex-grow overflow-y-auto flex justify-center">
                    <div className="max-w-4xl py-8 px-0">
                        {/* Contenedor de imagen + título y autores */}
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            
                            {/* Título y autores (derecha en desktop, abajo en mobile) */}
                            <div className="md:w-2/3">
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                    Lo más peligroso del mar y sus superhéroes
                                </h1>
                                
                                <p className="text-lg font-semibold text-gray-600">
                                    Por: Pablo Vázquez y Sofía Toraya
                                </p>
                            </div>
                        </div>
                        {/* Texto del reportaje */}
                        <div className="space-y-4 text-gray-700 pb-20">
                            <p className="text-justify leading-relaxed">
                                En las costas del país peninsular hay puntos donde el mar no concede ningún tipo de tregua con los trabajadores de salvamento marítimo. El clima de estas zonas, la gran cantidad de tráfico o las rutas migratorias en pequeñas embarcaciones hace que en cualquier momento ocurra un suceso. Desde el mar revuelto y agresivo del Atlántico hasta las profundas aguas calientes llenas de fauna y flora de Canarias. Los equipos ponen constantemente su vida en peligro para proteger las vidas humanas de las personas que se lanzan al mar. Este reportaje trata de enseñar a los desconocedores de estas zonas muy activas y peligrosas para que la gente sepa que hacer y así no arriesgar su vida y la de los trabajadores de salvamento marítimo.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Estrecho de Gibraltar: la autopista del peligro</h3>
                            
                            <p className="text-justify leading-relaxed">
                                El Estrecho de Gibraltar es uno de los pasos marítimos más concurridos y complicados a nivel mundial. Con una extensión de apenas 14 kilómetros, esta vía une el océano Atlántico y el mar Mediterráneo, sirviendo como el principal enlace entre Europa y África. Su relevancia estratégica para el comercio global lo convierte en una de las áreas marítimas más activas del planeta. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                Cada día, el Estrecho recibe una gran cantidad de barcos comerciales, embarcaciones pesqueras, ferry para pasajeros y yates de recreo. No obstante, también se convierte en un punto peligroso para las embarcaciones inadecuadas usadas por migrantes que buscan llegar a Europa. La mezcla de este tráfico, combinada con el clima cambiante y la escasez de recursos en muchas de las embarcaciones, hace de esta área un sitio de gran riesgo para el salvamento marítimo. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                Las operaciones de rescate en el Estrecho ocurren en condiciones extremas, con intervenciones frecuentemente nocturnas, en aguas internacionales y con poca visibilidad. Las bases de Tarifa, Algeciras y Cádiz permanecen en alerta constante, coordinando múltiples operaciones cada día. La cercanía de aguas internacionales requiere una estrecha colaboración con las autoridades de Marruecos y Gibraltar. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                La presión continua sobre los recursos humanos y materiales en esta región ha provocado una alta demanda operativa. Las unidades de salvamento deben actuar rápidamente para prevenir tragedias, a menudo sin el tiempo necesario para evaluar completamente la situación del incidente. El Estrecho es, sin duda, uno de los lugares más críticos para el rescate marítimo en España. 
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cabo Finisterre: el filo del océano</h3>
                            
                            <p className="text-justify leading-relaxed">
                                En el noroeste peninsular, el Cabo Finisterre es temido por marinos desde hace siglos. No es casual que se le conozca como el "fin de la tierra", debido a sus condiciones meteorológicas. Los temporales del Atlántico, la niebla y las corrientes hacen que esta zona gallega sea una de las más peligrosas y traicioneras para la navegación de España y parte del mundo.
                            </p>
                            <p className="text-justify leading-relaxed">
                                "Lo que pasa aquí en invierno no lo ves en ningún otro sitio", explica José Luis, patrón de una embarcación de rescate y salvamento en Finisterre. "A veces salimos con olas de seis metros para buscar un barco pesquero sin comunicación. La visibilidad es mínima y el tiempo juega en contra".
                            </p>
                            <p className="text-justify leading-relaxed">
                                Las bases de Vigo, Finisterre y A Coruña, en la comunidad gallega, están constantemente en alerta, y los pescadores locales son aliados clave. "Aquí todos nos conocemos. Si no llegamos a tiempo, puede que un barco amigo ya esté ayudando", añade José Luis.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Islas Baleares: un mar de recreo con riesgos reales</h3>
                            
                            <p className="text-justify leading-relaxed">
                                Aunque el Mediterráneo parezca más amable o cercano, en temporada alta las Islas Baleares se convierten en uno de los escenarios con más intervenciones. La gran afluencia de embarcaciones de recreo, muchas veces con poca experiencia o mal equipadas, especialmente de turistas, genera un volumen importante de rescates y asistencias técnicas.
                            </p>
                            <p className="text-justify leading-relaxed">
                                "La mayoría no son situaciones extremas, pero requieren acción inmediata: un barco sin motor, una colisión entre veleros, una lancha que se incendia", explica Cristina, técnica de emergencias en la base de Palma. "El problema es que todo ocurre al mismo tiempo, y hay que priorizar con muy pocos recursos".
                            </p>
                            <p className="text-justify leading-relaxed">
                                En verano, la demanda se dispara. Incluso llegan a multiplicar por cuatro el trabajo del invierno. Los trabajadores denuncian que, a pesar del aumento de incidentes, no siempre se refuerzan los turnos ni los medios materiales.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Islas Canarias: el mar como frontera mortal</h3>
                            
                            <p className="text-justify leading-relaxed">
                                El Archipiélago de Canarias es un lugar crucial para el rescate marítimo en España debido a su posición en las rutas migratorias del Atlántico. Cada año, muchas personas intentan alcanzar las Islas en botes inseguros, poniendo en peligro sus vidas en un mar que muchas veces es desconocido. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                El trabajo de los equipos de rescate es difícil, ya que las distancias entre las islas y las condiciones cambiantes del océano hacen complicadas las operaciones. Además, la carencia de recursos en muchas de las embarcaciones migratorias aumenta el peligro de hundimientos. Los equipos de Salvamento Marítimo, con el apoyo de helicópteros y lanchas rápidas, enfrentan constantes problemas logísticos y operativos para asegurar la protección de los sobrevivientes en el mar. 
                            </p>
                            <p className="text-justify leading-relaxed pb-20">
                                La gran cantidad de tráfico marítimo y los rescates humanitarios convierten la zona en una de las más desafiantes para los profesionales de esta red de seguridad en el mar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};