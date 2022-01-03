import React, {useState} from 'react';
import "./about-us.css"
import Scroll from"../Scrolltop/scrolltop"

/*** IMAGES ***/

import Kevin from './img/kevin.png'
import Joaco from './img/joaco.png'
import Mayra from './img/mayra.png'
import Juanse from './img/juanse.png'
import Gian from './img/gian.png'
// import Cruz from '../Header/img/cross.svg'

/** FUNCIONES **/




function AboutUs(){
    
    const [showMenu, setShowMenu] = useState(0)
    
    // let salir = <img src={Cruz} id="cruz" alt="cruz" onClick={() => setShowMenu(0)} />
    let menu

    if(showMenu === 1) {
        menu = 
            <article className="info-box" onClick={() => setShowMenu(0)}>
                <article className="box-pilares">
                    <h2>Lean Startup</h2>
                    <p>"Consideramos que la clave del éxito se encuentra en la experiencia, por eso invertimos en aprender de nuestro camino con un método que funciona contabilizando lo que funciona y lo que no, lean startup."</p>
                </article>
            </article>
    }else if(showMenu === 2) {
        menu = 
            <article className="info-box" onClick={() => setShowMenu(0)}>
                <article className="box-pilares">
                    <h2>Micro Servicios</h2>
                    <p>"Uno de nuestros pilares es la vanguardia, para ello, trabajamos con enfoques que nos posicionen como una organización, no solo a la altura del presente, sino, también, a la altura del futuro."</p>
                </article>
            </article>
    }else if(showMenu === 3) {
        menu = <article className="info-box" onClick={() => setShowMenu(0)}>
                    <article className="box-pilares">
                        <h2>Scrum</h2>
                        <p>"El trabajo en equipo es más eficiente cuando hay orden y agilidad para crecer y lograr los objetivos, por eso elegimos scrum, un método que promete hacer de nuestra organización más ágil y ordenada."</p>
                    </article>
                </article>
    }else if(showMenu === 5) {
        menu = <article className="info-box-members" onClick={() => setShowMenu(0)}>
                    <article className="box-pilares">
                        <img src={Gian} alt="Gian" />
                        <h3>Titulos y Trabajo dentro dentro de TDG :</h3>
                        <p>Desarrollador Web Full Stack - Digital House</p>
                        <p>Estudiante Lic. en Comercialización, Marketing.</p>
                        <p>Diplomado en Marketing Digital - Mundos E/UNC.</p>
                        <p>10 años emprendiendo.</p>
                    </article>
                </article>
    }else if(showMenu === 6) {
        menu = <article className="info-box-members" onClick={() => setShowMenu(0)}>
                    <article className="box-pilares">
                        <img src={Juanse} alt="Juanse" />
                        <h3>Titulos y Trabajo dentro dentro de TDG :</h3>
                        <p>Curso introductorio programación - Plataforma 5</p>
                        <p>Desarrollador Web Full Stack - Digital House</p>
                    </article>
                </article>
    }else if(showMenu === 7) {
        menu = <article className="info-box-members" onClick={() => setShowMenu(0)}>
                    <article className="box-pilares">
                        <img src={Mayra} alt="Mayra" />
                        <h3>Titulos y Trabajo dentro dentro de TDG :</h3>
                        <p>Lic. en Ciencias de la Comunicación</p>
                        <p>Técnica Superior en Relaciones Públicas</p>
                        <p>Coach Ontológico Profesional </p>
                        <p>Community Manager</p>
                    </article>
                </article>
    }else if(showMenu === 8) {
        menu = <article className="info-box-members" onClick={() => setShowMenu(0)}>
                    <article className="box-pilares">
                        <img src={Kevin} alt="Kevin" />
                        <h3>Titulos y Trabajo dentro dentro de TDG :</h3>
                        <p>Lic. en Comercialización, Marketing.</p>
                        <p>Data Analytics Jr. (Google Certified)</p>
                    </article>
                </article>
    }else if(showMenu === 9) {
        menu = <article className="info-box-members" onClick={() => setShowMenu(0)}>
                    <article className="box-pilares">
                        <img src={Joaco} alt="Joaco" />
                        <h3>Titulos y Trabajo dentro dentro de TDG :</h3>
                        <p>Desarrollador Web Full Stack - Digital House</p>
                    </article>
                </article>
    }
    

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
            <article id="flex-pilares" >
                <article onClick={() => setShowMenu(1)}><h3>Aprendizaje</h3></article>
                <article onClick={() => setShowMenu(2)}><h3>Vanguardia</h3></article>
                <article onClick={() => setShowMenu(3)}><h3>Agiles</h3></article>
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
                    <h3 id='respeto'>Respeto y compromiso para con toda persona y entidad que nos brinde su apoyo.</h3>
                </article>
        </section>
        <section id='Equipo'>
                <h3>Equipo Tierra de Genios</h3>
                <section id="flex-imagenes-equipo">
                    <article className="flex-imagenes-about">
                        <img src={Gian} alt="gian" onClick={() => setShowMenu(5)} />
                        <p className="oculto">Gian Quaranta</p>
                        <p className="trabajo">Ceo & Founder</p>
                    </article>
                    <article className="flex-imagenes-about">
                        <img src={Juanse} alt="juanse" onClick={() => setShowMenu(6)}  />
                        <p className="oculto">Juan Segundo Martínez</p>
                        <p className="trabajo">Desarrolador Web</p>
                    </article>
                    <article className="flex-imagenes-about">
                        <img src={Mayra} alt="mayra" onClick={() => setShowMenu(7)} />
                        <p className="oculto">Mayra Reynoso</p>
                        <p className="trabajo">Marketing Digital</p>
                    </article>
                    <article className="flex-imagenes-about">
                        <img src={Kevin} alt="kevin" onClick={() => setShowMenu(8)} />
                        <p className="oculto">Kevin Brada</p>
                        <p className="trabajo">Marketing Digital</p>
                    </article>
                    <article className="flex-imagenes-about">
                        <img src={Joaco} alt="joaco" onClick={() => setShowMenu(9)} />
                        <p className="oculto">Joaquín Rodríguez</p>
                        <p className="trabajo">Desarrolador Web</p>
                    </article>
                </section>
        </section>
        { menu }
    </main>
)

}

export default AboutUs;