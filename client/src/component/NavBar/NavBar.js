import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navigation-menu">
      <div className="navigation-logo">
        <img width="180px" src="./logo.png" alt="logo" />
      </div>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/">A propos de nous</a>
        </li>
        <li>
          <a href="/">Nos réalisations</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Contactez-nous</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
