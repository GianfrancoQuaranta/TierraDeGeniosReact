import React from 'react';
import {Route,Switch,BrowserRouter} from "react-router-dom";
import Home from "../Home/home";
import solicitarBeca from "../Solicitar-beca/solicitarBeca";
import Login from "../Login/login";
import Register from "../Register/register";
import Applicant from "../ApplicantDetail/applicant";
import AboutUs from "../AboutUs/about-us";



// componentDidUpdate = (prevProps) => {
//     if(this.props.match.params.id !== prevProps.match.params.id ) {
//       // fetch the new product based and set it to the state of the component
// };
// };

function SwitchLinks(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/solicitar-beca" component={solicitarBeca} />
            <Route path="/registrarse" component={Register} />
            <Route path="/ingresar" component={Login} />
            <Route path="/detalle-aplicante" component={Applicant} />
            <Route path="/sobre-nosotros" component={AboutUs} />
        </Switch>
    );
}

export default SwitchLinks;