import React, { useState, useEffect } from "react";
import Logo from "../assets/System Image/Logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { TbBaselineDensitySmall } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import "../Style/Navbar.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const Navbar = (props) => {
  let cartval = useSelector((state) => state.cart.cartCount);
  let Navigatelogo = useNavigate();
  let Navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsLoginOpen(false);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setIsSidebarOpen(false);
  };

  const handleCartClick = () => {
    Navigate(`cart/${props.id - 1}`);
  };

  const handleLogo = () => {
    Navigatelogo("/");
  };

  return (
    <>
      <header className="nav-header">
        <div className="navbar">
          <div className="logo-part" onClick={handleLogo}>
            <img className="logo" src={Logo} alt="logo" />
            <h1>Tic Tac Toy</h1>
          </div>
          <input
            className="input-search"
            type="search"
            placeholder="Search the Toy"
          />
          <div className="aside">
            <FaShoppingCart className="card-icon" onClick={handleCartClick} />
            <span className="cartspan">{cartval}</span>

            {user ? (
              <>
                <span className="hello-text">Hello, {user.username}</span>
                <button className="btn logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <button className="btn" onClick={() => setIsLoginOpen(true)}>
                Login
              </button>
            )}
          </div>
          {/* Hamburger Button to open Sidebar */}
          <div className="hamburgerBtn" onClick={() => setIsSidebarOpen(true)}>
            <TbBaselineDensitySmall />
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <IoMdClose
          className="close-icon"
          onClick={() => setIsSidebarOpen(false)}
        />
        <ul>
          <li onClick={handleLogo}>🏠 Home</li>
          <li onClick={handleCartClick}>🛒 Cart ({cartval})</li>
          {user ? (
            <>
              <li>👤 {user.username}</li>
              <li onClick={handleLogout}>🚪 Logout</li>
            </>
          ) : (
            <li
              onClick={() => {
                setIsLoginOpen(true);
                setIsSidebarOpen(false);
              }}
            >
              🔑 Login
            </li>
          )}
        </ul>
      </div>

      {isLoginOpen && (
        <Login
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
};

export default Navbar;
