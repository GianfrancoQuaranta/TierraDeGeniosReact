import React from 'react';
import "./login.css"

function Login(){
    return(
    <main id="main-login">
        <section id= "section-login">
                <form id="form-login" action="/user/login?method" method="POST"> 
                    <p className="titular"><strong>Ingresá</strong></p>
                    <p className="dummy-text">El éxito no se mide en el dinero, sino en la diferencia que marcas en las personas. Michelle Obama</p>
                    <label htmlFor="email"></label>
                    <input type="email" placeholder="Email" />
                    <p className="mensajeEmail"> </p>
                    {/* <% if (locals.errors && errors.email) { %>
                        <p class = "msg-error">
                            <%= errors.email.msg %> 
                        </p>
                    <% } %> */}
                    <label htmlFor="password"></label>
                    <input type="password" name="password" id="password"  placeholder="Contraseña" className="input-campo" />
                    <p className="mensajePassword"> </p>
                    {/* <% if (locals.errors && errors.password) { %>
                        <p class = "msg-error">
                            <%= errors.password.msg %> 
                        </p>
                    <% } %> */}
                    <fieldset id="flex-remember">
                        <label htmlFor="remember"></label>
                        <input name="remember" id="remember" type="checkbox" />
                        <p>Recordarme</p>
                    </fieldset>
                    <fieldset id="flex-ingresar">
                        <input id="button-login" type="submit" value="Ingresar" />
                        <a href="/user/contrasenia"><p className="olvide">Olvidé mi contraseña</p></a>
                        <a href="/user/register"><p className="crear">Crear mi cuenta</p></a>
                    </fieldset>
                </form>        
        </section>
    </main>
    )
}

export default Login;