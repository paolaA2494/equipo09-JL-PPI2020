import React from 'react';
 import solo from '../Imagenes/solo.png'
 import espejito from '../Imagenes/espejito.png'
 import  desvanece  from '../Imagenes/desvanece.png'
 import '../Estilos/otro.css';
 import { Link } from 'react-router-dom';
 function  Otros  (){

    return (
          <div className="Otros">  

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
          <img src={espejito} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" className="bd-placeholder-img" />
      </div>
      <div className="carousel-item active carousel-item-left">
          <img src={solo} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" className="bd-placeholder-img" />
      </div>
      <div className="carousel-item carousel-item-next carousel-item-left">
      <img src={desvanece} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" className="bd-placeholder-img" />
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
  <h1>Otros</h1>
  <p><li><strong>Trastorno de Ansiedad:</strong>  La ansiedad es básicamente un mecanismo defensivo, 
  es un sistema de alerta ante situaciones consideradas amenazantes.El miedo y la ansiedad 
  son fenómenos estrechamente relacionados; el miedo representa una reacción a la amenaza 
  inminente percibida en el presente, mientras que la ansiedad está más orientada hacia el 
  futuro, refiriéndose a la amenaza anticipada percibida.</li></p>

 <p><li><strong>Trastorno Depresivos:</strong> Los trastornos depresivos se caracterizan por un estado de 
 ánimo depresivo (por ejemplo, tristeza, irritación, sensación de vacío) o pérdida de placer, 
 acompañado por otros síntomas cognitivos, conductuales o neurovegetativos que afectan significativamente 
 la capacidad del individuo de funcionar. Un trastorno depresivo no debe diagnosticarse en individuos 
 que han experimentado un episodio maniaco mixto o hipomaníaco, que indicaría la presencia de 
 un trastorno bipolar.</li></p>
 
<h4>Palabras Desconocidas: </h4>
<p><li><strong>Neurovegetativos:</strong> Sistema nervioso que controla el funcionamiento de las vísceras , 
las glándulas y los músculos involuntarios , y se divide en los sistemas simpático y parasimpático.</li> </p>    

        </div> 
        );

  }
export default Otros;