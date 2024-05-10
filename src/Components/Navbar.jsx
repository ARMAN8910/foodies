import React, { useState } from "react";
import "../Styles.scss";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar({ scrollToReceipesSection, setReceipeResult, history }) {
  const [receipe, setReceipe] = useState("");
  const app_id = "ce245cb9";
  const app_key = "ae67057701f28b84ebece63503ed138d";

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const onReceipeInput = (event) => {
    setReceipe(event.target.value);
  };

  const getReceipe = async () => {
    console.log("Welcome");

    const options = {
      method: "GET",
      url: `https://api.edamam.com/api/recipes/v2?type=public&q=${receipe}&app_id=${app_id}&app_key=${app_key}`,
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setReceipeResult(response.data);
      scrollToReceipesSection();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    history.push("/");
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-section">
        <div className="heading-container">
          <h1 className="navbar-heading">Foodies</h1>
        </div>
        {!isLoggedIn ? (
          <div className="login-signup">
            <div className="signup-section">
              <Link to={"/signup"}>Signup</Link>
            </div>
            <div className="login-section">
              <Link to={"/login"}>Login</Link>
            </div>
          </div>
        ) : (
          <Link to={"/"} onClick={handleLogout} className="logout">Logout</Link>
        )}
      </div>
      <div className="search-section">
        {isLoggedIn ? (
          <>
            <div className="input-section">
              <input
                type="text"
                name="receipe"
                value={receipe}
                onChange={onReceipeInput}
                placeholder="What would you like to eat today"
                className="receipe-input"
              />
            </div>
            <div className="button-section">
              <button className="btn btn-danger" onClick={getReceipe}>
                Search
              </button>
            </div>
          </>
        ) : (
          <div className="description">
            <div>
              <p>Welcome to Foodies! Discover and cook delicious recipes from around the world with ease...🤤</p>
            </div>
            <div>
              <p><Link to={'/login'} className="link">Login</Link> to continue.</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
