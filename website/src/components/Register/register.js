import React from 'react';
import "./register.css"

/*** ICONOS ***/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Register (){
    return(
        <main id="main-register">
        <section id="section-registro">
        {/* <h1 class="titular-uno"><strong>¡Bienvenidos!</strong></h1>
            <article class="registro-uno">
            <p class="registrarme"><strong>Registrarme con:</strong></p>
                <article id="flex-marcas">
                    <FontAwesomeIcon icon={["fab","facebook-square"]} id="facebook" />
                    <FontAwesomeIcon icon={["fab","google"]} id="google" />
                </article>
            </article> */}
            <section id="registro-dos">
                <form id="form-registro" action="/user/register" method="POST" enctype="multipart/form-data" className='button-with-gradient-border'>
                    <p id="registrarse-titulo">Formulario de registro</p>
                    <fieldset>
                        {/* <label>Nombre:</label> */}
                        <input type="text" name="firstName" placeholder="Nombre"  />
                        <p class="mensajeFirstName"> </p>
                        {/* <% if (locals.errors && errors.firstName) { %>
                            <p id= "text-danger">
                                <%= errors.firstName.msg %> 
                            </p>
                        <% } %> */}
                        
                        {/* <label>Apellido:</label> */}
                        <input type="text" name="lastName" placeholder="Apellido"  />
                        <p class="mensajeLastName"> </p>
                        {/* <% if (locals.errors && errors.lastName) { %>
                            <p id= "text-danger">
                                <%= errors.lastName.msg %> 
                            </p>
                        <% } %> */}
                        {/* <label for="avatar">Seleccionar imagen de perfil</label> */}
                        <input type="file" name="avatar" />
                        <p class="mensajeAvatar"> </p>
                        {/* <% if (locals.errors && !errors.avatar) { %>
                            <p id="text-danger">
                                Debes seleccionar una imagen de perfil nuevamente
                            </p>
                        <% } %>
                        <% if (locals.errors && errors.avatar) { %>
                            <p id="text-danger">
                                <%= errors.avatar.msg %> 
                            </p>
                        <% } %> */}
                        {/* <label>Email:</label> */}
                        <input type="email" name="email" placeholder= "Email" />
                        <p class="mensajeEmail"> </p>
                        {/* <% if (locals.errors && errors.email) { %>
                            <p id="text-danger">
                                <%= errors.email.msg %> 
                            </p>
                        <% } %>
                        */}
                        {/* <label>Fecha de Nacimiento:</label> */}
                        <input id="fecha-nac" type="date" name="birthDate"  min="1930-01-01" max="2019-12-30" />
                        {/* <% if (locals.errors && !errors.birdthDate) { %>
                            <p id="text-danger">
                                Debes seleccionar tu fecha de nacimiento nuevamente
                            </p>
                        <% } %>
                        <% if (locals.errors && errors.birdthDate) { %>
                            <p id="text-danger">
                                <%= errors.birthDate.msg %> 
                            </p>
                        <% } %> */}
                        
                        {/* <label>Domicilio:</label> */}
                        <input type="text" name="adress" placeholder="Dirección"   />
                        <p class="mensajeAdress"> </p>
                        {/* <% if (locals.errors && errors.adress) { %>
                            <p id= "text-danger">
                                <%= errors.adress.msg %> 
                            </p>
                        <% } %> */}
                        {/* <label>Número de contacto:</label> */}
                        <input type="tel" name="phoneNumber" placeholder="Telefono"   />
                        <p class="mensajePhoneNumber"> </p>
                        {/* <% if (locals.errors && errors.phoneNumber) { %>
                            <p id= "text-danger">
                                <%= errors.phoneNumber.msg %> 
                            </p>
                        <% } %> */}
                        
                        {/* <label>País:</label> */}
                        <input type="text" name="country" placeholder="Pais"   />
                        <p class="mensajeCountry"> </p>
                        {/* <% if (locals.errors && errors.country) { %>
                            <p id= "text-danger">
                                <%= errors.country.msg %> 
                            </p>
                        <% } %> */}
                        
                        {/* <label>Contraseña:</label> */}
                        <input type="password" name="password" placeholder="Contraseña"  />
                        <p class="mensajePassword"> </p>
                        {/* <% if (locals.errors && errors.password) { %>
                            <p id= "text-danger">
                                <%= errors.password.msg %> 
                            </p>
                        <% } %> */}
                        {/* <label>Confirmar contraseña:</label> */}
                        <input type="password" name="passwordConfirm" placeholder="Confirmar contraseña"  />
                        <p class="mensajePasswordConfirm"> </p>
                        {/* <% if (locals.errors && errors.passwordConfirm) { %>
                            <p id= "text-danger">
                                <%= errors.passwordConfirm.msg %> 
                            </p>
                        <% } %> */}
                    </fieldset>
                        <a href="/" id="buttonIngresar"></a>
                        <input id="button-login" type="submit" value="Registrarse" /> 
                </form>
            </section>
        </section>
    </main>
    )
}
export default Register