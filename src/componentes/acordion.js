import React from "react";
const Acordion = () => {
    return (
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        El Sol
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>El Sol (del latín sol, solis, ‘dios Sol invictus’ o ‘sol’, Helios en la mitología griega, a su vez de la raíz protoindoeuropea sauel-, ‘brillar’).</strong>  El Sol es una estrella, es decir, un cuerpo celeste que brilla con luz propia, compuesto de hidrógeno y helio a enormes temperaturas en estado de plasma. Es la estrella mas cercana a La Tierra y de la que depende toda la vida en ella. Concentrada en el Sol encontramos el 99,85% de toda la masa del Sistema Solar. <code></code>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Planetas
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Un planeta es un objeto astronómico que orbita una estrella y que es lo suficientemente masivo como para ser redondeado por su propia gravedad. </strong>  Desde la prehistoria y hasta el comienzo de la astronomía con telescopios, los planetas conocidos eran: Mercurio, Venus, Marte, Júpiter y Saturno ya que son los fácilmente visibles a simple vista.

                        Los orígenes de la observación de los planetas de los que hay registro se remontan a la civilización sumeria (3800 AEC. a 2000 AEC) cuya cultura, y especialmente su religión, repercutió en la mitología de otros pueblos antiguos de región de la Mesopotamia. Allí los planetas se identificaban con deidades de su religión de los que tomaban sus nombres <code></code>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Cinturon de asteroides
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Los asteroides son principalmente masas rocosas que pueden medir desde escasos metros a varios kilómetros de diámetro.</strong> Los asteroides pequeños se denominan meteoritos. El asteroide más grande, Ceres, tiene alrededor de 950 kilómetros de diámetro. Como la mayoría de los asteroides, se encuentra dentro del cinturón de asteroides situado entre Marte y Júpiter.

                        Muchos astrónomos consideran que este cinturón está compuesto por material primitivo del Sistema Solar que no pudo llegar a agruparse para formar un planeta debido a la fuerza gravitacional de Júpiter. Otros, en cambio, creen que el cinturón se formó tras la destrucción de un planeta durante una colisión. <code></code>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Acordion;