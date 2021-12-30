import React, {useState} from 'react';
import "./scrolltop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ScrollToTop(){

    const [scroll, setScroll] = useState(0)

    if(scroll === 4){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
    const tiempo = setTimeout(() => setScroll(0), 1000)

    return(
        <button type="button" id="scrolltop" onClick={() => setScroll(4)}><FontAwesomeIcon icon="arrow-up" /></button>
    )

}

export default ScrollToTop