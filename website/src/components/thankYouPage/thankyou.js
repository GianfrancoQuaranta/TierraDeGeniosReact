import React from 'react';
import Logo from "../Home/img/TDG-completo.webp"
import "./thankyou.css"

function ThankYou(){

    return(
        <main>
            <section id="thank-you">
                <figure id="logo-thank">
                    <img src={Logo}  alt="logo"/>
                </figure>
                <h1>¡Muchas Gracias!</h1>
                <h3>Desde Tierra De Genios te queremos agradecer de corazón por aportar y darle una oportunidad a quien lo necesita.</h3>
                <h3>No te olvides de compartir en redes sociales asi podemos dar muchas becas y poder seguir ayudando :)</h3>
                <a href="/" className="button">Volver</a>
            </section>
        </main>
    )
}

export default ThankYou;