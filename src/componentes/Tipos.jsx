import React from 'react';
 import cabeza from '../Imagenes/cabeza.png'
 import ojos from '../Imagenes/ojos.png'
 import  risa from '../Imagenes/risa.png'
 import '../Estilos/tipo.css';
 import { Link } from 'react-router-dom';

 function Tipos (){

    return (
          <div className="Tipos">  
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
          <img src={risa} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" className="bd-placeholder-img" />
      </div>
      <div className="carousel-item active carousel-item-left">
          <img src={ojos} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" className="bd-placeholder-img" />
      </div>
      <div className="carousel-item carousel-item-next carousel-item-left">
      <img src={cabeza} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" className="bd-placeholder-img" />
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
  <h1>Tipos</h1>
  <p><li><strong>El trastorno bipolar de tipo I:</strong>Es un trastorno episódico del estado de ánimo
     que se define por la ocurrencia de uno o varios episodios maníacos o mixtos.
     Un episodio maníaco es un estado de ánimo extremo de una duración de al menos
    una semana (a menos que se reduzca por una intervención de tratamiento).Un episodio
     mixto se caracteriza por una mezcla o una rápida alternancia de síntomas maníacos
     y depresivos prominentes durante la mayor parte de los días por un período de al 
  menos dos semanas. Aunque el diagnóstico pueda hacerse con base en la evidencia 
     de un episodio maníaco o mixto, generalmente los episodios maníacos o mixtos se
  alternan con episodios depresivos durante el curso del trastorno.</li></p> 

  <p><li><strong>El trastorno bipolar de tipo II:</strong>Es un trastorno episódico del estado de ánimo que se define por 
    la ocurrencia de uno o varios episodios maníacos y al menos un episodio depresivo.</li></p>

 <p><li><strong>Los síntomas: </strong>Representan un cambio del comportamiento típico del individuo y no son lo suficientemente graves para causar
      un deterioro marcado en el funcionamiento. No hay una historia de episodios maníacos o mixtos. </li></p>

        </div> 
        );

  }
export default Tipos;