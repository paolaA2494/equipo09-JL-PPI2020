import React from 'react';
 import flor  from '../Imagenes/flor.png'
 import hilo from '../Imagenes/hilo.png'
 import  imgur  from '../Imagenes/imgur.png'
 import '../Estilos/sinto.css';
 import { Link } from 'react-router-dom';

 function Sintomas (){

    return (
          <div className="Sintomas">  
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
          <img src={imgur} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" className="bd-placeholder-img" />
      </div>
      <div className="carousel-item active carousel-item-left">
          <img src={flor} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" className="bd-placeholder-img" />
      </div>
      <div className="carousel-item carousel-item-next carousel-item-left">
      <img src={hilo} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" className="bd-placeholder-img" />
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
  <h1>Sintomas</h1> 
  
  <p><li><strong>Tipo l:</strong>Característicos como discurso rápido o sensación de presión interna por hablar más, fuga de ideas, 
     aumento de autoestima o grandiosidad, necesidad disminuida de sueño, comportamiento impulsivo 
     o imprudente, y cambios rápidos de estado de ánimo (es decir, labilidad emocional).</li></p>

<p><li><strong>Tipo ll:</strong> Los síntomas representan un cambio del comportamiento típico del individuo y no son lo 
    suficientemente graves para causar un deterioro marcado en el funcionamiento.</li></p>
        </div> 
        );

  }
export default Sintomas;