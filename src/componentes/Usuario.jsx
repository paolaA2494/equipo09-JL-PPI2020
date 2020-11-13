import React from 'react';
import '../Estilos/Usuario.css';
import perfil from '../Imagenes/perfil.png';
import { Link } from 'react-router-dom';

 function Usuario(){

    return(
        <form>   
        <div class="Usuario">
       
        <svg width="13em" height="13em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
  <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
</svg>
          <h1>Editar Perfil</h1>
          <label for="exampleFormControlInput1">Nombres y Apellidos Completos</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Correo Electronico</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder=""></textarea>
      
          <button type="button" className=" btn-lg   boton btn-block mb-2 col-7 "> <b>Guardar Cambios</b></button>

          <Link to="/Inicio" className="text-decoration-none ">
          <button type="button" className=" btn-lg  boton btn-block  col-7 "> <b>Cerrar Sesiòn</b></button>
          </Link>
        </div>
        </form> 
    )
    }
    export default Usuario;