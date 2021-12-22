import React from 'react';
import "./footer.css";
import Logo from "./img/texto-tdg.png"

/*** Icons ****/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer(){
    return(
        <footer>
            {/* <div id="border-footer" className="mobile-visible"></div>
            <div id="border-desktop-footer" className="desktop-visible"></div> */}
            <article id="flex-footer">
                <img src={Logo} id="Logo" alt="Logo"/>
                <nav>
                    <FontAwesomeIcon icon={["fab","facebook-square"]} id="facebook" />
                    <FontAwesomeIcon icon={["fab","whatsapp-square"]} id="whatsapp" />
                    <FontAwesomeIcon icon={["fab","instagram-square"]} id="instagram" />
                </nav>
            </article>
            <article id="flex-footer-izq">
                <p>Terminos & Condiciones</p>
                <p id="tdg">Tierra de Genios © - 2021</p>
            </article>
        </footer>
    )
}

export default Footer;