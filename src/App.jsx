import './index.css'
// import NavigationBar from './Components/NavigationBar'
import Home from './Components/Home'
import About from './Components/About'
import ExperienceTimeline from './Components/Timeline'
import Skillset from './Components/Skillset'
import Project from './Components/Project'
import Footer from './Components/Footer'
import { ThemeProvider } from "@material-tailwind/react";
import Contact from './Components/Contact'
import Certificates from './Components/Certificates'
import { NavigationBar } from './Components/NavigationBar2'

function App() {


  return (
    <ThemeProvider>
      <div className=" bg-gray-900 font-pop">
        {/* <NavigationBar /> */}
        <NavigationBar />
        {/* <section> */}
        <Home />
        {/* </section> */}
        {/* <section> */}
        <About />
        {/* </section> */}
        {/* <section> */}
        <Skillset />
        {/* </section> */}
        {/* <section> */}
        < Project />
        {/* </section> */}
        {/* <section> */}
        <Certificates />
        <ExperienceTimeline />
        {/* </section> */}
        {/* <section> */}
        <Contact />
        {/* </section> */}
        {/* <section> */}
        <Footer />
        {/* </section> */}


        {/* {infos} */}
      </div>
    </ThemeProvider>
  )
}

export default App
