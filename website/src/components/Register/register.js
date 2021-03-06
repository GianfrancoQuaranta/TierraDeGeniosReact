import React from 'react';
import "./register.css"

/*** ICONOS ***/

function Register (){
    return(
        <main id="main-register">
        <section id="section-registro">
        {/* <h1 class="titular-uno"><strong>¬°Bienvenidos!</strong></h1>
            <article class="registro-uno">
            <p class="registrarme"><strong>Registrarme con:</strong></p>
                <article id="flex-marcas">
                    <FontAwesomeIcon icon={["fab","facebook-square"]} id="facebook" />
                    <FontAwesomeIcon icon={["fab","google"]} id="google" />
                </article>
            </article> */}
            <section id="registro-dos">
                <form id="form-registro" action="/user/register" method="POST" encType="multipart/form-data">
                    <p id="registrarse-titulo">Formulario de registro</p>
                    <fieldset>
                        {/* <label>Nombre:</label> */}
                        <input type="text" name="firstName" placeholder="Nombre"  />
                        <p className="mensajeFirstName"> </p>
                        {/* <% if (locals.errors && errors.firstName) { %>
                            <p id= "text-danger">
                                <%= errors.firstName.msg %> 
                            </p>
                        <% } %> */}
                        
                        {/* <label>Apellido:</label> */}
                        <input type="text" name="lastName" placeholder="Apellido"  />
                        <p className="mensajeLastName"> </p>
                        {/* <% if (locals.errors && errors.lastName) { %>
                            <p id= "text-danger">
                                <%= errors.lastName.msg %> 
                            </p>
                        <% } %> */}
                        {/* <label for="avatar">Seleccionar imagen de perfil</label> */}
                        <input type="file" name="avatar" />
                        <p className="mensajeAvatar"> </p>
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
                        <p className="mensajeEmail"> </p>
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
                        <input type="text" name="adress" placeholder="Direcci√≥n"   />
                        <p className="mensajeAdress"> </p>
                        {/* <% if (locals.errors && errors.adress) { %>
                            <p id= "text-danger">
                                <%= errors.adress.msg %> 
                            </p>
                        <% } %> */}
                        {/* <label>N√ļmero de contacto:</label> */}
                        <input type="tel" name="phoneNumber" placeholder="Telefono"   />
                        <p className="mensajePhoneNumber"> </p>
                        {/* <% if (locals.errors && errors.phoneNumber) { %>
                            <p id= "text-danger">
                                <%= errors.phoneNumber.msg %> 
                            </p>
                        <% } %> */}
                        
                        {/* <label>Pa√≠s:</label> */}
                        <input type="text" name="country" placeholder="Pais"   />
                        <p className="mensajeCountry"> </p>
                        {/* <% if (locals.errors && errors.country) { %>
                            <p id= "text-danger">
                                <%= errors.country.msg %> 
                            </p>
                        <% } %> */}
                        
                        {/* <label>Contrase√Īa:</label> */}
                        <input type="password" name="password" placeholder="Contrase√Īa"  />
                        <p className="mensajePassword"> </p>
                        {/* <% if (locals.errors && errors.password) { %>
                            <p id= "text-danger">
                                <%= errors.password.msg %> 
                            </p>
                        <% } %> */}
                        {/* <label>Confirmar contrase√Īa:</label> */}
                        <input type="password" name="passwordConfirm" placeholder="Confirmar contrase√Īa"  />
                        <p className="mensajePasswordConfirm"> </p>
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