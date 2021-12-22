import './App.css';
import Header from "../Header/header"
import Footer from "../Footer/footer"
import Switch from "../Switch/switch"
import React from "react"


/**** Icons ****/

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faGoogle, faInstagramSquare, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons'
import { fas, faBars, faIdCard, faGlobeAmericas, faCalendarAlt, faArrowUp} from '@fortawesome/free-solid-svg-icons'

library.add(fas, fab, faBars, faFacebookSquare, faInstagramSquare, faWhatsappSquare, faGoogle, faIdCard, faGlobeAmericas, faCalendarAlt, faArrowUp)


function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch />
      <Footer />
    </React.Fragment>
  );  
}

export default App;
