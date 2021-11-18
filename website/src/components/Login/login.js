import React from 'react';
import "./login.css"

function Login(){
    return(
    <main id="main-login">
        <section id= "section-login">
                <form id="form-login" action="/user/login?method" method="POST"> 
                    <p class="titular"><strong>Ingresá</strong></p>
                    <p class="dummy-text">El éxito no se mide en el dinero, sino en la diferencia que marcas en las personas. – Michelle Obama</p>
                    <input type="email" name="email" id="email"  placeholder="Email" class="input-campo" value="" />
                    <p class="mensajeEmail"> </p>
                    {/* <% if (locals.errors && errors.email) { %>
                        <p class = "msg-error">
                            <%= errors.email.msg %> 
                        </p>
                    <% } %> */}
                    <input type="password" name="password" id="password"  placeholder="Contraseña" class="input-campo" />
                    <p class="mensajePassword"> </p>
                    {/* <% if (locals.errors && errors.password) { %>
                        <p class = "msg-error">
                            <%= errors.password.msg %> 
                        </p>
                    <% } %> */}
                    <fieldset id="flex-remember">
                        <label for="remember"></label>
                        <input name="remember" id="remember" type="checkbox" />
                        <p>Recordarme</p>
                    </fieldset>
                    <fieldset id="flex-ingresar">
                        <a href="/" id="buttonIngresar"></a>
                        <input id="button-login" type="submit" value="Ingresar" />
                        <a href="/user/contrasenia"><p class="olvide">Olvidé mi contraseña</p></a>
                        <a href="/user/register"><p class="crear">Crear mi cuenta</p></a>
                    </fieldset>
                </form>        
        </section>
    </main>
    )
}

export default Login;