import './index.css'
import NavigationBar from './Components/NavigationBar'
import Home from './Components/Home'
import About from './Components/About'
import Timeline from './Components/Timeline'
import Skillset from './Components/Skillset'
import Project from './Components/Project'
import Footer from './Components/Footer'

// import {Routes, Route} from 'react-router-dom'
// import ScrollToTop from './ScrollToTop'
function App() {
//   const infos = ProjectData.map(info=>{
//     return (
//         <Project
//             key={info.id}
//             info={info}
//         />
//     )
// })

  return (
    <div className=" bg-gray-900 font-pop ">
      <NavigationBar />
      <Home />
      <About />
      <Skillset />
      < Project />
      <Timeline />
      <Footer />
      {/* {infos} */}
    </div>
  )
}

export default App
