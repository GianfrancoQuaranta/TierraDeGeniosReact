import React from 'react';
import "./solicitarBeca.css";

/*** IMAGES ***/

import nuestraBecaMobile from "./img/como-funciona-nuestra-beca-tdg-mobile.png"
import nuestraBecaDesktop from "./img/como-funciona-nuestra-beca-tdg-desktop.png"
import somosLaOportunidad from "./img/somos-la-oportunidad-que-todo-estudiante-merece.jpg"

function solicitarBecas(){
    return(
        <main id="solicitar-main">
            <section id="solicitar-section">
                <article className="solicitar-article">
                    <h2>Solicitar Beca</h2>
                    <h3>¿Cómo funciona nuestra beca?</h3>   
                    <figure>
                        <img src={nuestraBecaMobile} alt="viaje tierra de genios" />
                    </figure>
                    <figure class="figure-imagen-como-funciona-la-beca-desktop">
                    <img src={nuestraBecaDesktop} alt="viaje tierra de genios" class="imagen-como-funciona-la-beca-desktop" />
                    </figure>
                    <p class="textos-p">
                        Facilitamos el acceso a la educación formal en el mundo de la tecnología a través de becas, 
                        sabemos que la industria tecnológica está creciendo rápidamente y que representa una oportunidad para la pronta inserción laboral.
                    </p>
                    <p class="textos-p">
                        Apoyamos formaciones académicas tecnológicas, cortas y de rápida inserción laboral, en las principales academias tecnológicas 
                        de Argentina, por ejemplo, Digital House.
                    </p>
                    <p class="textos-p">
                        Aplicas, revisamos tu solicitud y programamos la entrevista de admisión, al final del proceso se te notificará
                        si has sido seleccionado/a, de ser así, comenzará tu viaje en Tierra de Genios hasta lograr la inserción laboral.
                    </p>
                </article>
                <article className="solicitar-article">
                    <h3>¿Quién puede solicitarla?</h3>
                    <p class="p-requisitos">Requisitos:</p>
                    <ol>
                        <li>Ser de nacionalidad argentina.</li>
                        <li>Ser mayor de 18 años.</li>
                        <li>Haber terminado el secundario. (Sin adeudar materias)</li>
                        <li>Poseer computadora.</li>
                        <li>Poseer acceso a internet.</li>
                        <li>No poder afrontar la inversión académica sólo/a. (incluso con ayuda de los padres en caso de menores de 25 años)</li>
                    </ol>
                </article>
                <article className="solicitar-article">
                    <h3>Compromiso de los becados</h3> 
                    <p class="textos-p">Compromiso a completar la formación académica para la cual ha sido becado/a, dando lo mejor de sí ya que nuestra más 
                        grande aspiración es formar personas de bien, exitosas e independientes que representen a Argentina ante
                            el mundo.</p>
                        <p class="textos-p">Nuestra beca es un <b>Préstamo de Honor</b>, esto significa que nuestra organización invierte en tus estudios y, una vez
                            te insertes laboralmente y percibas un ingreso superior a $100.000 mensual, retribuyes a Tierra de Genios el
                            15% de tus ingresos hasta terminar de devolver un monto total de U$D 4.000, en caso de no percibir ingresos o 
                            estar momentáneamente sin trabajo, esta se pausará hasta que superes nuevamente los $100.000 mensuales. 
                        </p>
                        <p class="textos-p">Para más información, <a href="#">comunícate con nosotros</a>.</p>
                    <figure>
                        <img src={somosLaOportunidad} alt="imagen graduada feliz" class="imagen-oportunidad-que-todo-estudiante-merece" />     
                    </figure>
                </article>
                <article className="solicitar-article">
                    <iframe src="https://www.youtube.com/embed/ZgbO4biZasU" title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen class="" id="video-youtube-incrustado"></iframe>
                </article>
            </section>
            <section class="section-form-desktop">
                <h2 class="h2-2do-section">Solicitá tu beca</h2>
                <p class="textos-p p-form-desktop">¡Haz tomado la decisión correcta, estás a un paso de solicitar tu beca de estudio, rellena el formulario y nos 
                    contactaremos contigo!
                </p>
                <form action="" method="" class="">
                <label for="email" class=""></label>
                <input type="email" name="email" id="email" value="" placeholder="Email" required></input>

                <label for="name" class=""></label>
                <input type="text" name="nombre" id="name" value="" placeholder="Nombre" required></input>
                
                <label for="surname" class=""></label>
                <input type="text" name="surname" id="surname" value="" placeholder="Apellido" required></input>
                
                <label for="cellphone" class=""></label>
                <input type="number" name="cellphone" id="cellphone" value="" placeholder="Celular" required></input>
                
                <label for="date" class="label-fecha-de-nacimiento">Fecha de Nacimiento</label>
                <input type="date" name="date" id="date" value="" placeholder="Fecha de Nacimiento" class="input-label-fecha-de-nacimiento" required></input>
                
                <label for="address" class=""></label>
                <input type="text" name="address" id="address" value="" placeholder="Domicilio" required></input>
                <label for="city" class=""></label>
                <input type="text" name="city" id="city" value="" placeholder="Ciudad" required></input>
                
                <label for="localidad" class=""></label>
                <input type="text" name="localidad" id="localidad" value="" placeholder="Localidad" required></input>
                
                <label for="country" class=""></label>
                <input type="text" name="country" id="country" value="" placeholder="País" required></input>
                
                <fieldset>
                    <legend>¿Haz terminado el secundario?</legend>
                    <fieldset className="flex-radio">
                        <label for="secundario-terminado"></label>
                        <input type="radio" className="solicitar-radio" name="secundario-terminado" id="" value="Si"></input>
                        <p>Si</p>
                        <label for="secundario-terminado"></label>
                        <input type="radio"  className="solicitar-radio" name="secundario-terminado" id="" value="No"></input>
                        <p>No</p>
                    </fieldset>
                </fieldset>
                    <legend>¿Qué formación académica posees hoy?</legend>
                    <p class="p-formacion-academica-actual p-label-leyenda-small"><small>En caso de no poseer, especificar.</small></p>
                    <input type="text" name="formacion-academica-actual" id="formacion-academica-actual" value="" placeholder="" 
                    class="input-formacion-academica-actual" required></input>
                    <label for="que-quiere-estudiar" class=""></label>
                    <legend>¿Qué formación académica tecnológica te gustaría realizar?</legend>
                    <p class="p-label-leyenda-small"><small>Ejemplo: Desarrolo Web Full Stack, Data Science, etc.</small></p>
                    <input type="text" name="que-quiere-estudiar" id="que-quiere-estudiar" value="" placeholder="" class="" required></input>
                    <label for="academia-donde-quiere-estudiar" class=""></label>
                    <legend>¿En qué academia quieres estudiar?</legend>
                    <p class="p-label-leyenda-small"><small>Ejemplo: Digital House, Acamica, etc.</small></p>
                    <input type="text" name="academia-donde-quiere-estudiar" id="academia-donde-quiere-estudiar" value="" placeholder="" class="" required></input>
                    <label for="que-lo-motiva-a-estudiar" class=""></label>
                    <legend>¿Qué te motiva a querer estudiarla?</legend>
                    <p class="p-label-leyenda-small"><small>Salida laboral, Especialización, etc.</small></p>
                    <input type="text" name="que-lo-motiva-a-estudiar" id="que-lo-motiva-a-estudiar" value="" placeholder="" class="" required></input>
                <fieldset>
                    <legend>¿Posees computadora?</legend>
                    <fieldset className="flex-radio">
                        <label for="posesion-de-computadora"></label>
                        <input type="radio" className="solicitar-radio" name="posesion-de-computadora" id="posesion-de-computadora" value="Si"></input>
                        <p>Si</p>
                        <label for="posesion-de-computadora"></label>
                        <input type="radio" className="solicitar-radio" name="posesion-de-computadora" id="posesion-de-computadora" value="No"></input>
                        <p>No</p>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <legend>¿Posees acceso a internet?</legend>
                    <fieldset className="flex-radio">
                        <label for="posesion-acceso-internet"></label>
                        <input type="radio" className="solicitar-radio" name="posesion-acceso-internet" id="posesion-acceso-internet" value="Si"></input>
                        <p>Si</p>
                        <label for="posesion-acceso-internet"></label>
                        <input type="radio" className="solicitar-radio" name="posesion-acceso-internet" id="posesion-acceso-internet" value="No"></input>
                        <p>No</p>
                    </fieldset>
                </fieldset>
                <p class="confirma-tu-correo-form"><b>¡Confirma tu correo para que tu solicitud esté completa!</b></p>
                <fieldset>
                    <p class="p-consentimiento-datos">*Tierra de Genios se compromete a proteger y respetar tu privacidad, usaremos tu información personal para administrar tu cuenta y proporcionar los que nos has solicitado. Si aceptas que nos comuniquemos contigo, marca las casillas a continuación:
                    </p>
                        <label for="consentimiendo-datos" class="label-checkbox"></label>
                    <fieldset className="flex-acepto">
                            <input type="checkbox" name="consentimiendo-datos" id="consentimiendo-datos" value="acepta-comunicaciones" placeholder="" 
                            class="input-label-consentimiento-datos" required></input>
                            <p class="p-input-label-consentimiento-datos">Acepto recibir otras comunicaciones de Tierra de Genios.</p>
                    </fieldset>
                        <label for="consentimiendo-datos" class="label-checkbox"></label>
                    <fieldset className="flex-acepto">
                            <input type="checkbox" name="consentimiendo-datos" id="consentimiendo-datos" value="acepta-almacenar-y-procesar-datos" placeholder="" 
                            class="input-label-consentimiento-datos" required></input>
                            <p class="p-input-label-consentimiento-datos">Acepto permitir a Tierra de Genios almacenar y procesar mis datos personales.</p>
                    </fieldset>
                </fieldset>
                {/* Acá va el captcha */}
                <button type="submit" class="button-form">Enviar</button>
                </form>
            </section>
        </main>
    )
}

export default solicitarBecas;