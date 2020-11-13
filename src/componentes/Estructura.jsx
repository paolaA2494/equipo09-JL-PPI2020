import React from 'react';
import cosido from '../Imagenes/cosido.png'
import destrozado from '../Imagenes/destrozado.png'
import  vomite  from '../Imagenes/vomite.png'
import '../Estilos/estructura.css';
import { Link } from 'react-router-dom';

 function Estructura (){

    return (
          <div className="Estructura">  

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
          <img src={vomite} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" className="bd-placeholder-img" />
      </div>
      <div className="carousel-item active carousel-item-left">
          <img src={destrozado} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" className="bd-placeholder-img" />
      </div>
      <div className="carousel-item carousel-item-next carousel-item-left">
      <img src={cosido} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" className="bd-placeholder-img" />
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
  <h2>Estrucutra y funciòn del cerebro</h2>
 <p>Los investigadores están aprendiendo que la estructura y la función del cerebro en las 
     personas con trastorno bipolar pueden ser diferentes a las de aquellas personas que no tienen 
     este trastorno u otros de índole psiquiátrica. Aprender sobre la naturaleza de estos cambios 
     cerebrales ayuda a los médicos a comprender mejor el trastorno bipolar y en el futuro puede 
    ayudar a predecir qué tipos de tratamiento funcionarán mejor para una persona con este trastorno.</p>
        

        </div> 
        );

  }
export default Estructura;