import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./HeaderStyle.css";
const Header = () => {
  return (
    <div className="app__header">
      <p> the best way to know about coktails</p>

      <button id="header-button">Let's explore</button>
    </div>
  );
};

export default Header;
