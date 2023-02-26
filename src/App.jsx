import './index.css'
import NavigationBar from './NavigationBar'
import Home from './Home'
import About from './About'
import Timeline from './Timeline'
import Skillset from './Skillset'
import Project from './Project'
import Footer from './Footer'

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
