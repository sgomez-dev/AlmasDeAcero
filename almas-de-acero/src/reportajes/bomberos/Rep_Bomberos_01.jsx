import React from 'react';

export const Rep_Bomberos_01 = () => {
    return (
        <div>
            <div className="h-screen flex flex-col">
                <div className="flex-grow overflow-y-auto flex justify-center">
                    <div className="max-w-4xl  py-8 px-0">
                        {/* Contenedor de imagen + título y autores */}
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            {/* Imagen (izquierda en desktop, arriba en mobile) */}
                            <div>
                            <img
                                src="/images/reportajes/bomberos/Rep_Bomberos_01.jpg"
                                alt="Imagen del reportaje"
                                class="w-full h-auto rounded-lg shadow-md object-cover"
                            />
                            <p class="text-xs text-gray-500 mt-1">Foto: Propiedad de los Bomberos de Santander</p>
                        </div>

                            
                            {/* Título y autores (derecha en desktop, abajo en mobile) */}
                            <div className="md:w-2/3">
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                    El día que el viento sur arrasó Santander
                                </h1>
                                
                                {/* Subtítulo */}
                                <h2 className="text-xl text-gray-600 mb-4">
                                    el día que un incendio calcinó todo el casco histórico de Santander y parte de sus alrededores, dejando gran parte de la población sin sus viviendas
                                </h2>
                                
                                <p className="text-lg font-semibold text-gray-600">
                                    Autores: Pablo Vázquez, Sofía Toraya
                                </p>
                            </div>
                        </div>
                        {/* Texto del reportaje */}
                        <div className="space-y-4 text-gray-700 pb-20">
                            <p className="text-justify leading-relaxed">
                                El 15 de febrero de 1941, Santander experimentó uno de los días más dolorosos y cambiantes de toda su historia. Esa noche, un inusual viento seco y cálido del sur empezó a soplar con gran fuerza en la ciudad. A medida que pasaba el tiempo, su potencia creció de manera preocupante, transformándose en un ciclón de gran escal, atípico en la ciudad,  que no solo alteró el clima normal de la ciudad costera, sino que también causó una tragedia que cambiaría para siempre la vida de los habitantes de Santander. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                Las ráfagas de viento se intensificaron tanto que los anemómetros colocados en diferentes lugares de Santander se volvieron ineficaces, sin poder medir la velocidad real del fuerte temporal. En medio de este desorden, un fuego comenzó a propagarse rápidamente, aunque no se ha aclarado su causa exacta.  Se sospecha que pudo comenzar en una estufa, una chimenea o incluso debido a un cortocircuito. El ciclón avivó con mucha potencia las llamas, que se movían sin control por el centro de la ciudad, destruyendo todo a su alrededor. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                El área histórica fue la que sufrió más daños, quedando en ruinas. Sus vías angostas, su disposición desordenada y la gran cantidad de construcciones de madera ayudaron a que el fuego se expandiera fácilmente. La mezcla de materiales que ardían con facilidad, la cercanía de las estructuras y la intensidad del viento convirtieron el incendio en una verdadera tragedia para la ciudad. En cuestión de pocas horas, el núcleo de Santander se hallaba completamente arrasado, abarcando también la catedral que se encontraba en un lugar central de la ciudad. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                Se calcula que el fuego tuvo una extensión de 14 hectáreas, causando que muchos edificios, casas y estructuras importantes quedarán dañados. Aproximadamente 10. 000 personas se vieron perjudicadas, y muchas perdieron sus casas, trabajos y medios de subsistencia. Esta tragedia también provocó un fuerte golpe económico: cerca del 90% de las operaciones comerciales en la ciudad se detuvieron, debido a las pérdidas en los locales y la destrucción completa de infraestructuras. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                El legado histórico de la ciudad también sufrió un daño irreversible. Las llamas destruyeron edificaciones de gran importancia arquitectónica, que pertenecían a diversas épocas, como la romana, la medieval y la renacentista. La pérdida de estas construcciones no solo causó un perjuicio material, sino que también dejó un vacío cultural que todavía se recuerda con tristeza. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                La gravedad de la tragedia llevó a solicitar asistencia inmediata a los servicios de bomberos de otras localidades. Equipos de Oviedo, Gijón, Avilés, Bilbao, e incluso de Madrid, llegaron a Santander para ayudar en la lucha contra el fuego. Centenares de trabajadores se esforzaron durante varios días en condiciones difíciles, tratando de contener un incendio que parecía interminable.  Al mismo tiempo, se establecieron operativos de ayuda para socorrer a los afectados, ofreciendo refugio, comida y atención médica a quienes se habían quedado sin nada. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                Después del desastre, Santander tuvo que afrontar el gran reto de volver a levantarse. La ciudad nunca volvió a ser la misma. Se tuvo que planear un nuevo centro urbano, con una disposición diferente a la que había antes del incendio. Este trabajo supuso un cambio radical en el diseño del espacio, tanto público como privado, creando una ciudad nueva, moderna y más organizada, pero que también dejó atrás el aspecto tradicional que la había definido durante siglos. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                La reconstrucción requirió una fuerte participación de la comunidad. Fue necesario reubicar a miles de personas, construir nuevas casas, así como crear servicios e infraestructuras. Según varios estudios, este proceso también trajo consigo un cambio demográfico importante: muchos de los habitantes tradicionales del centro fueron trasladados a otras partes de la ciudad, lo que resultó en una nueva distribución de la población y una diferente estructura social en Santander. 
                            </p>
                            <p className="text-justify leading-relaxed">
                                Con el tiempo, este triste evento ha sido analizado en numerosos estudios, exposiciones y actividades educativas. Proyectos como la "Ruta del Incendio de Santander" permiten a los habitantes y turistas visitar los lugares más afectados por el fuego, recuperando en la memoria lo que las llamas arrasaron. Estas rutas intentan no solo recordar, sino también enseñar a las nuevas generaciones sobre el impacto que tuvo el incendio en la identidad urbana y cultural de la ciudad. 
                            </p>
                            <p className="text-justify leading-relaxed pb-20">
                                Hoy, más de ochenta años después, el devastador incendio de 1941 aún es una marca clara en la historia de Santander. Su impacto se nota no solo en el diseño de sus calles y en el estilo de los edificios del centro, sino también en la memoria compartida de su gente. Ese viento del sur, tan inusual como destructivo, no solo transformó el aspecto de la ciudad, sino también el futuro de sus habitantes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};