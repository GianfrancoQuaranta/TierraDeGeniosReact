import './App.css';
// import Header from "../Header/header"
import Header2 from "../Header2/header"
import Footer from "../Footer/footer"
import Switch from "../Switch/switch"
import {BrowserRouter as Router} from "react-router-dom";
import React, {useEffect} from "react"
import ReactGa from "react-ga4";

/**** Icons ****/

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faGoogle, faInstagramSquare, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons'
import { fas, faBars, faIdCard, faGlobeAmericas, faCalendarAlt, faArrowUp} from '@fortawesome/free-solid-svg-icons'

library.add(fas, fab, faBars, faFacebookSquare, faInstagramSquare, faWhatsappSquare, faGoogle, faIdCard, faGlobeAmericas, faCalendarAlt, faArrowUp)


function App() {

  useEffect(() => {
      ReactGa.initialize('G-YZ9S63BMYY')

      ReactGa.send({ hitType: "home", page: "/" })
  }, [])

  useEffect(() => {
    console.log("hola", window.location.pathname)
  })

  return (
      <Router>
          <Header2 />
        <React.StrictMode>
          <Switch />
        </React.StrictMode>
          <Footer />
      </Router>
  );  
}

export default App;
