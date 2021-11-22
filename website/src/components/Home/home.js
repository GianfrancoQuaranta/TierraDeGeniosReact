import React from 'react';
import {Link} from "react-router-dom"
import "./home.css"

/*** IMAGES ***/

import Beneficiario from "./img/imagen-gian.jpg"
import Nelson from "./img/nelsonMandela.jpg"
import Tarjeta from "./img/tarjeta.png"
import Graduated from "./img/graduado.jpg"
import Viaje from "./img/becaMobile.png"


function Home(){
    return(
        <main>
            <section id="Recaudacion">
                    <iframe src="https://www.youtube.com/embed/ZgbO4biZasU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen id="video-youtube-incrustado"></iframe>
                    <article>
                        <h2>Recaudación Activa:</h2>
                        <div id="barra">
                            <span></span>
                        </div>
                        <p>Objetivo de recaudación: $216.184,62</p>
                        <p>Recaudado: $172.947,69</p>
                        <p>Falta: $43.236,92</p>
                    </article>
            </section>
            <section id="Beneficiario">
                <h2 className="red">Beneficiario</h2>
                <article id="box-1">
                    <article id="box-2">
                    <Link to="/detalle-aplicante">
                        <figure>
                            <img src={Beneficiario} alt="beneficiario" />
                        </figure>
                    </Link>
                    </article>
                    <h3>Gianfranco Enzo Quaranta</h3>
                    <p>25 años - Cordoba, Cordoba</p>
                    <p>Creo que la eduacación es el camino a una vida mejor, y que hoy las oportunidades se encuentran en el rubro de la tecnologia, quiero ser desarrollador web Full-Stack y cambiar mi vida, por favor, si esta dentro de tus posibilidades, ayudame a lograrlo!</p>
                </article>
            </section>
            <section id="Contribuye">
                <h2 className="blue">¡Contribuye a lograr el sueño de Gianfraco de estudiar!</h2>
                <div className="flex-button">
                    <button>Contribuir</button>
                </div>
            </section>
            <section id="Pagos">
                <article>
                    <form>
                        <p>*Puedes elegir contribuir mensualmente o por única vez</p>
                        <fieldset id="flex-form">
                            <figure>
                                <img src={Tarjeta} alt="Tarjeta"/>
                            </figure>
                            <fieldset id="flex-desktop">
                                <fieldset>
                                    <label htmlFor="nombre">Nombre y Apellido que figuran en la tarjeta</label>
                                    <input type="text" htmlFor="nombre" placeholder="EJ: Juan Ramírez"></input>
                                </fieldset>
                                <fieldset>
                                    <label htmlFor="monto">Monto a contribuir</label>
                                    <input type="number" htmlFor="monto" placeholder="EJ: $20.000"></input>
                                    <fieldset id="fieldset-radio">
                                        <input type="radio" htmlFor="monto"className="radio" name="radio"></input>
                                        <label>Mensual</label>
                                        <input type="radio" htmlFor="monto" className="radio" name="radio"></input>
                                        <label>Única vez</label>
                                    </fieldset>
                                </fieldset>
                            </fieldset>
                        </fieldset>
                            <fieldset>
                                <label htmlFor="nombre">Fecha de vencimiento</label>
                                <input type="text" htmlFor="nombre" placeholder="EJ: 01/25"></input>
                            </fieldset>
                            <fieldset>
                                <label htmlFor="nombre">Código de seguridad</label>
                                <input type="text" htmlFor="nombre" placeholder="EJ: 707"></input>
                            </fieldset>
                            <fieldset className="flex-button">
                                <button>Enviar</button>
                            </fieldset>
                    </form>
                </article>
            </section>
            <section id="Transformamos">
                <h2>Transformamos vidas recaudando fondos</h2>
                <figure>
                    <img src={Graduated} alt="Graduated"/>
                </figure>
                <p>Generamos empleos a través del financiamiento colectivo para quienes quieren transformar sus vidas con educación</p>
            </section>
            <section id="ViajeIda">
                <h2 className="blue">Un viaje de Ida</h2>
                {/* <article id="mobile-visible-home"> */}
                    {/* <figure>
                        <img src={Viaje} alt="Graduated" id="viajeIMG"/>
                    </figure> */}
                {/* </article> */}
                <article id="desktop-visible-home">
                    <div id="app"></div>
                    <script type="module" src="../Scripts/Carrousel-swiper/swiper.js"></script>
                </article>
                <h3 className="red">En 7 meses nuestros becados viven su nueva vida</h3>
            </section>
            <section id="Nelson">
                <h3 className="blue">"La educación es el arma más poderosa que se puede usar para cambiar el mundo"</h3>
                <figure>
                    <img src={Nelson} alt="Nelson"/>
                </figure>
                <p className="red">Nelson Mandela</p>
                <p>(1918-2013)</p>
            </section>
        </main>
    )
}

export default Home;