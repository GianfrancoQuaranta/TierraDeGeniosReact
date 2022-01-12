import './App.css';
// import Header from "../Header/header"
import Header2 from "../Header2/header"
import Footer from "../Footer/footer"
import Switch from "../Switch/switch"
import React from "react"


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
  return (
      <React.Fragment>
        <Header2 />
      <React.StrictMode>
        <Switch />
      </React.StrictMode>
        <Footer />
      </React.Fragment>
  );  
}

export default App;
