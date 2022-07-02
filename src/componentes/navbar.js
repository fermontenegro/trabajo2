import React from "react";
import i1 from '../iconos/i1.png';

const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg bg-light sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Nuestro sistma Solar <img src={i1}/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#aprende">Aprende más</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#carrusel">Galeria</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#interesa">Te interesa</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
}

export default Navbar;