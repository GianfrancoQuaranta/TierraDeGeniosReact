import React from 'react';
import "./solicitarBeca.css";
import Scroll from"../Scrolltop/scrolltop"


function solicitarBecas(){

    return(
        <main id="solicitar-main">
            < Scroll />
            <section>
                <article id="Solicitar-article">
                    <h2 className="h2-solicitar">Solicitar Beca</h2>
                    <article className="article-beca">
                        <h3>¿Cómo funciona nuestra beca?</h3>   
                        <p>
                            Facilitamos el acceso a la educación formal en el mundo de la tecnología a través de becas, 
                            sabemos que la industria tecnológica está creciendo rápidamente y que representa una oportunidad para la pronta inserción laboral.
                        </p>
                        <p>
                            Apoyamos formaciones académicas tecnológicas, cortas y de rápida inserción laboral, en las principales academias tecnológicas 
                            de Argentina, por ejemplo, Digital House.
                        </p>
                        <p>
                            Aplicas, revisamos tu solicitud y programamos la entrevista de admisión, al final del proceso se te notificará
                            si has sido seleccionado/a, de ser así, comenzará tu viaje en Tierra de Genios hasta lograr la inserción laboral.
                        </p>
                    </article>
                </article>
                <article className="article-beca" id='Requisitos'>
                    <h3>¿Quién puede solicitarla?</h3>
                    <p>Requisitos:</p>
                    <ol>
                        <li>Ser de nacionalidad argentina.</li>
                        <li>Ser mayor de 18 años.</li>
                        <li>Haber terminado el secundario. (Sin adeudar materias)</li>
                        <li>Poseer computadora.</li>
                        <li>Poseer acceso a internet.</li>
                        <li>No poder afrontar la inversión académica sólo/a. (incluso con ayuda de los padres en caso de menores de 25 años)</li>
                    </ol>
                </article>
                <article className="article-beca" id="compromiso">
                    <h3>Compromiso de los becados</h3> 
                    <p>Compromiso a completar la formación académica para la cual ha sido becado/a, dando lo mejor de sí ya que nuestra más 
                        grande aspiración es formar personas de bien, exitosas e independientes que representen a Argentina ante
                            el mundo.</p>
                        <p>Nuestra beca es un <b>Préstamo de Honor</b>, esto significa que nuestra organización invierte en tus estudios y, una vez
                            te insertes laboralmente y percibas un ingreso superior a $100.000 mensual, retribuyes a Tierra de Genios el
                            15% de tus ingresos hasta terminar de devolver un monto total de U$D 4.000, en caso de no percibir ingresos o 
                            estar momentáneamente sin trabajo, esta se pausará hasta que superes nuevamente los $100.000 mensuales. 
                        </p>
                        <p>Para más información, <a href="#">comunícate con nosotros</a>.</p>
                <article id="flex-video">
                    <iframe src="https://www.youtube.com/embed/ZgbO4biZasU" title="YouTube video player" 
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen className="video-youtube-incrustado"></iframe>
                </article>
                </article>
            </section>
            <section id="form-article">
                <h2 className="h2-solicitar">Solicitá tu beca</h2>
                <p id="solicitar-p">¡Haz tomado la decisión correcta, estás a un paso de solicitar tu beca de estudio, rellena el formulario y nos 
                    contactaremos contigo!
                </p>
                <article id='recuadro-form'>
                    <form action="" method="" id="form-solicitar">
                        <fieldset>
                            <label htmlFor="email"></label>
                            <input type="email" name="email" id="email"   placeholder="Email" required></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="name"></label>
                            <input type="text" name="nombre" id="name"   placeholder="Nombre" required></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="surname"></label>
                            <input type="text" name="surname" id="surname"  placeholder="Apellido" required></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="cellphone" ></label>
                            <input type="number" name="cellphone" id="cellphone"  placeholder="Celular" required></input>
                        </fieldset>
                        <fieldset>
                            <p>Fecha de nacimiento</p>
                            <label htmlFor="date" className="label-fecha-de-nacimiento"></label>
                            <input type="date" name="date" id="date"  placeholder="Fecha de Nacimiento" className="input-label-fecha-de-nacimiento" required></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="address"></label>
                            <input type="text" name="address" id="address"  placeholder="Domicilio" required></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="city"></label>
                            <input type="text" name="city" id="city"  placeholder="Ciudad" required></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="localidad"></label>
                            <input type="text" name="localidad" id="localidad"  placeholder="Localidad" required></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="country"></label>
                            <input type="text" name="country" id="country"  placeholder="País" required></input>
                        </fieldset>
                    <fieldset>
                        <legend>¿Haz terminado el secundario?</legend>
                        <fieldset className="flex-radio">
                            <label htmlFor="secundario-terminado"></label>
                            <input type="radio" className="solicitar-radio" name="secundario-terminado" id="" value="Si"></input>
                            <p>Si</p>
                            <label htmlFor="secundario-terminado"></label>
                            <input type="radio"  className="solicitar-radio" name="secundario-terminado" id="" value="No"></input>
                            <p>No</p>
                        </fieldset>
                    </fieldset>
                    <fieldset id="preguntas-fieldset">
                        <fieldset>
                            <legend>¿Qué formación académica posees hoy?</legend>
                            <p><small>En caso de no poseer, especificar.</small></p>
                            <input type="text" name="formacion-academica-actual" required></input>
                            <label htmlFor="que-quiere-estudiar"></label>
                        </fieldset>
                        <fieldset>
                            <legend>¿Qué formación académica tecnológica te gustaría realizar?</legend>
                            <p><small>Ejemplo: Desarrolo Web Full Stack, Data Science, etc.</small></p>
                            <input type="text" name="que-quiere-estudiar" id="que-quiere-estudiar" required></input>
                            <label htmlFor="academia-donde-quiere-estudiar"></label>
                        </fieldset>
                        <fieldset>
                            <legend>¿En qué academia quieres estudiar?</legend>
                            <p><small>Ejemplo: Digital House, Acamica, etc.</small></p>
                            <input type="text" name="academia-donde-quiere-estudiar" required></input>
                            <label htmlFor="que-lo-motiva-a-estudiar"></label>
                        </fieldset>
                        <fieldset>
                            <legend>¿Qué te motiva a querer estudiarla?</legend>
                            <p><small>Salida laboral, Especialización, etc.</small></p>
                            <input type="text" name="que-lo-motiva-a-estudiar" id="que-lo-motiva-a-estudiar" required></input>
                        </fieldset>
                    </fieldset>
                    <fieldset>
                        <legend>¿Posees computadora?</legend>
                        <fieldset className="flex-radio">
                            <label htmlFor="posesion-de-computadora"></label>
                            <input type="radio" className="solicitar-radio" name="posesion-de-computadora" id="posesion-de-computadora" value="Si"></input>
                            <p>Si</p>
                            <label htmlFor="posesion-de-computadora"></label>
                            <input type="radio" className="solicitar-radio" name="posesion-de-computadora" id="posesion-de-computadora" value="No"></input>
                            <p>No</p>
                        </fieldset>
                    </fieldset>
                    <fieldset>
                        <legend>¿Posees acceso a internet?</legend>
                        <fieldset className="flex-radio">
                            <label htmlFor="posesion-acceso-internet"></label>
                            <input type="radio" className="solicitar-radio" name="posesion-acceso-internet" id="posesion-acceso-internet" value="Si"></input>
                            <p>Si</p>
                            <label htmlFor="posesion-acceso-internet"></label>
                            <input type="radio" className="solicitar-radio" name="posesion-acceso-internet" id="posesion-acceso-internet" value="No"></input>
                            <p>No</p>
                        </fieldset>
                    </fieldset>
                    <p><b>¡Confirma tu correo para que tu solicitud esté completa!</b></p>
                    <fieldset>
                        <p>*Tierra de Genios se compromete a proteger y respetar tu privacidad, usaremos tu información personal para administrar tu cuenta y proporcionar los que nos has solicitado. Si aceptas que nos comuniquemos contigo, marca las casillas a continuación:
                        </p>
                            <label htmlFor="consentimiendo-datos"></label>
                        <fieldset className="flex-acepto">
                                <input type="checkbox" name="consentimiendo-datos" required></input>
                                <p>Acepto recibir otras comunicaciones de Tierra de Genios.</p>
                        </fieldset>
                            <label htmlFor="consentimiendo-datos"></label>
                        <fieldset className="flex-acepto">
                                <input type="checkbox" name="consentimiendo-datos" required></input>
                                <p>Acepto permitir a Tierra de Genios almacenar y procesar mis datos personales.</p>
                        </fieldset>
                    </fieldset>
                    {/* Acá va el captcha */}
                    <button type="submit" className="button-form">Enviar</button>
                    </form>
                </article>
            </section>
        </main>
    )
}

export default solicitarBecas;