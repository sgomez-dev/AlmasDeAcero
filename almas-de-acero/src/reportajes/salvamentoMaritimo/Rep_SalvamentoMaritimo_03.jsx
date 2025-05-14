import React from 'react';

export const Rep_SalvamentoMaritimo_03 = () => {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col">
                <div className="flex-grow overflow-y-auto flex justify-center px-4">
                    <div className="max-w-4xl w-full py-8">
                        {/* Header section */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                Mujeres rompiendo los estereotipos
                            </h1>
                            
                            <h2 className="text-xl text-gray-600 mb-4">
                                Las mujeres de Salvamento Marítimo frente a un trabajo mayoritariamente predominado por los hombres
                            </h2>
                            
                            <p className="text-lg text-gray-600 border-b pb-4">
                                <span className="font-semibold">Por:</span> Sofía Toraya Bárcena
                            </p>
                        </div>
                        
                        {/* Article content */}
                        <div className="space-y-6 text-gray-700 pb-12">
                            <p className="text-justify leading-relaxed">
                                En el contexto de peligrosas olas y rescates difíciles, un pequeño pero fuerte grupo de mujeres avanza en una de las profesiones con mayor predominancia masculina: el salvamento en el mar. A pesar de ser una minoría en el equipo español, su trabajo es crucial y su participación es cada vez más requerida. Esta es la narración de mujeres que se enfrentan no solo al océano, sino también a una cultura laboral que se caracteriza por la desigualdad.
                            </p>
                            
                            <p className="text-justify leading-relaxed">
                                La vocación sobrepasa los obstáculos y los peligros de esta profesión tan arriesgada para la vida de los trabajadores de Salvamento Marítimo.
                            </p>
                            
                            <p className="text-justify leading-relaxed">
                                El trayecto hacia el océano ha sido complicado para muchas de ellas. En relatos publicados por medios como RTVE y CGT Mar y Puertos, algunas de las primeras en este campo recuerdan cómo fueron desechadas repetidamente en los muelles, solo por ser mujeres. Necesitaron esforzarse el doble para recibir la mitad del reconocimiento.
                            </p>
                            
                            <p className="text-justify leading-relaxed">
                                Rosa María Marín, miembro de Salvamento Marítimo, recuerda las dificultades que enfrentó al inicio de su trayectoria profesional. Hoy en día es un ejemplo dentro del servicio, demostrando que la tenacidad puede abrir oportunidades incluso en los espacios más difíciles.
                            </p>
                            
                            <p className="text-justify leading-relaxed">
                                Mientras algunas mujeres están en el frente de batalla, muchas otras contribuyen desde el trasfondo: son técnicas, coordinadoras o parte del equipo de rescate en el suelo. Sofía Hernández, quien lidera el centro de coordinación de Las Palmas, coordina operaciones críticas con una precisión excepcional. Su trabajo puede no ser visible para la mayoría, pero es esencial en cada misión de rescate.
                            </p>
                            
                            <p className="text-justify leading-relaxed">
                                En las playas y costas, la situación es similar. Rescatistas como Silvia Arroyo y Patricia Díaz comentan sobre la inestabilidad laboral: sueldos bajos, turnos de hasta doce horas y condiciones que no siempre garantizan la seguridad adecuada. Además, enfrentan la presión de trabajar en un entorno donde la representación de mujeres es limitada.
                            </p>
                            
                            <p className="text-justify leading-relaxed">
                                Uno de los principales problemas que enfrentan las mujeres en este campo es la dificultad para equilibrar su vida laboral y personal. Las largas horas de trabajo, los turnos cambiantes y la necesidad de desplazamientos lejanos complican esta combinación. Muchas mujeres, a pesar de estar bien preparadas, deciden dejar sus empleos porque no pueden seguir ese ritmo.
                            </p>
                            
                            <p className="text-justify leading-relaxed">
                                Sin embargo, hay quienes perseveran. Selene Morales, por ejemplo, piensa que ha tenido una experiencia favorable. Aunque admite que hay comentarios y comportamientos sexistas, sostiene que sus compañeros valoran su trabajo y argumenta que es fundamental destacar más modelos a seguir femeninos en la industria.
                            </p>
                            
                            <p className="text-justify leading-relaxed">
                                La aparición de la mujer en este mundo va siendo cada vez más habitual. El día 12 de octubre durante el desfile militar se veía que había un 20% de mujeres aproximadamente.
                            </p>
                            
                            <p className="text-justify leading-relaxed">
                                Los datos indican que el progreso todavía avanza lentamente. Las mujeres continúan siendo una minoría en el ámbito del salvamento profesional y en el rescate en playas. Las dificultades culturales y estructurales siguen presentes, aunque cada vez hay más mujeres capacitándose y demandando su espacio.
                            </p>
                            
                            <p className="text-justify leading-relaxed">
                                Entidades como CGT Mar y Puertos han empezado a destacar estas narrativas, mientras que medios como RTVE o YoDona ayudan a difundir sus relatos. Esto ha permitido que el rol de las mujeres en el mar sea valorado no solo por su valentía, sino también por su profesionalismo.
                            </p>
                            
                            {/* Sources section */}
                            <div className="mt-8 pt-4 border-t">
                                <h3 className="font-bold text-gray-800 mb-2">Fuentes:</h3>
                                <ul className="text-sm space-y-1">
                                    <li><a href="https://www.elmundo.es/yodona/lifestyle/2019/01/26/5c46ef97fc6c8307438b4595.html" className="text-blue-600 hover:underline">YoDona: Mujeres en Salvamento Marítimo</a></li>
                                    <li><a href="http://www.salvamentomaritimo.es/pilar-tejo-fue-la-primera-mujer-directora-de-salvamento-maritimo" className="text-blue-600 hover:underline">Salvamento Marítimo: Pilar Tejo</a></li>
                                    <li><a href="https://www.rtve.es/television/20240622/mujeres-socorristas-salvamento-maritimo-dificultades-trabajar-profesion-masculinizada/16134009.shtml" className="text-blue-600 hover:underline">RTVE: Mujeres socorristas</a></li>
                                    <li><a href="https://marypuertos.org/portada/mujeres-socorristas-y-en-salvamento-maritimo-las-dificultades-de-trabajar-en-una-profesion-masculinizada/" className="text-blue-600 hover:underline">CGT Mar y Puertos</a></li>
                                    <li><a href="http://www.salvamentomaritimo.es/sala-de-comunicacion/sala-de-prensa/las-mujeres-de-salvamento-maritimo-participan-en-el-desfile-del-12-de-octubre" className="text-blue-600 hover:underline">Salvamento Marítimo: Desfile 12 de octubre</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};