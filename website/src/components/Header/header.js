import React, {useState} from 'react';
// import "./header.css";

import Logo from "./img/texto-tdg.png"
import {Link} from "react-router-dom"

/**** Icons *****/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cruz from "./img/cross.svg"
import TDG from "../Home/img/TDG-completo.webp"

function Header(){

    const [showMenu, setShowMenu] = useState(false)

    let menu

    let salir = <img src={Cruz} id="cruz" alt="cruz" onClick={() => setShowMenu(false)} />

    if(showMenu === true) {
        menu = 
            <article className="menu-mobile">
                <article id="flex-menu">
                    <article id="flex-cruz">
                        { salir }
                    </article>
                    <img src={TDG} alt="logo" className="Logo-menu" />
                    <Link to="/ingresar" onClick={() => setShowMenu(!showMenu)}><p>Iniciar Sesion</p></Link>
                    <Link to="/registrarse" onClick={() => setShowMenu(!showMenu)}><p className="registrarse">Registrarse</p></Link>
                    <Link to="/solicitar-beca" onClick={() => setShowMenu(!showMenu)}><p >Solicitar Beca</p></Link>
                    <Link to="/sobre-nosotros" onClick={() => setShowMenu(!showMenu)}><p>Sobre Nosotros</p></Link>
                </article>
            </article>
    }

    // menu.onClick = () => burguer.classList.remove("menu-mobile-1") + burguer.classList.add("menu-mobile")

    return(
        <header>
            <nav>
                <Link to="/">
                    <img src={Logo} className="Logo" alt="Logo"/>
                </Link>
                    <FontAwesomeIcon icon="bars" id="burguer" className="mobile-visible" onClick={() => setShowMenu(!showMenu)}/>
                <ul className="desktop-visible">
                    <article id="nav-izq">
                        <Link to="/solicitar-beca"><li>SOLICITAR BECA</li></Link>
                        <Link to="/sobre-nosotros"><li>SOBRE NOSOTROS</li></Link>
                    </article>
                    <article id="nav-der">
                        <Link to="/ingresar"><li>INGRESAR</li></Link>
                        <Link to="/registrarse"><li className="registrarse">REGISTRARSE</li></Link>
                    </article>
                </ul>
            { menu }
            </nav>
        </header>
    )
}

export default Header;