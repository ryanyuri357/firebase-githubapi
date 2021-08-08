import React, { useState, useContext } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          RYP Firestore App
        </Link>
      </NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="text-white">Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white">Signin</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white">Logout</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
