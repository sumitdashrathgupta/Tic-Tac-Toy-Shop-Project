import React, { useState, useEffect } from "react";
import Logo from "../assets/System Image/Logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { TbBaselineDensitySmall } from "react-icons/tb";
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
                <span
                  className="hello-text"
                  style={{ width: "1px", position: "relative", right: "50px" }}
                >
                  Hello, himanshuv07
                </span>
                {/* {user.username} */}
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
