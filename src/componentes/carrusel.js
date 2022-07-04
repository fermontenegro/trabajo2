import React from "react";
import c1 from'../imagenes/Solar_sys.jpg';
import c2 from '../imagenes/c2.jpg';
import c3 from '../imagenes/c3.jpg';
import c4 from '../imagenes/c4.jpg';
import c5 from '../imagenes/c5.jpg';
import swal from "sweetalert";

const Carrusel = () => {

    return (
        <div className='carrusel'>
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img className='imgcarrusel' src={c1} useMap="#ss" />
              </div>
              <div class="carousel-item">
                <img className='imgcarrusel' src={c2} useMap="#mapsol"/>
              </div>
              <div class="carousel-item">
                <img className='imgcarrusel' src={c3} useMap="#tierra"/>
              </div>
              <div class="carousel-item">
                <img className='imgcarrusel' src={c4} useMap="#map"/>
              </div>
              <div class="carousel-item">
                <img className='imgcarrusel' src={c5} useMap="#map"/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        <map name="ss">
          <area shape="circle" href="" coords="300,200,100" alt="" onClick={swal("este es el sitema solar")}/>
        </map>

        <map name="mapsol">
          <area shape="circle" href="" coords="300,200,100" alt="" onClick={swal("Una de las imágenes, tomada por el Extreme Ultraviolet Imager (EUI), es la imagen de mayor resolución jamás tomada del disco completo del Sol y de su atmósfera exterior, la corona")}/>
        </map>

        </div>

    );

}

export default Carrusel;