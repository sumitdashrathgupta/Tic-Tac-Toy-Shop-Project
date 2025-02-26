import React, { useState } from "react";
import "../Style/Login.css";
import Google from "../assets/Login image/Google.png";
import { ImCross } from "react-icons/im";

const Login = ({ onClose, onLoginSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    setFormData({
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = { username: formData.username };
    onLoginSuccess(userData);
    alert(isSignUp ? "Signup Successful!" : "Login Successful!");
  };

  return (
    <>
      <div className="background-blur" onClick={onClose}></div>
      <div className="login-form">
        <section id="log-in-sign-up-form">
          <article className="sub-sign-up">
            <div className="closeBtn" onClick={onClose}>
              <ImCross />
            </div>
            <h1>{isSignUp ? "Sign Up" : "Log In"}</h1>
            <hr />
            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              )}
              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {isSignUp && (
                <>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </>
              )}
              <span className="toggle-text">
                {isSignUp ? "Already a User?" : "Don't have an account?"}{" "}
                <b onClick={toggleForm}>{isSignUp ? "Log In" : "Sign Up"}</b>
              </span>
              <button type="submit" className="login-btn">
                {isSignUp ? "Sign Up" : "Log In"}
              </button>
            </form>
            <div className="Or-container">
              <p>Or</p>
              <button className="google-btn">
                <img src={Google} alt="Google" />
                <p>Sign in with Google</p>
              </button>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Login;
