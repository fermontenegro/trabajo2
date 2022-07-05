import Mapareaa from "./Maparea.css";
import Tour from "../imagenes/Solar_sys.jpg";

const Maparea = () => {

    return (
        <>
            {/* Sol */}
            <div className="modal justify-content-center" id="modalSol">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">¡Seleccionaste el Sol!</h4>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>
                        </div>

                        <div className="modal-body">
                            El Sol (del latín sol, solis, ‘dios Sol invictus’ o ‘sol’, Helios
                            en la mitología griega, a su vez de la raíz protoindoeuropea
                            sauel-, ‘brillar’)4​ es una estrella de tipo-G de la secuencia
                            principal y clase de luminosidad V que se encuentra en el centro
                            del sistema solar y constituye la mayor fuente de radiación
                            electromagnética de este sistema planetario.5 Es una esfera casi
                            perfecta de plasma, con un movimiento convectivo interno que
                            genera un campo magnético a través de un proceso de dinamo. Cerca
                            de tres cuartas partes de la masa del Sol constan de hidrógeno; el
                            resto es principalmente helio, con cantidades mucho más pequeñas
                            de elementos, incluyendo el oxígeno, carbono, neón y hierro.
                        </div>

                        <div className="modal-footer justify-content-center">
                            <a href="https://es.wikipedia.org/wiki/Sol" target="_blank">
                                Leer Mas
                            </a>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tierra */}
            <div className="modal justify-content-center" id="modalTierra">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">¡Seleccionaste Tierra!</h4>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>
                        </div>

                        <div className="modal-body">
                            La Tierra (del latín Terra,17​ deidad romana equivalente a Gea,
                            diosa griega de la feminidad y la fecundidad) es un planeta del
                            sistema solar que gira alrededor de su estrella —el Sol— en la
                            tercera órbita más interna. Es el más denso y el quinto mayor de
                            los ocho planetas del sistema solar. También es el mayor de los
                            cuatro terrestres o rocosos. La Tierra se formó hace
                            aproximadamente 4550 millones de años y la vida surgió unos mil
                            millones de años después.18​ Es el hogar de millones de especies,
                            incluidos los seres humanos y actualmente el único cuerpo
                            astronómico donde se conoce la existencia de vida.19​ La atmósfera
                            y otras condiciones abióticas han sido alteradas
                            significativamente por la biosfera del planeta, favoreciendo la
                            proliferación de organismos aerobios, así como la formación de una
                            capa de ozono que junto con el campo magnético terrestre bloquean
                            la radiación solar dañina, permitiendo así la vida en la Tierra.
                        </div>
                        <div className="modal-footer justify-content-center">
                            <a href="https://es.wikipedia.org/wiki/Tierra" target="_blank">
                                Leer Mas
                            </a>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Luna */}
            <div className="modal justify-content-center" id="modalLunaTierra">
                <div className="modal-dialog">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h4 className="modal-title">¡Seleccionaste la Luna!</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>


                        <div className="modal-body">
                            La Luna es el único satélite natural de la Tierra. Con un diámetro ecuatorial de 3476 km, es el
                            quinto satélite más grande del sistema solar, mientras que en cuanto al tamaño proporcional respecto
                            a su planeta es el satélite más grande: un cuarto del diámetro de la Tierra y 1/81 de su masa. Es,
                            además, después de Ío, el segundo satélite más denso. Se encuentra en relación síncrona con la
                            Tierra, siempre mostrando la misma cara hacia el planeta. El hemisferio visible está marcado con
                            oscuros mares lunares de origen volcánico entre las brillantes montañas antiguas y los destacados
                            astroblemas.
                        </div>


                        <div className="modal-footer justify-content-center">
                            <a href="https://es.wikipedia.org/wiki/Luna" target="_blank">Leer Mas</a>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Marte */}
            <div className="modal justify-content-center" id="modalMarte">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">¡Seleccionaste Marte!</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar,
                            después de Mercurio. Recibió su nombre en homenaje al dios de la guerra de la mitología romana (Ares
                            en la mitología griega), y también es conocido como «el planeta rojo»3​4​ debido a la apariencia
                            rojiza5​ que le confiere el óxido de hierro predominante en su superficie. Marte es el planeta
                            interior más alejado del Sol. Es un planeta telúrico con una atmósfera delgada de dióxido de
                            carbono, y tiene dos satélites pequeños y de forma irregular, Fobos y Deimos (hijos del dios
                            griego), que podrían ser asteroides capturados6​7​ similares al asteroide troyano (5261) Eureka. Sus
                            características superficiales recuerdan tanto a los cráteres de la Luna como a los valles, desiertos
                            y casquetes polares de la Tierra.
                        </div>

                        <div className="modal-footer justify-content-center">
                            <a href="https://es.wikipedia.org/wiki/Marte_(planeta)" target="_blank">Leer Mas</a>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Jupiter */}
            <div className="modal justify-content-center" id="modalJupiter">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">¡Seleccionaste Jupiter!</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol.3​ Es un
                            gigante gaseoso que forma parte de los denominados planetas exteriores. Recibe su nombre del dios
                            romano Júpiter (Zeus en la mitología griega). Es uno de los objetos naturales más brillantes en un
                            cielo nocturno despejado, superado solo por la Luna, Venus y algunas veces Marte.4
                        </div>

                        <div className="modal-footer justify-content-center">
                            <a href="https://es.wikipedia.org/wiki/J%C3%BApiter_(planeta)" target="_blank">Leer Mas</a>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>
            
            {/* Saturno */}
            <div className="modal justify-content-center" id="modalSaturno">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">¡Seleccionaste Saturno!</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            Saturno es el sexto planeta del sistema solar contando desde el Sol, el segundo en tamaño y masa
                            después de Júpiter y el único con un sistema de anillos visible desde la Tierra. Su nombre proviene
                            del dios romano Saturno. Forma parte de los denominados planetas exteriores o gaseosos. El aspecto
                            más característico de Saturno son sus brillantes y grandes anillos. Antes de la invención del
                            telescopio, Saturno era el más lejano de los planetas conocidos y, a simple vista, no parecía
                            luminoso ni interesante. El primero en observar los anillos fue Galileo en 1610,1​ pero la baja
                            inclinación de los anillos y la baja resolución de su telescopio le hicieron pensar en un principio
                            que se trataba de grandes lunas.
                        </div>

                        <div className="modal-footer justify-content-center">
                            <a href="https://es.wikipedia.org/wiki/Saturno_(planeta)" target="_blank">Leer Mas</a>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Urano */}
            <div className="modal justify-content-center" id="modalUrano">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">¡Seleccionaste Urano!</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo.
                            Se llama así en honor de la divinidad griega del cielo Urano (del griego antiguo Οὐρανός), el padre
                            de Crono (Saturno) y el abuelo de Zeus (Júpiter). Aunque es detectable a simple vista en el cielo
                            nocturno, no fue catalogado como planeta por los astrónomos de la antigüedad debido a su escasa
                            luminosidad y a la lentitud de su órbita.13​ William Herschel anunció su descubrimiento el 13 de
                            marzo de 1781, ampliando las fronteras entonces conocidas del sistema solar, por primera vez en la
                            historia moderna. Urano es también el primer planeta descubierto por medio de un telescopio.
                        </div>

                        <div className="modal-footer justify-content-center">
                            <a href="https://es.wikipedia.org/wiki/Urano_(planeta)" target="_blank">Leer Mas</a>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Neptuno */}
            <div className="modal justify-content-center" id="modalNeptuno">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">¡Seleccionaste Neptuno!</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma
                            parte de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados, y
                            es el primero que fue descubierto gracias a predicciones matemáticas. Su nombre fue puesto en honor
                            al dios romano del mar —Neptuno—, y es el cuarto planeta en diámetro y el tercero más grande en
                            masa. Su masa es diecisiete veces la de la Tierra y ligeramente mayor que la de su planeta «gemelo»
                            Urano, que tiene quince masas terrestres y no es tan denso. En promedio, Neptuno orbita el Sol a una
                            distancia de 30,1 ua. Su símbolo astronómico es ♆, una versión estilizada del tridente del dios
                            Neptuno.
                        </div>

                        <div className="modal-footer justify-content-center">
                            <a href="https://es.wikipedia.org/wiki/Neptuno_(planeta)" target="_blank">Leer Mas</a>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Pluton */}
            <div className="modal justify-content-center" id="modalPluton">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">¡Seleccionaste Pluton!</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            Plutón, designado (134340) Pluto, es un planeta enano del sistema solar situado a continuación de la
                            órbita de Neptuno. Su nombre se debe al dios mitológico romano Plutón (Hades según la mitología
                            griega). En la Asamblea General de la Unión Astronómica Internacional celebrada en Praga el 24 de
                            agosto de 2006 se creó una nueva categoría llamada plutoide, en la que se incluye a Plutón. Es
                            también el prototipo de una categoría de objetos transneptunianos denominada plutinos. Plutón posee
                            una órbita excéntrica y altamente inclinada con respecto a la eclíptica, que recorre acercándose en
                            su perihelio hasta el interior de la órbita de Neptuno. Asimismo posee también cinco satélites:
                            Caronte, Nix, Hidra, Cerbero y Estigia,3​4​ los cuales son cuerpos celestes que comparten esa misma
                            categoría.
                        </div>

                        <div className="modal-footer justify-content-center">
                            <a href="https://es.wikipedia.org/wiki/Plut%C3%B3n_(planeta_enano)" target="_blank">Leer Mas</a>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Cometa */}
            <div className="modal justify-content-center" id="modalCometa">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header justify-content-center">
                            <h4 className="modal-title justify-content-center">¡Seleccionaste Cometa Halley!</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            El cometa Halley, oficialmente denominado 1P/Halley, es un cometa grande y brillante que orbita
                            alrededor del Sol cada 75 años en promedio; su período orbital puede oscilar entre 74 y 79 años.2
                            Es uno de los mejor conocidos y más brillantes cometas de "periodo corto" de la nube de Oort. Halley
                            es el único de período corto que es visible a simple vista desde la Tierra, y también el único
                            cometa a simple vista que quizás aparece dos veces en una vida humana, por lo que del mismo existen
                            muchas referencias de sus apariciones, siendo el mejor documentado.
                        </div>

                        <div className="modal-footer justify-content-center">
                            <a href="https://es.wikipedia.org/wiki/Cometa_Halley" target="_blank">Leer Mas</a>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Mercurio */}
            <div className="modal justify-content-center" id="modalMercurio">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">¡Seleccionaste Mercurio!</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            Mercurio es el planeta del sistema solar más cercano al Sol y el más pequeño. Forma parte de los
                            denominados planetas interiores y carece de satélites naturales al igual que Venus. Se conocía muy
                            poco sobre su superficie hasta que fue enviada la sonda planetaria Mariner 10 y se hicieron
                            observaciones con radar y radiotelescopios. Posteriormente fue estudiado por la sonda MESSENGER de
                            la NASA y actualmente la astronave de la Agencia Europea del Espacio (ESA) denominada BepiColombo,
                            lanzada en octubre de 2018, se halla en vuelo rumbo a Mercurio a donde llegará en 2025 y se espera
                            que aporte nuevos conocimientos sobre el origen y composición del planeta, así como de su geología y
                            campo magnético.
                        </div>

                        <div className="modal-footer justify-content-center">
                            <a href="https://es.wikipedia.org/wiki/Mercurio_(planeta)" target="_blank">Leer Mas</a>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Venus */}
            <div className="modal justify-content-center" id="modalVenus">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">¡Seleccionaste Venus!</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a
                            tamaño en orden ascendente después de Mercurio y Marte. Al igual que Mercurio, carece de satélites
                            naturales. Recibe su nombre en honor a Venus, la diosa romana del amor (en la Antigua Grecia,
                            Afrodita). Al ser el segundo objeto natural más brillante después de la Luna, puede ser visto en un
                            cielo nocturno despejado a simple vista. Se trata de un planeta interior de tipo rocoso y terrestre,
                            llamado con frecuencia el planeta hermano de la Tierra, ya que ambos son similares en cuanto a
                            tamaño, masa y composición, aunque totalmente diferentes en cuestiones térmicas y atmosféricas (la
                            temperatura media de Venus es de 463,85 °C).
                        </div>

                        <div className="modal-footer justify-content-center">
                            <a href="https://es.wikipedia.org/wiki/Venus_(planeta)" target="_blank">Leer Mas</a>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Cinturón */}
            <div className="modal justify-content-center" id="modalcinturon">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">¡Seleccionaste Cinturón de asteroides!</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            El cinturón de asteroides es un disco circunestelar del sistema solar que se encuentra entre las órbitas de Marte y Júpiter. 
                            Alberga multitud de objetos astronómicos, denominados asteroides, y al planeta enano Ceres. Esta región también se denomina cinturón principal con la 
                            finalidad de distinguirla de otras agrupaciones de cuerpos menores del sistema solar, como el cinturón de Kuiper o la nube de Oort.
                        </div>

                        <div className="modal-footer justify-content-center">
                            <a href="https://es.wikipedia.org/wiki/Cintur%C3%B3n_de_asteroides" target="_blank">Leer Mas</a>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>

            <map name="infographic" id="mapa">
                <area
                    shape="circle"
                    coords="630,349, 124"
                    href="https://es.wikipedia.org/wiki/Sol"
                    target="_blank"
                    alt="Sol"
                    data-bs-toggle="modal"
                    data-bs-target="#modalSol"
                />
                <area
                    shape="circle"
                    coords="909,350, 20"
                    target="_blank"
                    href="https://es.wikipedia.org/wiki/tierra"
                    data-bs-toggle="modal"
                    data-bs-target="#modalTierra"
                />
                <area
                    shape="circle"
                    coords="939,339, 6"
                    target="_blank"
                    href="https://es.wikipedia.org/wiki/luna"
                    data-bs-toggle="modal"
                    data-bs-target="#modalLunaTierra"

                />
                <area
                    shape="circle"
                    coords="987,292, 17"
                    target="_blank"
                    href="https://es.wikipedia.org/wiki/Marte_(planeta)"
                    data-bs-toggle="modal"
                    data-bs-target="#modalMarte"
                />
                <area
                    shape="circle"
                    coords="386,147, 35"
                    target="_blank"
                    href="https://es.wikipedia.org/wiki/J%C3%BApiter_(planeta)"
                    data-bs-toggle="modal"
                    data-bs-target="#modalJupiter"
                />
                <area
                    shape="circle"
                    coords="295,109, 28"
                    target="_blank"
                    href="https://es.wikipedia.org/wiki/Saturno_(planeta)"
                    data-bs-toggle="modal"
                    data-bs-target="#modalSaturno"
                />
                <area
                    shape="circle"
                    coords="224,92, 15"
                    target="_blank"
                    href="https://es.wikipedia.org/wiki/Urano_(planeta)"
                    data-bs-toggle="modal"
                    data-bs-target="#modalUrano"
                />

                <area
                    shape="circle"
                    coords="166,80, 14"
                    target="_blank"
                    href="https://es.wikipedia.org/wiki/Neptuno_(planeta)"
                    data-bs-toggle="modal"
                    data-bs-target="#modalNeptuno"
                />

                <area
                    shape="circle"
                    coords="23,73, 8"
                    target="_blank"
                    href="https://es.wikipedia.org/wiki/Plut%C3%B3n_(planeta_enano)"
                    data-bs-toggle="modal"
                    data-bs-target="#modalPluton"
                />

                <area
                    shape="circle"
                    coords="135,303, 15"
                    target="_blank"
                    href="https://es.wikipedia.org/wiki/Cometa_Halley"
                    data-bs-toggle="modal"
                    data-bs-target="#modalCometa"
                />
                <area 
                    shape="circle" 
                    coords="761,420, 9" 
                    target="_blank" 
                    href="https://es.wikipedia.org/wiki/Mercurio_(planeta)" 
                    data-bs-toggle="modal" 
                    data-bs-target="#modalMercurio" 
                />

                <area 
                    shape="circle" 
                    coords="840,391, 19" 
                    target="_blank" 
                    href="https://es.wikipedia.org/wiki/Venus_(planeta)" 
                    data-bs-toggle="modal" 
                    data-bs-target="#modalVenus"
                />
                <area 
                    shape="circle" 
                    coords="190,580, 70" 
                    target="_blank" 
                    href="https://es.wikipedia.org/wiki/Cintur%C3%B3n_de_asteroides" 
                    data-bs-toggle="modal" 
                    data-bs-target="#modalcinturon"
                />

            </map>
            <div className="container-tour">
                <div className="cardtour">
                    <img usemap="#infographic" src={Tour} alt="MDN infographic" />
                </div>
            </div>
        </>
    );
};

export default Maparea;