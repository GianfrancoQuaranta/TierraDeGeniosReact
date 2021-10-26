import React from 'react';
import "./header.css";
import Logo from "./img/texto-tdg.png"
import {BrowserRouter,Link} from "react-router-dom"

/**** Icons *****/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(){
    return(
        <header>
            <nav>
                <img src={Logo} id="Logo" alt="Logo"/>
                <FontAwesomeIcon icon="bars" id="burguer" className="mobile-visible"/>
                <ul className="desktop-visible">
                <BrowserRouter>
                    <Link to="/"><li>Solicitar beca</li></Link>
                    <Link to="/"><li>Nosotros</li></Link>
                    <Link to="/"><li>Registrarse</li></Link>
                    <Link to="/"><li>Ingresar</li></Link>
                </BrowserRouter>
                </ul>
            </nav>
        </header>
    )
}

export default Header;