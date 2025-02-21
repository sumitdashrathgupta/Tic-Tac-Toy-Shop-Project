import React from "react";
import Navbar from "./Components/Navbar"
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer"
import ProductID from "./Pages/ProductID"
import Landing_Page_Display from "./Components/Landing_Page_Display"
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Landing_Page_Display/:ProductId" element={<Landing_Page_Display />}/>
                    {/* <Route path=":ProductID" element={<ProductID/>}/>
                </Route> */}
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App