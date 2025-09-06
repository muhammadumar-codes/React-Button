import  "./App.css"
import Count from "./Pages/Count/Count"
import Header from './components/Header/Header'
import Registraiton from "./Pages/Registration/Registration"
import User from "./Pages/User-Api/User"
import Login from "./Pages/Login/Login"
import Footer from  "./components/Footer/Footer"
import { useState } from "react"

export default function App(){
const [Page,SetPage]=useState("home")


    return (
        <>
        <Header SetPage={SetPage}/>
        {Page==="count" && <Count/>}
        {Page==="Login" && <Login/>}
        {Page==="User" && <User/>}
        {Page==="Registration" && <Registraiton/>}
        <Footer/>
        
        </>
    )
}