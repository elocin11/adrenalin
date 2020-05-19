import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "./../../assets/images/adrenalin.svg";

const Header = () => (
  <header className="header">
    <Container>
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Culture</Link>
          </li>
          <li>
            <Link to="/">Work</Link>
          </li>
          <li>
            <Link to="/">Clients</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/">Careers</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
);

export default Header;
