import React from "react";
import Logo from "../assets/System Image/Logo.png"
import { FaShoppingCart } from "react-icons/fa";
import { TbBaselineDensitySmall } from "react-icons/tb";
import "../Style/Navbar.css"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    let cartval = useSelector((state)=>state.cart.count)
    let navigate = useNavigate();
    const handleCartClick = ()=>{
        navigate('/cart')
    }

    return (
        <>
            <header className="nav-header">
                <div className="navbar">
                    <div className="logo-part">
                        <img className="logo" src={Logo} alt="logo" />
                        <h1>Tic Tac Toy</h1>
                    </div>
                    <input className="input-search" type="search" placeholder="Search the Toy" />
                    <div className="aside">
                        <FaShoppingCart className="card-icon" onClick={handleCartClick}/>
                        <span className="cartspan">{cartval}</span>
                        <button className="btn" type="button">Login</button>
                    </div>
                    <div className="mr-icon">
                    <TbBaselineDensitySmall />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar