import React from 'react';
import logo from '../Imagenes/logo.png'
import { Link } from 'react-router-dom';
import '../Estilos/regis.css';

 function Registrate(){

    return (
          <div className="Registrate">
        <Link to="/Inicio" className="text-decoration-none ">
          <img src={logo} />
          </Link>
       <h3>Registrate</h3>
      
      <form>
  <div className="form-row"> 
  <div className="form-group col-md-6">
      <label for="inputEmail4">Nombres</label>
      <input type="email" className="form-control" id="inputEmail4"></input>
    </div>
    <div className="form-group col-md-6">
      <label for="inputEmail4">Apellidos</label>
      <input type="email" className="form-control" id="inputEmail4"></input>
    </div>
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
  <Link to="/Politicas" className="text-decoration-none ">
  <button type="submit" class=" boton  btn-block col-6"><b>Registrate</b></button>
  </Link>
  </div>
</form>
      

        </div>)

    

;} export default Registrate; 