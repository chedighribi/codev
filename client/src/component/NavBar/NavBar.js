import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Scroll from "react-scroll";
import "./NavBar.css";
import NavBarModal from "./NavBarModal";

const NavBar = () => {
  let scroll = Scroll.animateScroll;
  const scrollTop = (e) => {
    scroll.scrollToTop();
    e.preventDefault();
  };
  return (
    <div className="navigation-menu">
      <div className="navigation-logo">
        <a href="/">
          <img width="180px" src="./logo.png" alt="logo" />
        </a>
      </div>
      <div className="navigation-ul">
        <ul>
          <li>
            <a href="#" onClick={scrollTop}>
              Accueil
            </a>
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
        <div className="menu-icon">
          <NavBarModal />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
