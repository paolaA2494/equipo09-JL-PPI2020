import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Bienvenido from '../paginas/Bienvenido';
import Inicio from '../paginas/Inicio';
import Entrada from '../componentes/Entrada';
import Registrate from '../componentes/Registrate';
import Politicas from '../componentes/Politicas';
import Menu from '../componentes/Menu';
import Otros from '../componentes/Otros';
import Tipos from '../componentes/Tipos';
import Sintomas from '../componentes/Sintomas';
import Tras1 from '../componentes/Tras1';
import Estructura from '../componentes/Estructura';
import Comentario from '../componentes/Comentario';
import Chat from '../componentes/Chat';
import Usuario from '../componentes/Usuario';
import Valoracion from '../componentes/Valoracion';
import Menuprin from '../componentes/Menuprin';

function App () {
return(
<BrowserRouter>
<Switch>
    <Route exact path= "/" component={Bienvenido}/>
    <Route exact path= "/Inicio" component={Inicio}/>
    <Route exact path= "/Bienvenido" component={Bienvenido}/>
    <Route exact path= "/Entrada" component={Entrada}/>
    <Route exact path= "/Registrate" component={Registrate}/>
    <Route exact path= "/Politicas" component={Politicas}/>
    <Route exact path= "/Menu" component={Menu}/>
    <Route exact path= "/Tras1" component={Tras1}/>
    <Route exact path= "/Tipos" component={Tipos}/>
    <Route exact path= "/Otros" component={Otros}/>
    <Route exact path= "/Sintomas" component={Sintomas}/>
    <Route exact path= "/Estructura" component={Estructura}/>
    <Route exact path= "/Comentario" component={Comentario}/>
    <Route exact path= "/Chat" component={Chat}/>
    <Route exact path= "/Usuario" component={Usuario}/>
    <Route exact path= "/Menuprin" component={Menuprin}/>
    <Route exact path= "/Valoracion" component={Valoracion}/>


</Switch>

</BrowserRouter>
)


}

export default App;