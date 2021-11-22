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
                    <Link to="/">
                        <img src={Logo} id="Logo" alt="Logo"/>
                    </Link>
                <FontAwesomeIcon icon="bars" id="burguer" className="mobile-visible"/>
                <ul className="desktop-visible">
                    <Link to="/solicitar-beca"><li>Solicitar beca</li></Link>
                    <Link to="/sobre-nosotros"><li>Nosotros</li></Link>
                    <Link to="/registrarse"><li>Registrarse</li></Link>
                    <Link to="/ingresar"><li>Ingresar</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;