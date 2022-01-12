import './App.css';
// import Header from "../Header/header"
import Header2 from "../Header2/header"
import Footer from "../Footer/footer"
import Switch from "../Switch/switch"
import {BrowserRouter as Router} from "react-router-dom";
import React, {useEffect} from "react"
import ReactGa from "react-ga";

/**** Icons ****/

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faGoogle, faInstagramSquare, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons'
import { fas, faBars, faIdCard, faGlobeAmericas, faCalendarAlt, faArrowUp} from '@fortawesome/free-solid-svg-icons'

library.add(fas, fab, faBars, faFacebookSquare, faInstagramSquare, faWhatsappSquare, faGoogle, faIdCard, faGlobeAmericas, faCalendarAlt, faArrowUp)

  // const router = useRouter()

  // useEffect(() => {
  //   import('react-facebook-pixel')
  //     .then((x) => x.default)
  //     .then((ReactPixel) => {
  //       ReactPixel.init('XXXXXXXXXXXXXXXXXXXXX') // facebookPixelId
  //       ReactPixel.pageView()

  //       router.events.on('routeChangeComplete', () => {
  //         ReactPixel.pageView()
  //       })
  //     })
  // }, [router.events])


function App() {

  useEffect(() => {
      ReactGa.initialize('G-YZ9S63BMYY')

      ReactGa.pageview(window.location.pathname)
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
