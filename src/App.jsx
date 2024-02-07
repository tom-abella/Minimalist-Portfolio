import './index.css'
import NavigationBar from './Components/NavigationBar'
import Home from './Components/Home'
import About from './Components/About'
import ExperienceTimeline from './Components/Timeline'
import Skillset from './Components/Skillset'
import Project from './Components/Project'
import Footer from './Components/Footer'
import { ThemeProvider } from "@material-tailwind/react";

function App() {


  return (
    <ThemeProvider>
      <div className=" bg-gray-900 font-pop">
        <NavigationBar />
        <section>
          <Home />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Skillset />
        </section>
        <section>
          < Project />
        </section>
        <section>
          <ExperienceTimeline />
        </section>
        <section>
          <Footer />
        </section>

        {/* {infos} */}
      </div>
    </ThemeProvider>
  )
}

export default App
