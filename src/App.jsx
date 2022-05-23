import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SectionMain from './components/SectionMain'


function App() {


  return (
    <div className="mainContainer">
      <Navbar />
      <Header />
      <SectionMain />
      <Footer />
    </div>
  )
}

export default App
