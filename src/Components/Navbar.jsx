import React, { useState, useEffect } from "react";
import Logo from "../assets/System Image/Logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { TbBaselineDensitySmall } from "react-icons/tb";
import "../Style/Navbar.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  const cartval = useSelector((state) => state.cart.cartCount);
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

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
  };

  return (
    <>
      <header className="nav-header">
        <div className="navbar">
          <div className="logo-part" onClick={() => navigate("/")}>
            <img className="logo" src={Logo} alt="logo" />
            <h1>Tic Tac Toy</h1>
          </div>
          <input
            className="input-search"
            type="search"
            placeholder="Search the Toy"
          />
          <div className="aside">
            <FaShoppingCart
              className="card-icon"
              onClick={() => navigate("/cart")}
            />
            <span className="cartspan">{cartval}</span>

            {user ? (
              <>
                <span className="hello-text">Hello, {"himanshuv07"}</span>
                {user.username}
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
          <div className="mr-icon">
            <TbBaselineDensitySmall />
          </div>
        </div>
      </header>

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
