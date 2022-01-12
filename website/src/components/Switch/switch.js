/** IMPORTS */

import React, {useEffect} from 'react';
import {Route,Switch,useLocation, BrowserRouter as Router} from "react-router-dom";
import Home from "../Home/home";
import solicitarBeca from "../Solicitar-beca/solicitarBeca";
import Login from "../Login/login";
import ThankYou from "../thankYouPage/thankyou"
import Register from "../Register/register";
import Applicant from "../ApplicantDetail/applicant";
import AboutUs from "../AboutUs/about-us";
import Error from "../error404/error";
import ReactGa from "react-ga";
import { faWindows } from '@fortawesome/free-brands-svg-icons';

/** CODE **/

// function usePageViews(){
//     let location = useLocation();
//     useEffect(() => {
//         if (!window.GA_INITIALIZED){
//             ReactGa.initialize("G-YZ9S63BMYY");
//             faWindows.GA_INITIALIZED = true;
//         }
//         ReactGa.set({ page: location.pathname });
//         ReactGa.pageview(location.pathname);
//     },[location]);
// }

useEffect(() => {
    ReactGa.initialize("G-YZ9S63BMYY")

    ReactGa.pageview(window.location.pathname)
}, [])

function SwitchLinks(){
    // usePageViews()
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/solicitar-beca" component={solicitarBeca} />
                <Route path="/registrarse" component={Register} />
                <Route path="/ingresar" component={Login} />
                <Route path="/detalle-aplicante" component={Applicant} />
                <Route path="/sobre-nosotros" component={AboutUs} />
                <Route path="/thank-you" component={ThankYou} />
                <Route path="" component={Error} />
                <Route path="*" component={Error} />
            </Switch>
        </Router>
    );
}

export default SwitchLinks;