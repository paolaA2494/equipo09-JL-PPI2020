import React from 'react';
import '../Estilos/poli.css';
import logo  from '../Imagenes/logo.png';
import { Link } from 'react-router-dom';

function Politicas (){

    return (
        
   <div className="Politicas">
   <div className="container "> 
   <h1>Politicas de Privacidad</h1>
   <img src={logo} /> 
  <p>Para complementar el Registro, debes aceptar las Politicas de Privacidad y Terminos de Servicio</p>
  <Link to="/Menu" className="text-decoration-none "> 
<button type="button" className=" boton btn-block mb-2 col-6"> <b>ACEPTAR</b></button>
</Link>
<Link to="/Inicio" className="text-decoration-none ">
<button type="button" className=" boton btn-block  col-6"> <b>CANCELAR</b></button>
</Link>
</div>

        </div>

       )

;} export default Politicas; 