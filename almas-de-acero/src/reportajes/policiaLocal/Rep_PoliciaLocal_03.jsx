import React from 'react';

export const Rep_PoliciaLocal_03 = () => {
    return (
        <div>
            <div className="h-screen flex flex-col">
                <div className="flex-grow overflow-y-auto flex justify-center">
                    <div className="max-w-4xl py-8 px-0">
                        {/* Contenedor de imagen + título */}
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            {/* Imagen principal */}
                            <div>
                                <img
                                    src="images/reportajes/policiaLocal/Rep_PoliciaLocal_03_1.jpg"
                                    alt="Problema de okupación en pueblos españoles"
                                    className="w-full h-[250px] rounded-lg shadow-md object-cover"
                                />
                                <p className="text-xs text-gray-500 mt-1">Imagen: El mundo</p>
                            </div>
                            {/* Título y autor */}
                            <div className="md:w-2/3 flex flex-col justify-center">
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                    (OK)upación en los pueblos de España
                                </h1>
                                <h2 className="text-xl text-gray-600 mb-4">
                                    Sin pagar impuestos ni gastos, viven en los chalets de pueblos
                                </h2>
                                <p className="text-lg font-semibold text-gray-600">
                                    Por Sofía Toraya. Miércoles, 14/05/2025
                                </p>
                            </div>
                        </div>
                        {/* Texto del reportaje */}
                        <div className="space-y-4 text-gray-700 pb-20">
                            <p className="text-justify leading-relaxed">
                                El fenómeno de la okupación de viviendas en los últimos años ha generado una preocupación social y política muy intensa en toda España, pero solo se ve su relevancia en las ciudades ya que estas tienen la atención mediática, dejando en una preocupación silenciosa en los pueblos. A pesar de que su verdadera frecuencia es inferior a lo que la opinión pública cree, el análisis en los medios de comunicación y el lenguaje político han llevado a un aumento en la sensación de peligro, sobre todo en pequeñas localidades y áreas urbanas en riesgo. En este escenario, las fuerzas policiales locales enfrentan una situación difícil debido a que reciben la presión de la comunidad, teniendo así restricciones por leyes y a menudo llegan a carecer de los recursos necesarios para proceder de manera efectiva.
                            </p>

                            <p className="text-justify leading-relaxed">
                                Uno de los casos más impactantes sobre esto es lo ocurrido en las Chozas de Canales (Toledo) en él se estima que aproximadamente un 35% de la población son okupas, y tan solo son 4887 habitantes. Esto se debe a que en su mayoría los "inquilinos" son estafados por mafias que venden llaves de las casas vacías a precios muy bajos en comparación al precio establecido por el mercado. Y además según aseguran los vecinos del pueblo y los servicios de seguridad no se ha conseguido poner orden, esto ha causado a los residentes de la zona una sensación de abandono por parte del Estado, ya que, no hacen nada para remediarlo. El método es siempre el mismo: venden la casa por un precio ridículo, las redes organizadas distribuyen las llaves, estos llegan y se instalan alterando así la convivencia con los vecinos, haciendo que muchos hayan preferido irse a seguir viviendo en ese ambiente.
                            </p>

                            <p className="text-justify leading-relaxed">
                                El problema ya ha pasado a ser grave debido a la falta de medios por parte del Estado, a causa de que se ven superadas por las mafias que actúan sin ningún tipo de impunidad, enganchando a la luz de los habitantes ilegalmente.
                            </p>

                            <p className="text-justify leading-relaxed">
                                Este no es un caso aislado pero sí el más conocido, podemos ver como en numerosos pueblos de las comunidades, Castilla-La Mancha, Castilla y León y Andalucía; esto demuestra como siempre siguen el mismo patrón, lugares con poca seguridad, casa vacías el ayuntamientos que se encuentran en mal estado debido a los bajos recursos que tienen y además la población ya se encuentra envejecida.
                            </p>

                            <p className="text-justify leading-relaxed">
                                La dimensión de este problema va cada vez más en aumento, según datos del Ministerio del Interior, en el año 2023, bajó un 9% en comparación al año anterior, aunque en 2024 volvió a subir. No obstante, aunque casi el 40% de las ocupaciones sean en Cataluña el impacto más emocional se causa en los pueblos debido a la cantidad de población que hay y que normalmente todos se conocen entre ellos. En zonas urbanas se da más relevancia pero no genera el mismo impacto social ya que altera la dinámica de la comunidad.
                            </p>

                            {/* Data source section with second image */}
                            <div className="flex flex-col items-center mb-6">
                                <img
                                    src="images/reportajes/policiaLocal/Rep_PoliciaLocal_03_2.png"
                                    alt="Datos estadísticos sobre okupación en pueblos"
                                    className="w-auto h-[300px] rounded-lg shadow-md object-cover mb-3"
                                />
                                <p className="text-sm text-gray-600">Datos extraídos de: Wolo</p>
                                <p className="text-sm text-gray-600">Gráfico realizado por: Sofía Toraya</p>
                            </div>

                            <p className="text-justify leading-relaxed">
                                El miedo a la ocupación ha motivado a algunos propietarios a no volver a sus viviendas en la localidad o incluso a venderlas por un precio inferior a su valor. Además, ha crecido la necesidad de servicios de vigilancia privada, cerraduras antiokupas y seguros particulares, además de muchas empresas que se dedican a mediar y así expulsarlos del hogar de las personas, a pesar de que estos no siempre son eficaces.
                            </p>

                            <p className="text-justify leading-relaxed">
                                Lo más preocupante es que, en muchas localidades, la falta de trabajo es simplemente el espejo de un problema más extenso: el desamparo de las instituciones y el malestar general de los vecinos por no sentirse protegidos. La falta de vivienda asequible tanto en grandes ciudades como en pueblos, las brechas legales respecto a determinadas propiedades y la desconexión del ambiente rural... Todo esto ayuda a generar un entorno favorable para que se reproduzca lo sucedido en Chozas de Canales.
                            </p>

                            <p className="text-justify leading-relaxed">
                                La okupación en los pueblos no es únicamente quedarse con una casa que no les corresponde sino también la fragilidad que causa esto en el pueblo, haciendo que muchos se vayan por miedo a ser dañados. Demuestra que antes esta situación es necesaria la rápida intervención para que no consigan su objetivo y que luego los servicios de emergencia no tengan que ponerse en riesgo y se agilice todo. Esto no es juego está en riesgo la convivencia en los pueblos y donde la mayoría de abuelos se han criado dejando un legado familiar ahí.  
                            </p>

                            <div className="mt-8 pt-4 border-t border-gray-200">
                                <h3 className="font-bold text-lg mb-4">Fuentes y enlaces relacionados:</h3>
                                <ul className="space-y-2 text-blue-600">
                                    <li><a href="https://as.com/actualidad/sociedad/este-pueblo-ha-sido-tomado-por-los-okupas-y-ni-la-policia-ni-la-guardia-civil-pueden-poner-orden-n/" target="_blank" rel="noopener noreferrer">AS: El pueblo tomado por okupas</a></li>
                                    <li><a href="https://cadenaser.com/castillalamancha/2024/08/27/roberto-teruel-nuevo-jefe-de-la-policia-local-de-tarancon-anuncia-sus-proximos-objetivos-radio-tarancon/" target="_blank" rel="noopener noreferrer">Cadena Ser: Nuevo jefe de policía local</a></li>
                                    <li><a href="https://www.epdata.es/datos/denuncias-okupacion-graficos/560" target="_blank" rel="noopener noreferrer">EpData: Estadísticas de okupación</a></li>
                                    <li><a href="https://www.huffingtonpost.es/sociedad/preocupacion-pueblos-espana-nuevo-objetivo-okupas-dificil-evitar.html" target="_blank" rel="noopener noreferrer">HuffPost: Pueblos como nuevo objetivo</a></li>
                                    <li><a href="https://www.wolorent.com/blog/cuantas-okupaciones-hubo-en-espana-en-2023" target="_blank" rel="noopener noreferrer">WoloRent: Okupaciones en 2023</a></li>
                                    <li><a href="https://cadenaser.com/nacional/2025/02/03/uno-de-cada-cinco-espanoles-sienten-la-okupacion-como-un-problema-mucho-mayor-del-real-la-propaganda-y-el-miedo-funcionan-cadena-ser/" target="_blank" rel="noopener noreferrer">Cadena Ser: Percepción del problema</a></li>
                                    <li><a href="https://www.wolorent.com/blog/cuantas-okupaciones-hubo-en-espana-en-2023" target="_blank" rel="noopener noreferrer">WoloRent: Datos de okupación 2023</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};