import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MdMenu } from "react-icons/md";
import logo from "../img/logo1.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen(!isOpen);


  // show-small-nav
  return (
    <>
      <header className="header-wrapper">
        <div className="header-top">
          <div className="header-logo">
            <Link to="/">
              <img src={logo} alt="Hotel Resort Logo" />
            </Link>
          </div>
          <nav className="header-nav-big">
            <ul>
              <li >
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className="menu-open-btn"
            onClick={handleToggleMenu}
          >
            <MdMenu />
          </button>
        </div>
        <nav className={isOpen ? "header-nav-small show-small-nav" : "header-nav-small"}>
          <ul>
            <li>
              <Link onClick={()=>setIsOpen(!isOpen)}  to="/">Home</Link>
            </li>
            <li>
              <Link onClick={()=>setIsOpen(!isOpen)} to="/rooms">Rooms</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
