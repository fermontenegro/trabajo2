import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar';
import Acordion from'./componentes/acordion';
import Carrusel from './componentes/carrusel';
import fondo1 from './imagenes/fondo1.jpg';
import imagen1 from './imagenes/ssHD.jpg';
import fondoN from './imagenes/fondo3.jpg';
import c1 from'./imagenes/Solar_sys.jpg';
import c2 from './imagenes/c2.jpg';
import c3 from './imagenes/c3.jpg';
import c4 from './imagenes/c4.jpg';
import c5 from './imagenes/c5.jpg';
import c6 from './imagenes/c6.jpg';

function App() {
  return (
    <div className="App">

        <Navbar/>

      <div className='contenedor1'>
        <div className='titulo1' id='inicio'>
          <h1>Que es el sistema Solar</h1>
        </div>
        <div className='background trans'><h5>Vivimos en un sistema planetario formado por el Sol y los cuerpos celestes que orbitan a su alrededor, entre ellos, nuestra Tierra.
          Hay muchos sistemas solares en el Universo, pero a este le llamamos, sencillamente, el Sistema Solar, ¡que para eso es el nuestro!
          El Sistema Solar es el conjunto de cuerpos que giran alrededor del Sol. Está conformado por planetas, satélites, asteroides, cometas.
          Más allá de este sistema, abundan estrellas, galaxias y toda la complejidad del Universo que el humano intenta conocer.</h5>
        </div>

        <div className='img1'><img className='imagen1' src={c6} /></div>

        <div id='aprende'> <h1 className='titulo2'>Aprende de nuestro Sistema Solar</h1></div>

        <div className='acoordion'>
          <Acordion/>
        </div>


      </div>

      <div className='contenedor2'>
        <div className='titulo3'><h1>Ve más de nuestro Sistema Solar</h1></div>

        <div className='carrusel' id='carrusel'>
          <Carrusel/>

        </div>

        <div className='titulo4' id='interesa'><h1>Te puede interesar</h1></div>

        <div className='iframe'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ati7Bq8FGQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>

      </div>

    </div>
  );
}

export default App;
