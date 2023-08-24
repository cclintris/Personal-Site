import React from "react"
import Navbar from "./Navbar"
import Header from "./Header"
import Nav from "./Nav"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Canvas from "./Canvas"


function Home() {

    return (
        <>   
        <Navbar />
        <Header />
        <Nav />
        <About />
        <Canvas /> 
        <Contact />
        <Footer />
      </>
    )
}

export default Home;