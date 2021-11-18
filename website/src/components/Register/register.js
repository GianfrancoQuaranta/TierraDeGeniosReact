import React from 'react';
import "./register.css"

/*** ICONOS ***/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Register (){
    return(
        <main id="register-main">
        <section class="section-registro">
        <h1 class="titular-uno"><strong>¡Bienvenidos!</strong></h1>
            <article class="registro-uno">
            <p class="registrarme"><strong>Registrarme con:</strong></p>
            <FontAwesomeIcon icon={["fab","facebook-square"]} id="facebook" />
            <FontAwesomeIcon icon={["fab","fa-google"]} id="google" />
            </article>
            <section class="registro-dos">
                <form class="form-registro" action="/user/register" method="POST" enctype="multipart/form-data">
                    <h3 class="titular-dos"><strong>Formulario de registro</strong></h3>
                    <fieldset>
                        <label>Nombre:</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Nombre" class= "usuarioNombre" value="" />
                        <p class="mensajeFirstName"> </p>
                        {/* <% if (locals.errors && errors.firstName) { %>
                            <p id= "text-danger">
                                <%= errors.firstName.msg %> 
                            </p>
                        <% } %> */}
                        
                        <label>Apellido:</label>
                        <input type="text" name="lastName" id="lastName" placeholder="Apellido" class= "usuarioNombre"  value="" />
                        <p class="mensajeLastName"> </p>
                        {/* <% if (locals.errors && errors.lastName) { %>
                            <p id= "text-danger">
                                <%= errors.lastName.msg %> 
                            </p>
                        <% } %> */}
                        <label for="avatar">Seleccionar imagen de perfil</label>
                        <input type="file" name="avatar" id="avatar" class= "usuarioNombre" />
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
                        <label>Email:</label>
                        <input type="email" name="email" id="email" placeholder= "Email" class="usuarioNombre" />
                        <p class="mensajeEmail"> </p>
                        {/* <% if (locals.errors && errors.email) { %>
                            <p id="text-danger">
                                <%= errors.email.msg %> 
                            </p>
                        <% } %>
                        */}
                        <label>Fecha de Nacimiento:</label>
                        <input class="fecha-nac" type="date" name="birthDate" value="" min="1930-01-01" max="2019-12-30" />
                        <p class="mensajeBirthDate"> </p>
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
                        
                        <label>Domicilio:</label>
                        <input type="text" name="adress" id="adress" placeholder="Dirección" class="usuarioNombre"  value="" />
                        <p class="mensajeAdress"> </p>
                        {/* <% if (locals.errors && errors.adress) { %>
                            <p id= "text-danger">
                                <%= errors.adress.msg %> 
                            </p>
                        <% } %> */}
                        <label>Número de contacto:</label>
                        <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Telefono" class= "usuarioNombre"  value="" />
                        <p class="mensajePhoneNumber"> </p>
                        {/* <% if (locals.errors && errors.phoneNumber) { %>
                            <p id= "text-danger">
                                <%= errors.phoneNumber.msg %> 
                            </p>
                        <% } %> */}
                        
                        <label>País:</label>
                        <input type="text" name="country" id="country" placeholder="Pais" class="usuarioNombre" value="" />
                        <p class="mensajeCountry"> </p>
                        {/* <% if (locals.errors && errors.country) { %>
                            <p id= "text-danger">
                                <%= errors.country.msg %> 
                            </p>
                        <% } %> */}
                        
                        <label>Contraseña:</label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" class="usuarioNombre" />
                        <p class="mensajePassword"> </p>
                        {/* <% if (locals.errors && errors.password) { %>
                            <p id= "text-danger">
                                <%= errors.password.msg %> 
                            </p>
                        <% } %> */}
                        <label>Confirmar contraseña:</label>
                        <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirmar contraseña" class="usuarioNombre" />
                        <p class="mensajePasswordConfirm"> </p>
                        {/* <% if (locals.errors && errors.passwordConfirm) { %>
                            <p id= "text-danger">
                                <%= errors.passwordConfirm.msg %> 
                            </p>
                        <% } %> */}
                        <fieldset class="opciones-pago">
                            <h3 class="opciones">Seleccionar opciones de contribución</h3>
                            <p class="mensajeMediosDePago"> </p>
                            {/* <% if (locals.errors && errors.medio_de_pago) { %>
                                
                                <p id= "text-danger">
                                    <%= errors.medio_de_pago.msg %> 
                                </p>
                            <% } %> */}
                            {/* <% for( let i = 0; i < mediosDePago.length; i++ ) { %>
                                
                                <label for="">
                                <input class="forma-pago" type="checkbox" name="medio_de_pago" value= "<%= mediosDePago[i].id %>"> <%= mediosDePago[i].medio_de_pago %>
                                
                                </label>
                            
                            <% } %> */}
                        </fieldset>
                    </fieldset>
                <a href="/" /><input class="button-dos" type="submit" value="Registrarme" />  
                </form>
            </section>
        </section>
    </main>
    )
}
export default Register