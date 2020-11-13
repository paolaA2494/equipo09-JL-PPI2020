import React from 'react';
import '../Estilos/valora.css';
import Logo from '../Imagenes/logo.png';
import { Link } from 'react-router-dom';

 function Valoracion(){

    return(
       <form>
        <div class="clasificacion"> 
        <div class="box">
       <h1>Valoracion de la App</h1>
       <Link to="/Menuprin" className="text-decoration-none ">
            <img src = {Logo}/>
            </Link>
          <input id="radio1" type="radio" name="estrellas" value="5"></input>
         <label for="radio1">★</label>
        <input id="radio2" type="radio" name="estrellas" value="4"></input>
         <label for="radio2">★</label>
         <input id="radio3" type="radio" name="estrellas" value="3"></input>
          <label for="radio3">★</label>
         <input id="radio4" type="radio" name="estrellas" value="2"></input>
         <label for="radio4">★</label>
          <input id="radio5" type="radio" name="estrellas" value="1"></input>
          <label for="radio5">★</label>

          <Link to="/Comentario" className="text-decoration-none ">
          <button type="button" className="btn btn-primary btn-lg  boton btn-block mb-2 col-6" > <b>COMENTARIO</b></button>
         </Link>
         <Link to="/Menuprin" className="text-decoration-none ">
          <button type="button" className="btn btn-primary btn-lg   boton btn-block  col-6"> <b>ENVIAR</b></button>
          </Link>
</div>
</div>
</form>


        )
    }
    export default Valoracion;