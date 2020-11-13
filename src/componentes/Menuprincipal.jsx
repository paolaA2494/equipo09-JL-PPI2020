import React from 'react';
import '../Estilos/menuprincipal.css';
import Foco from '../Imagenes/foco.jpg';
import { FaUserTie} from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaComments} from 'react-icons/fa';
import { FaBook} from 'react-icons/fa';
import { Link } from 'react-router-dom';


    class Menuprincipal extends React.Component {
        render() {
    return (
        <form>  
         
      <img src = {Foco}/>
      
          <div class="navbar"> 
          <Link to="/Usuario" className="text-decoration-none ">
  <a class="active" href="#"><i class="fa fa-fw fa-home"></i><FaUserTie /> User </a>
  </Link>

  <a href="#"><i class="fa fa-fw fa-search"></i><FaSearch /> Search</a>

  <Link to="/Chat" className="text-decoration-none ">
  <a href="#"><i class="fa fa-fw fa-envelope"></i><FaComments/> Chat</a> 
</Link> 

  <Link to="/Menu" className="text-decoration-none ">
  <a href="#"><i class="fa fa-fw fa-user"></i><FaBook/>Menu</a>
  </Link>
  
     </div>

</form>
    )
  }
}

export default Menuprincipal;