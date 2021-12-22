import React from 'react';
import "./about-us.css"
import Scroll from"../Scrolltop/scrolltop"

/*** IMAGES ***/

import Kevin from './img/kevin.png'
import Joaco from './img/joaco.png'
import Mayra from './img/mayra.png'
import Juanse from './img/juanse.png'
import Gian from './img/gian.png'

/** FUNCIONES **/


function AboutUs(){
    return(
    <main>
        < Scroll />
        <section id="about-us-flex">
            <article id="about-titulo">
                <h2>Tierra de Genios</h2>
                <p id="somos-equipo">Somos un equipo de jóvenes comprometidos con el crecimiento económico, social y laboral de nuestra sociedad.</p>
            </article>
            <article>
                <article className="flex-articulos">
                    <h3 className="about-us-h3">Misión</h3>
                    <p>Combatir la pobreza con formaciones académicas cortas, tecnológicas y de rápida inserción laboral solventadas a través del financiamiento colectivo.</p>
                </article>
                <article className="flex-articulos">
                    <h3 className="about-us-h3">Visión</h3>
                    <p>Argentina como potencia mundial gracias a millones de graduados con títulos y habilidades estratégicas que perciben altos ingresos, resultantes de haber financiado sus aspiraciones académicas entre millones de argentinos/as.</p>
                </article>
            </article>
        </section>
        <section id="Pilares">
            <h3 className="about-us-h3">Nuestros Pilares</h3>
            <article id="flex-pilares">
                <article><h3>Lean Startup</h3></article>
                <article><h3>Micro Servicios</h3></article>
                <article><h3>Scrum</h3></article>
            </article>
        </section>
        <section>
                <article className="flex-articulos">
                    <h3 className="about-us-h3">Valores</h3>
                    <article id="flex-valores">
                        <p>Amor por el conocimiento.</p>
                        <p>Amor por nuestro país.</p>
                        <p>Ética, hacer lo correcto siempre.</p>
                        <p>Amor por la diversidad.</p>
                        <p>Somos todos humanos.</p>
                    </article>
                    <h3 id='respeto'>Respeto y compromiso para con toda persona y entidad que nos brince su apoyo.</h3>
                </article>
        </section>
        <section id='Equipo'>
                <h3>Equipo Tierra de Genios</h3>
                <section id="flex-imagenes-equipo">
                    <article className="flex-imagenes-about">
                        <img src={Gian} alt="gian" />
                        <p className="oculto">Gian Quaranta</p>
                        <p className="trabajo">Ceo & Founder</p>
                    </article>
                    <article className="flex-imagenes-about">
                        <img src={Juanse} alt="juanse" />
                        <p className="oculto">Juan Segundo Martínez</p>
                        <p className="trabajo">Desarrolador Web</p>
                    </article>
                    <article className="flex-imagenes-about">
                        <img src={Mayra} alt="mayra" />
                        <p className="oculto">Mayra Reynoso</p>
                        <p className="trabajo">Ceo & Founder</p>
                    </article>
                    <article className="flex-imagenes-about">
                        <img src={Kevin} alt="kevin" />
                        <p className="oculto">Kevin</p>
                        <p className="trabajo">Ceo & Founder</p>
                    </article>
                    <article className="flex-imagenes-about">
                        <img src={Joaco} alt="joaco" />
                        <p className="oculto">Joaco</p>
                        <p className="trabajo">Ceo & Founder</p>
                    </article>
                </section>
        </section>
    </main>
)

}

export default AboutUs;