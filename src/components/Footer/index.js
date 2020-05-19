import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "./../../assets/images/adrenalin.svg";

const Footer = () => (
  <footer className="footer">
    <Container>
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Privacy</Link>
          </li>
          <li>
            <Link to="/">Sitemap</Link>
          </li>
          <li>
            <Link to="/">Facebook</Link>
          </li>
          <li>
            <Link to="/">Linkedin</Link>
          </li>
          <li>
            <Link to="/">Instagram</Link>
          </li>
          <li>
            <Link to="/">Twitter</Link>
          </li>
        </ul>
      </nav>
    </Container>
  </footer>
);

export default Footer;
