import React from 'react';
import "./about-us.css"

function AboutUs(){
    return(
    <main id="main-nosotros">
        <section id="nosotros-1">
            <h2>Tierra de Genios</h2>
            <p>Somos un equipo de jóvenes comprometidos con el crecimiento económico, social y laboral de nuestra sociedad.</p>

            <h3>Misión</h3>
            <p>Combatir la pobreza con formaciones académicas cortas, tecnológicas y de rápida inserción laboral solventadas a través del financiamiento colectivo.</p>

            <h3>Visión</h3>
            <p>Argentina como potencia mundial gracias a millones de graduados con títulos y habilidades estratégicas que perciben altos ingresos, resultantes de haber financiado sus aspiraciones académicas entre millones de argentinos/as.</p>

            <h3>Valores</h3>
            <ul>
                <li>Amor por el conocimiento.</li>
                <li>Amor por nuestro país.</li>
                <li>Ética, hacer lo correcto siempre.</li>
                <li>Amor por la diversidad.</li>
                <li>Somos todos humanos.</li>
                <li>Respeto y compromiso para con toda persona y entidad que nos brince su apoyo.</li>
            </ul>
            <article id="article-box-integrantes-equipo">
                <h3 id="titulo-equipo-tierra-de-genios">Equipo Tierra de Genios</h3>
                <section class="box-integrante-equipo">
                        <p class="nombre-integrante">Gian Quaranta</p>
                        <p><b>Puesto: </b>Founder & CEO.</p>
                        <p><em>"Fundé Tierra de Genios porque creo en el potencial de los sueños y en el ser humano, que por más que a lo largo de la historia se haya equivocado, hoy tenemos la posibilidad de impactar en el mundo de manera positiva, dándole oportunidades para todas las personas que las necesitan."</em></p>
                </section>
            </article>
        </section>
        <section>
            <h3>¿Te gustaría trabajar con nosotros?</h3>
            <p>Trabajar por un sueño colectivo es lo más noble y elevado que un ser humano puede contemplar en su vida profesional, estamos dispuestos a cambiar el mundo, si ser parte de algo mucho más grande que una individualidad, y dejar tu huella en el mundo es lo que quieres, entonces, ¡Completa el siguiente formulario y nos comunicaremos contigo!</p>
            <form action="" method="">
                <h3 id="titulo-formulario">Ser parte</h3>
                    <label for="email"> 
                        <input type="email" name="email" id="email" value="" placeholder="Email" required />
                </label>
                    <label for="name"> 
                        <input type="text" name="nombre" id="name" value="" placeholder="Nombre" required />
                </label>
                    <label for="surname"> 
                        <input type="text" name="surname" id="surname" value="" placeholder="Apellido" required />
                </label>
                    <label for="cellphone"> 
                        <input type="number" name="cellphone" id="cellphone" value="" placeholder="Celular" required />
                </label>
                    <label for="date" class="label-fecha-de-nacimiento">Fecha de Nacimiento
                        <input type="date" name="date" id="date" value="" placeholder="Fecha de Nacimiento" required />
                </label>
                    <label for="city"> 
                        <input type="text" name="city" id="city" value="" placeholder="Ciudad" required />
                </label>
                    <label for="localidad"> 
                        <input type="text" name="localidad" id="localidad" value="" placeholder="Localidad" required />
                </label>
                    <label for="country"> 
                        <input type="text" name="country" id="country" value="" placeholder="País" required />
                </label>
                    <label for="LinkedIn-url"> 
                        <input type="url" name="LinkedIn-url" id="LinkedIn-url" value="" placeholder="LinkedIn-url" required />
                </label>
                    <label for="perfil-profesional"> 
                        <textarea name="perfil-profesional" id="perfil-profesional" value="" placeholder="Cuentanos sobre tu perfil profesional" required></textarea>
                </label>
                    <fieldset>
                        <label for="curriculum-y-o-portfolio">Cargar CV y/o portfolio</label>
                        <input type="file" name="curriculum-y-o-portfolio" id="curriculum-y-o-portfolio" value="" multiple required />
                </fieldset>
                    <fieldset>
                        <p class="p-consentimiento-datos">*Tierra de Genios se compromete a proteger y respetar tu privacidad, usaremos
                        tu información personal para administrar tu cuenta y proporcionar los que nos has solicitado. Si aceptas que nos comuniquemos contigo, marca las casillas a continuación:
                        </p>
                
                        <label for="consentimiendo-datos" class="label-checkbox">
                                <input type="checkbox" name="consentimiendo-datos" id="consentimiendo-datos" value="acepta-comunicaciones" placeholder="" 
                                class="input-label-consentimiento-datos" required /><p class="p-input-label-consentimiento-datos">Acepto recibir otras comunicaciones de Tierra de Genios.</p>
                    </label>    
                
                        <label for="consentimiendo-datos" class="label-checkbox">
                                <input type="checkbox" name="consentimiendo-datos" id="consentimiendo-datos" value="acepta-almacenar-y-procesar-datos" placeholder="" 
                                class="input-label-consentimiento-datos" required /><p class="p-input-label-consentimiento-datos">Acepto permitir a Tierra de Genios almacenar y procesar mis datos personales.</p>
                    </label>
                </fieldset>
            
                    <fieldset></fieldset>  
                <fieldset class="fieldset-button">
                    <button type="submit" class="button-form">Enviar</button>
                </fieldset>
            </form>
        </section>
    </main>
)

}

export default AboutUs;