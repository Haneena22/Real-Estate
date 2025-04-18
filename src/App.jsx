import About from "./Components/About"
import Header from "./Components/Header"
import Projects from "./Components/Projects"
import Testimonials from "./Components/Testimonials"
import Contact from "./Components/Contact"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from "./Components/Footer"


function App() {

  return (
    <div className="w-full overflow-hidden" >
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
