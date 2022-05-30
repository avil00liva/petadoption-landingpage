import { useState } from "react"
import './App.css'
import Ayuda from "./components/Ayuda"
import Footer from './components/Footer'
import GridHugSection from "./components/GridHugSection"
import Header from './components/Header'
import HogarTransito from "./components/HogarTransito"
import MenuMobile from './components/MenuMobile'
import Navbar from './components/Navbar'
import Process from "./components/Process"
import SectionMain from './components/SectionMain'


function App() {
const [isOpen, setIsOpen]=useState(false)
const menuAction = ()=>{
  setIsOpen(!isOpen)
}

  return (
    <div className="mainContainer">
      <Navbar menuAction={menuAction} />
      <Header />
      <SectionMain />
      <Process />
      <HogarTransito />
      <Ayuda />
      <GridHugSection />
      <Footer />

      <MenuMobile isOpen={isOpen} />
    </div>
  )
}

export default App
