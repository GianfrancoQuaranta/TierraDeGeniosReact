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
                {/* <FontAwesomeIcon icon="facebook-square" />
                <FontAwesomeIcon icon="whatsapp-square" />
                <FontAwesomeIcon icon="instagram-square" /> */}
            </nav>
        </footer>
    )
}

export default Footer;