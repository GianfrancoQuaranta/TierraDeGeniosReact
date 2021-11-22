import React from 'react';
import "./applicant.css"


/*** IMAGES ***/

import Beneficiario from "./img/imagen-gian.jpg"

/*** ICONS ***/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Applicant(){
    return(
        <main>
            <section id="Beneficiario">
                <article id="box-1">
                    <article id="box-2">
                        <figure>
                            <img src={Beneficiario} alt="beneficiario" />
                        </figure>
                    </article>
                    <h3 className="description">Gianfranco Enzo Quaranta</h3>
                    <h3 className="description">Descripción</h3>
                    <p>Creo que la eduacación es el camino a una vida mejor, y que hoy las oportunidades se encuentran en el rubro de la tecnologia, quiero ser desarrollador web Full-Stack y cambiar mi vida, por favor, si esta dentro de tus posibilidades, ayudame a lograrlo!</p>
                    <h3 className="description">Carrera a Estudiar</h3>
                    <p>Web Development Full Stack - Digital House</p>
                    <article id="flex-description">
                        <article className="flex-description-1">
                            <FontAwesomeIcon icon={["fas","id-card"]} id="" />
                            <p>Gianfranco Enzo Quaranta</p>
                        </article>
                        <article className="flex-description-1">
                            <FontAwesomeIcon icon={["fas","globe-americas"]} id="" />
                            <p>Cordoba - Cordoba</p>
                        </article>
                        <article className="flex-description-1">
                            <FontAwesomeIcon icon={["fas","calendar-alt"]} id="" />
                            <p>25 años</p>
                        </article>
                    </article>
                    <h3>Preguntas</h3>
                </article>
            </section>
        </main>
    )
}

export default Applicant;