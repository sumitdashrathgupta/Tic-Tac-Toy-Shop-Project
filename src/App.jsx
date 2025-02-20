import React from "react";
import Navbar from "./Components/Navbar"
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer"
import ProductID from "./Pages/ProductID"
import Landing_Page_Display from "./Components/Landing_Page_Display"
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Landing_Page_Display" element={<Landing_Page_Display />}>
                    <Route path=":ProductID" element={<ProductID/>}/>
                </Route>
            </Routes>
            <Footer />
        </>
    )
}

export default App