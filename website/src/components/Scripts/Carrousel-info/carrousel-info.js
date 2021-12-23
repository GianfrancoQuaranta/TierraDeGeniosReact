import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";

import "./carrousel-info.css"

/*** IMAGENES ***/

import Parte1 from "./img/Primera-parte.png"
import Parte2 from "./img/Segunda-parte.png"
import Parte3 from "./img/Tercera-parte.png"
import Parte4 from "./img/Cuarta-parte.png"
import Parte5 from "./img/Quinta-parte.webp"
import Parte6 from "./img/Sexta-parte.png"
import Parte7 from "./img/Septima-parte.png"
import Parte8 from "./img/Octava-parte.png"





class MyCarousel extends Component {

render() {
    return (
    <div id="Contendor-info" className="desktop-visible-home">
        <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
        <div className="Articulos-info ">
            <h3>1- Completá el Formulario.</h3>
            <img src={Parte1} alt="Parte1"/>
        </div>
        <div className="Articulos-info ">
            <h3>2- Revisamos las solicitudes.</h3>
            <img src={Parte2} alt="Parte2"/>
        </div>
        <div className="Articulos-info ">
            <h3>3- Seleccionamos a los beneficiarios.</h3>
            <img src={Parte3} alt="Parte3"/>
        </div>
        <div className="Articulos-info ">
            <h3>4- Entrevista con el/la solicitante.</h3>
            <img src={Parte4} alt="Parte4"/>
        </div>
        <div className="Articulos-info ">
            <h3>5- Recaudamos el dinero para las becas.</h3>
            <img src={Parte5} alt="Parte5"/>
        </div>
        <div className="Articulos-info ">
            <h3>6- Nuestros becados se graduan.</h3>
            <img src={Parte6} alt="Parte6 "/>
        </div>
        <div className="Articulos-info ">
            <h3>7- Devolución de la inversión.</h3>
            <img src={Parte7} alt="Parte7"/>
        </div>
        <div className="Articulos-info ">
            <h3>8- Inserción laboral de nuestros graduados.</h3>
            <img src={Parte8} alt="Parte8"/>
        </div>
        </ReactCardCarousel>
    </div>
    );
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyCarousel />, rootElement);

export default MyCarousel;
