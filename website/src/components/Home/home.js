import React from 'react';
import "./home.css"
import Carrusel from"../Scripts/Carrousel-header/carrousel-header"
import Carrusel2 from"../Scripts/Carrousel-info/carrousel-info"
import Scroll from"../Scrolltop/scrolltop"




/*** IMAGES ***/

import Nelson from "./img/nelsonMandela.webp"
import Rosa from "./img/fundacion-rosa.png"
import TDG from "./img/TDG-completo.webp"
import Beca from "./img/beca.png"



function Home(){
    return(
        <main>
                <h3 id='titulo-centro'>¡Apoyamos a quienes quieren estudiar y su situación económica no se los permite!.</h3>
            < Carrusel />
            < Scroll />
            <article id="home-box-button">
                <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847e20cc4b017e460485700de8" id="button-header" className="button">Donar</a>
            </article>
            <section id="Fundacion" className="section-home">
                <article>
                    <article id="fundacion-flex-imagenes">
                            <a href="https://fundacioncirculorosa.org/"><img src={Rosa} alt="Fundación Circulo Rosa"/></a>
                            <img src={TDG} alt="Tierra De Genios"/>
                    </article>
                    <p>Trabajamos junto a Fundación Círculo Rosa para asegurar que los fondos recaudados son destinados a las becas de estudio acordadas.</p>
                </article>
            </section>
                <div id="border"></div>
            <section id="Recaudacion" className="section-home">
                        <h2>Recaudación Activa:</h2>
                    <iframe src="https://www.youtube.com/embed/qNkgUOAGAOM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen className="video-youtube-incrustado"></iframe>
                    <article>
                        <article id="recaudacion-flex">
                            <p>Objetivo Recaudación: $246.075</p>
                            <p>Recaudado: $10.120</p>
                            <p>Falta: $235.955</p>
                            <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847e20cc4b017e460485700de8" className="button">Donar</a>
                        </article>
                    </article>
            </section>
            <section id="Beca" className="section-home">
                <h2>¿Cómo funciona Tierra de Genios?</h2>
                < Carrusel2 />
                <img src={Beca} alt="beca" id="mobile-visible-home"/>
            </section>
            <div id="border"></div>
            <section id="Nelson" className="section-home">
                <h3 className="blue">"La educación es el arma más poderosa que se puede usar para cambiar el mundo"</h3>
                <figure>
                    <img src={Nelson} alt="Nelson"/>
                </figure>
                <p className="red">Nelson Mandela</p>
                <span>(1918-2013)</span>
            </section>
        </main>
    )
}

export default Home;