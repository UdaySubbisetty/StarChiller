import './App.css'
import Home from './pages/home'
import Header from './components/header'
import ContactUs from './components/contactUs'
import WhyUs from './components/whyUs'
import AboutUs from './components/aboutUs'
import Gallery from './components/Gallery'
function App() {

  return (
    <>
    <Header/>
      <Home/>
      <WhyUs/>
      <Gallery/>
      <AboutUs/>
      <ContactUs/>
    
    </>
  )
}

export default App
