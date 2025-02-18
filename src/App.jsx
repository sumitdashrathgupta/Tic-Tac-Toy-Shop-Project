import React from "react";
import Navbar from "./Components/Navbar"
import LandingPage from "./Components/Landing"
import Products from "./Components/Products";
// import Footer from "./Components/Footer"

const App = () => {
    return (
        <>
            <Navbar />
            <LandingPage />
            <Products />
            {/* <Footer /> */}
        </>
    )
}

export default App