import React, { useState } from "react";
import { Button, Navbar, Container, Nav, NavDropdown, FormControl, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  // Menu de Links
  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Productos", path: "/products" },
    { name: "FAQ", path: "/about" },
    { name: "Contacto", path: "/contact" },
  ];

  return (
    <>
      <header className="header">
        <NavLink to="/" className="logo-container">
          <span className="logo">MisticA</span>
        </NavLink>
         <nav className="navbar">
          <ul className="nav-links">
            {menuLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path}>
                <Button className="NavButton">{link.name} </Button>
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/cart" className="link">
                <CartWidget />
              </NavLink>
            </li>
          </ul>
          
        </nav>
      </header>
 
    </> 
    
  );  
};

export default NavBar;
