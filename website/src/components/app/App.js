import './App.css';
import Header from "../Header/header"
import Footer from "../Footer/footer"
import Switch from "../Switch/switch"
import React from "react"

/**** Icons ****/

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faGoogle, faInstagramSquare, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(fab,faBars,faFacebookSquare, faInstagramSquare, faWhatsappSquare, faGoogle)


function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch />
      <SwiperApp />
      <Footer />
    </React.Fragment>
  );  
}

export default App;
