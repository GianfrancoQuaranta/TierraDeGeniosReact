import React from 'react';
import "./footer.css";
import Logo from "./img/texto-tdg.png"

/*** Icons ****/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer(){
    return(
        <footer>
            <img src={Logo} id="Logo" alt="Logo"/>
            <nav>
                <FontAwesomeIcon icon={["fab","facebook-square"]} id="facebook" />
                <FontAwesomeIcon icon={["fab","whatsapp-square"]} id="whatsapp" />
                <FontAwesomeIcon icon={["fab","instagram-square"]} id="instagram" />
            </nav>
        </footer>
    )
}

export default Footer;