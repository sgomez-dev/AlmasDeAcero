import React from 'react';

export const Rep_Militares_01 = () => {
    return (
        <div>
            <div className="h-screen flex flex-col">
                <div className="flex-grow overflow-y-auto flex justify-center">
                    <div className="max-w-4xl py-8 px-0">
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            <div>
                                <img
                                    src="/images/reportajes/militares/Rep_Militares_01.PNG"
                                    alt="Entrevista a José María Grande Urquijo"
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                                <p className="text-xs text-gray-500 mt-1">Foto: Archivo personal</p>
                            </div>

                            <div className="md:w-2/3">
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                    Entrevista a D. José María Grande Urquijo
                                </h1>
                                 <p className="text-lg font-semibold text-gray-600">
                                    Autores: Pablo Vázquez, Sofía Toraya
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 text-gray-700 pb-20">
                            <p className="text-justify leading-relaxed">
                                D. José María Grande Urquijo ingresó al Ejército español en 1971, siguiendo los pasos de su padre. Participó en la “Marcha Verde” en 1975, fue Jefe de Inteligencia en la guerra de Bosnia-Herzegovina, y estuvo activo en los conflictos del Magreb y Oriente Medio. Además, fue agregado militar en París, jefe del departamento de comunicación del Ejército de Tierra y delegado de Defensa en Cantabria. Fuera del ámbito militar, se ha dedicado a la docencia y ha publicado numerosos artículos sobre el Islam y geopolítica.
                            </p>

                            <p className="font-semibold">¿Cuáles son las diferencias fundamentales en los conflictos del Magreb y Oriente Medio?</p>
                            <p className="text-justify leading-relaxed">
                                El Magreb y Oriente Medio son teatros estratégicos diferentes, aunque ambos dominados por el islam. En el Magreb, la amenaza principal es el Sahel, donde operan grupos yihadistas como Al Qaeda. Es una zona muy pobre, lo que lleva a sus habitantes a radicalizarse o emigrar a Europa ilegalmente. En Oriente Medio, el problema radica en el conflicto con Israel, que los países árabes no reconocen como nación. Irán juega un papel clave, abasteciendo a grupos como Hezbolá y Hamas.
                            </p>

                            <p className="font-semibold">¿Te ha tocado intervenir en lo que ocurre entre India y Pakistán?</p>
                            <p className="text-justify leading-relaxed">
                                No, porque nuestras misiones son siempre en el marco de la OTAN, incluso si están bajo mandato de Naciones Unidas. La ONU no tiene fuerzas propias, por lo que encarga las misiones a organizaciones como la OTAN o la Unión Europea.
                            </p>

                            <p className="font-semibold">¿La ONU puede mediar en el conflicto entre India y Pakistán, especialmente por lo nuclear?</p>
                            <p className="text-justify leading-relaxed">
                                Puede intentarlo, pero el tema nuclear es complejo. No es lo mismo que tengan armas nucleares países como Francia o EE.UU. que países como Corea del Norte o Pakistán. El riesgo de una decisión impulsiva siempre está presente.
                            </p>

                            <p className="font-semibold">¿Ves alguna similitud entre Cachemira, Rusia-Ucrania o Palestina-Israel?</p>
                            <p className="text-justify leading-relaxed">
                                Cachemira es una zona disputada por India y Pakistán debido a una mala división realizada por el Reino Unido. Palestina-Israel es un conflicto de extremismos. A pesar de intentos de paz, los radicales de ambos lados impiden acuerdos. Israel, con una historia milenaria en la región, fue reconocido como Estado en 1948 por la ONU. El conflicto palestino-israelí es profundamente complejo.
                            </p>

                            <p className="font-semibold">¿Qué es problemático del Magreb para Europa?</p>
                            <p className="text-justify leading-relaxed">
                                La inmigración. El islam radical considera inferior todo lo ajeno a su religión. Aunque muchos musulmanes no siguen esa interpretación, los yihadistas sí. En el Corán hay numerosas asoras que instan a combatir a los no creyentes.
                            </p>

                            <p className="font-semibold">¿Qué es la Yihad?</p>
                            <p className="text-justify leading-relaxed">
                                Yihad significa "Guerra Santa". Mahoma hablaba de una Yihad mayor, que es la lucha interna del creyente, y una menor, que es la guerra para expandir el islam. Los salafistas dieron gran importancia a esta última, que inspira al yihadismo actual.
                            </p>

                            <p className="text-justify leading-relaxed">
                                En los años 50, los españoles emigraban con contratos. Hoy día, países como Ecuador, México o Colombia tienen regulaciones estrictas para entrar. Es lógico que los países protejan sus fronteras. Quien viene, debe hacerlo legalmente.
                            </p>

                            <p className="font-semibold">¿Qué opinas sobre Putin?</p>
                            <p className="text-justify leading-relaxed">
                                Putin no busca resucitar la URSS, sino recuperar los territorios que poseía. Rusia se extiende más en Asia que en Europa. Además, nunca habla de la Unión Europea, sino de "la Europa de los pueblos" y prefiere negociaciones bilaterales.
                            </p>

                            <p className="font-semibold">¿Y sobre Donald Trump?</p>
                            <p className="text-justify leading-relaxed">
                                Trump es predecible: dice lo que piensa sin filtros. Es empresario antes que político, y eso marca su estilo de liderazgo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
