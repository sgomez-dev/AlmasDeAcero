import React from 'react';

export const Rep_Bomberos_02 = () => {
    return (
        <div className="xl2:pt-16 pt-0 px-4">
            <div className="h-screen flex flex-col">
                <div className="flex-grow overflow-y-auto scrollbar-hide flex justify-center">
                    <div className="max-w-4xl py-8 px-0">
                        {/* Contenedor de imagen + título y autores */}
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            {/* Imagen (izquierda en desktop, arriba en mobile) */}
                            <div className="md:w-1/1">
                                <img
                                    src="/images/reportajes/bomberos/Rep_Bomberos_02.JPG"
                                    alt="Imagen del reportaje"
                                    className="w-full max-w-[600px] h-auto object-cover rounded-lg shadow-md"
                                />
                            </div>

                            {/* Título y autores (derecha en desktop, abajo en mobile) */}
                            <div className="md:w-2/3">
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                    Bomberos: Valor y Vocación
                                </h1>
                                
                                {/* Subtítulo */}
                                <h2 className="text-xl text-gray-600 mb-4">
                                    la razón, por la cual el día del bombero se celebra el día 4 de mayo en la mayoría de lugares del mundo
                                </h2>
                                
                                <p className="text-lg font-semibold text-gray-600">
                                    Autores: Pablo Vázquez, Sofía Toraya
                                </p>
                            </div>
                        </div>
                        {/* Texto del reportaje */}
                        <div className="space-y-4 text-gray-700 pb-20">
                            <p className="text-justify leading-relaxed">
                                En España, los bomberos son uno de los grupos más respetados por la comunidad. Su esfuerzo continuo en combatir incendios, llevar a cabo rescates en accidentes, atender emergencias naturales y enfrentarse a situaciones críticas los hace esenciales para la seguridad pública. A pesar de que no hay un día nacional específico oficialmente establecido como el Día del Bombero en España, hay días de reconocimiento en varias regiones. A nivel mundial, el 4 de mayo se considera una fecha simbólica para honrarlos.
                            </p>
                            <p className="text-justify leading-relaxed">
                                La labor de los bomberos en España ha cambiado con el tiempo. Desde las primeras brigadas formadas en el siglo XIX hasta los actuales servicios de rescate y extinción, su trabajo se ha caracterizado por el sacrificio, la dedicación y el servicio a la comunidad. Armados con tecnología avanzada, capacitación específica y un fuerte sentido del deber, los bomberos intervienen en diversas situaciones, que incluyen incendios en zonas urbanas y rurales, accidentes de automóviles, rescates en alturas o incidentes relacionados con productos químicos.
                            </p>
                            <p className="text-justify leading-relaxed">
                                Cada comunidad autónoma lleva a cabo sus propios tributos. Un ejemplo notable es el de la Comunidad de Madrid, donde el 8 de marzo se celebra el Día del Bombero, en honor a aquellos que fallecieron en un trágico incendio en la ciudad. Otras comunidades, como Cataluña, Valencia y Andalucía, también tienen sus propias fechas y eventos conmemorativos, donde se homenajea tanto a los bomberos activos como a los jubilados.
                            </p>
                            <p className="text-justify leading-relaxed">
                                En otro orden de ideas, el 4 de mayo, que es el Día Internacional del Bombero, se está volviendo cada vez más importante en varias partes del país. Esta conmemoración se estableció después de que cinco bomberos fallecieron en Australia en 1999 y se alinea con la celebración de San Florián, el santo de los bomberos, que es admirado por su valentía y dedicación.
                            </p>
                            <p className="text-justify leading-relaxed">
                                Durante estos eventos, los cuarteles de bomberos abren sus puertas a la comunidad, se llevan a cabo simulacros, se realizan actividades educativas, se rinden homenajes a los que han caído en cumplimiento del deber y se organizan encuentros con estudiantes para promover la prevención y el entendimiento sobre situaciones de emergencia. Estas actividades no solo tienen el propósito de rendir homenaje, sino que también buscan fortalecer el vínculo entre la sociedad y estos profesionales que a menudo ponen en riesgo su vida para salvar a otros.
                            </p>
                            <p className="text-justify leading-relaxed">
                                Ser bombero en España representa algo más que un trabajo. Es una elección de vida que se basa en brindar ayuda, valor y el deseo de servir a los demás, incluso en situaciones de gran dificultad. Por esta razón, a pesar de que no haya un día nacional establecido, cada homenaje, sin importar cuándo se realice, transmite el mismo mensaje: agradecimiento, respeto y admiración.
                            </p>
                            <p className="text-justify leading-relaxed pb-20">
                                De esta forma, el Día del Bombero en España, ya sea el 4 de mayo, el 8 de marzo en Madrid o cualquier otra fecha local, se convierte en una ocasión para recordar que, detrás del uniforme, hay personas dedicadas a la vida, la responsabilidad y la esperanza.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};