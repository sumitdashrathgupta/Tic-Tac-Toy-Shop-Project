import React from "react";
import Navbar from "./Components/Navbar"
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer"
import LandingPro from "./Components/LandingPro"
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={ <LandingPage />}/>
                <Route path="/LandingPro" element={ <LandingPro />}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App