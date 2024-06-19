
import './App.css'
import Navbar from './pages/navbar'
import Domov from "./pages/domov"
import About from "./pages/about"
import Trgovina from "./pages/trgovina"
import Novice from "./pages/novice"
import Footer from "./pages/footer"
import Majica_Ž from "./pages/item"
import Card from "./pages/card"
import { Route, Routes} from 'react-router-dom'

function App() {


  return (
    <>
    <Navbar />
      <Routes>
        <Route path="" element={<Domov />} />
        <Route path="/about" element={<About />} />
        <Route path="/trgovina" element={<Trgovina />} />
        <Route path="/novice" element={<Novice />} />
        <Route path="/majica" element={<Majica_Ž />} />
        <Route path="/kosarica" element={<Card />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
