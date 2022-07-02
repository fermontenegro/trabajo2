import React from "react";
import c1 from'../imagenes/Solar_sys.jpg';
import c2 from '../imagenes/c2.jpg';
import c3 from '../imagenes/c3.jpg';
import c4 from '../imagenes/c4.jpg';
import c5 from '../imagenes/c5.jpg';


const Carrusel = () => {
    return (
        <div className='carrusel'>
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img className='imgcarrusel' src={c1} />
              </div>
              <div class="carousel-item">
                <img className='imgcarrusel' src={c2} />
              </div>
              <div class="carousel-item">
                <img className='imgcarrusel' src={c3} />
              </div>
              <div class="carousel-item">
                <img className='imgcarrusel' src={c4} />
              </div>
              <div class="carousel-item">
                <img className='imgcarrusel' src={c5} />
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

        </div>

    );

}

export default Carrusel;