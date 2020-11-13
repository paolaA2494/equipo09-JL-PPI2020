import React from 'react';
import logo from '../Imagenes/logo.png'
import { Link } from 'react-router-dom';
import '../Estilos/sesi.css';

 function Entrada(){

    return (
          <div className="Entrada">
   <Link to="/Inicio" className="text-decoration-none ">
 <img src={logo} />
 </Link>
       <h3>Iniciar sesión en TrasBip</h3>

       <form>
       <div className="form-row">
       <div className="form-group col-md-6">
      <label for="inputEmail4">Correo electronico</label>
      <input type="email" className="form-control" id="inputEmail4"></input>
    </div> 
    <div className="form-group col-md-6">
      <label for="inputPassword4">Contraseña</label>
      <input type="password" className="form-control" id="inputPassword4"></input>
    </div>
  </div>
  <div className="container "> 
  <Link to="/Menu" className="text-decoration-none ">
  <button type="submit" className="boton  btn-block col-6 "><b>Iniciar Sesión</b></button>
  </Link>
  </div>
</form>


  </div>);
        
} export default Entrada;