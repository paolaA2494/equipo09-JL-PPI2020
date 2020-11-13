 import React from 'react';
import arbol  from '../Imagenes/arbol.png'
import { Link } from 'react-router-dom';
import '../Estilos/inicio.css';

function Inicio (){

    return ( 
       
          <div className="Inicio text-center">  
          <img src={arbol} className="arbol"/>
          <div className="container "> 

          <Link to="/Entrada" className="text-decoration-none  ">
      <button type="button" className=" boton btn-block mb-2 col-6"> <b>Iniciar Sesión</b></button>
        </Link>
        <Link to="/Registrate" className="text-decoration-none ">
        <button type="button" className=" boton  btn-block col-6"> <b>Registrate</b></button> 
       </Link>
        </div>

    </div>


  );
}
export default Inicio;