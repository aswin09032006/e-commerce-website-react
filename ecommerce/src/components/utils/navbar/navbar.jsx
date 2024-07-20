import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { FaAngleDown } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";

const Navbar = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setIsSearchClicked(!isSearchClicked);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-title" onClick={() => handleNavigation("/")}>
          <a href="/">
            <h1>
              <GiSoundWaves className="sound-icon" /> SpeakerHaven
            </h1>
          </a>
        </div>
        <div className="navbar-items">
          <div className="dropdown">
            <p>
              Shop
              <FaAngleDown />
            </p>
            <div className="dropdown-content">
              <h6 onClick={() => handleNavigation("/shop/speakers")}>
                Speakers
              </h6>
              <h6 onClick={() => handleNavigation("/shop/headphones")}>
                Headphones
              </h6>
              <h6 onClick={() => handleNavigation("/shop/accessories")}>
                Accessories
              </h6>
            </div>
          </div>
          <p onClick={() => handleNavigation("/about")}>About us</p>
          <p onClick={() => handleNavigation("/support")}>Support</p>
        </div>
        <div className="navbar-icons">
          <span
            className="material-icons navbar-icon"
            onClick={handleSearchClick}
          >
            search
          </span>
          <span
            className="material-icons navbar-icon"
            onClick={() => handleNavigation("/cart")}
          >
            shopping_cart
          </span>
          <span
            className="material-icons navbar-icon"
            onClick={() => handleNavigation("/profile")}
          >
            person
          </span>
        </div>
        {isSearchClicked && (
          <div className="search-field">
            <input type="text" placeholder="Search..." />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
