import React from 'react';
import ani  from '../Imagenes/ani.png';
import espejo from '../Imagenes/espejo.png';
import  atrapado  from '../Imagenes/atrapado.png';
import '../Estilos/tras.css';
import { Link } from 'react-router-dom';
 function Tras1 (){

    return (
          <div className="Tras1">  

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/Menu" className="text-decoration-none "> 
  <a className="navbar-brand" href="#">TRASBIP</a>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active"> 
      <Link to="/Tras1" className="text-decoration-none "> 
        <a className="nav-link" href="#">¿Qué es? <span class="sr-only">(current)</span></a>
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
      <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/Sintomas" className="text-decoration-none "> 
        <a className="nav-link" href="#">Síntomas <span class="sr-only">(current)</span></a>
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
     
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/Tipos" className="text-decoration-none "> 
        <a className="nav-link" href="#">Tipos <span class="sr-only">(current)</span></a>
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
     
      
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/Otros" className="text-decoration-none "> 
        <a className="nav-link" href="#">Otros <span class="sr-only">(current)</span></a>
         </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
     
      
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item active"> 
      <Link to="/Estructura" className="text-decoration-none "> 
    <a className="nav-link" href="#">Estructura <span class="sr-only">(current)</span></a>
    </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li> 
      <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Ayuda <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
      <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Valoración de la App <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
      </ul>
    </ul>
    </ul>
     </ul>
  </div>
</nav> 

<div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className=""></li>
      <li data-target="#myCarousel" data-slide-to="1" className=""></li>
      <li data-target="#myCarousel" data-slide-to="2" className=""></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item">
          <img src={espejo} className="imagenb" alt="Responsive image" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"  />
      </div>
      <div className="carousel-item active carousel-item-left">
          <img src={ani} className="imagenb" alt="Responsive image" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" />
      </div>
      <div className="carousel-item carousel-item-next carousel-item-left">
      <img src={atrapado} className="imagenb" alt="Responsive image" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div> 
   <h1>¿Qué es?</h1>
   <p>Los trastornos bipolares y otros trastornos relacionados son trastornos episódicos del estado de ánimo definidos por la presencia de episodios o síntomas maníacos, mixtos o hipomaníacos. Estos episodios generalmente se alternan a lo largo del curso de estos trastornos con episodios depresivos o períodos de síntomas depresivos.</p>

<h4>Palabras Desconocidas:</h4>

<p><li><strong>Hipomaníacos:</strong> Es un afectivo caracterizado por un ánimo persistentemente expansivo, hiperactivo y/o irritable.</li></p>

<p><li><strong>Maniacos:</strong> Es un periodo delimitado y persistente, durante el cual hay un estado de ánimo anormalmente elevado, expansivo o irritable, menos frecuente que el depresivo y relativamente fácil de detectar</li></p>

<p><li><strong>Mixtos:</strong> Integrado por varios contextos. </li></p>

<p><li><strong>Depresivos: </strong>Es un trastorno mental frecuente, que se caracteriza por la presencia de tristeza, pérdida de interés o placer, sentimientos de culpa o falta de autoestima,
</li></p>

        </div> 
        );

  }
export default Tras1;