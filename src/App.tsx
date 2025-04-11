import './App.css'
import React from 'react'
import Home from './pages/home'
import Header from './components/header'
import ContactUs from './components/contactUs'
import WhyUs from './components/whyUs'
import AboutUs from './components/aboutUs'
import Gallery from './components/Gallery'
function App() {

  return (
    <React.Fragment>
    <Header/>
      <Home/>
      <WhyUs/>
      <Gallery/>
      <AboutUs/>
      <ContactUs/>
    </React.Fragment>
  )
}

export default App
