import React, { Component } from "react"
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import './resources/css/menu.css';
import PublicacionBuscar from './components/PublicacionBuscar';
import PublicacionBuscarporId from './components/PublicacionBuscarporId';
import AgregarPublicacion from './components/AgregarPublicacion';
import AgregaUsuario from './components/AgregarUsuario';
import Login from "./components/Login";

export default class App extends Component {

    constructor(props) {
        super(props);
    }


    printUUID=()=>{
        console.log(localStorage);
    }

    signOff=()=>{
        localStorage.clear();
        window.location.href="/";  
}
    render() {
        return (
            <BrowserRouter>

            
<nav className="menu">
                        <NavLink className="enlace2" to="/principal" >Principal</NavLink>
                        {localStorage.length != 0 &&
                            <NavLink className="enlace2" to="/publicaciondelete" >Mis Publicaciones</NavLink>
                        }
                        <NavLink className="enlace2" to="/comments" >Comentarios</NavLink>
                        {localStorage.length == 0 &&
                    <NavLink className="enlace" to="/" >Iniciar Sesion</NavLink>
                        }
                          {localStorage.length != 0 &&
                    <NavLink className="enlace" onClick={this.signOff}>Cerrar Sesion</NavLink>
                        }
   </nav>


                    <Routes>
                        <Route path="/" element={<Login />} />

                        <Route path="/principal" element={<PublicacionBuscar/>} />

                        <Route path="/publicaciondelete" element={<PublicacionBuscarporId/>} />


                        <Route path="/comments" element={<button onClick={this.printUUID}>Mostrar UUID</button>} />

                        <Route path="*" element={<NotFound />} />

                        <Route />
                    </Routes>


            </BrowserRouter>

        );
    }
}