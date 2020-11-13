import React from 'react';
import logo  from '../Imagenes/logo.png';
import '../Estilos/Estilos.css'; 
import { Link } from 'react-router-dom';

function Bienvenido() {
  return (
    <div className="Bienvenido">
     <div className="container1 mx-auto"> 
      
     <h1>TRASBIP</h1>
     <img src={logo} /> 
<div className="container col-6"> 
<Link to="/Inicio" className="text-decoration-none ">
<button type="button" className="  btn-block"> <b>Bienvenido</b></button>
</Link>
</div>
</div>
    </div>
  );
}

export default Bienvenido;



