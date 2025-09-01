import  "./App.css"
import  Home from "./Pages/Home/Home"
import Header from './components/Header/Header'
import Contact from  "./Pages/Contact/Contact"
import Services from "./Pages/Services/Services"
import About  from "./Pages/About/About"
import Footer from  "./components/Footer/Footer"
import { useState } from "react"

export default function App(){
const [Page,SetPage]=useState("home")


    return (
        <>
        <Header SetPage={SetPage}/>
        {Page==="home" && <Home/>}
        {Page==="about" && <About/>}
        {Page==="services" && <Services/>}
        {Page==="contact" && <Contact/>}
        <Footer/>
        
        </>
    )
}