/** IMPORTS */

import React from 'react';
import {Route,Switch} from "react-router-dom";
import Home from "../Home/home";
import solicitarBeca from "../Solicitar-beca/solicitarBeca";
import Login from "../Login/login";
import ThankYou from "../thankYouPage/thankyou"
import Register from "../Register/register";
import Applicant from "../ApplicantDetail/applicant";
import AboutUs from "../AboutUs/about-us";
import Error from "../error404/error";


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


function SwitchLinks(){
    // usePageViews()
    return(
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
    );
}

export default SwitchLinks;