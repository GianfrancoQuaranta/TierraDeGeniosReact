import React, {useState} from 'react';
import "./scrolltop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ScrollToTop(){

    const [scroll, setScroll] = useState(false)

    if(scroll === true){

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(
        <button type="button" id="scrolltop" onClick={() => setScroll(!scroll)}><FontAwesomeIcon icon="arrow-up" /></button>
    )
        
}

export default ScrollToTop