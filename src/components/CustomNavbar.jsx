// CustomNavbar.jsx
import React, { useEffect, useState } from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css"; // Make sure to create this file and paste the CSS below into it

const CustomNavbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  let ticking = false;

  const controlNavbar = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(currentScrollY);
        ticking = false;
      });
      ticking = true;
    }
  };

  useEffect(() => {
    const onScroll = () => {
      controlNavbar();
      const navbar = document.querySelector(".custom-navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <BootstrapNavbar
      expand="lg"
      sticky="top"
      className={`custom-navbar ${show ? "navbar-visible" : "navbar-hidden"}`}
    >
      <Container>
        <BootstrapNavbar.Brand href="/" className="custom-brand">
          <img
            src="/logo2.png"
            alt="Emanny Services Logo"
            className="d-inline-block align-top navbar-logo"
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="custom-link"><span>Home</span></Link>
            <Link to="/Projects" className="custom-link"><span>Projects</span></Link>
            <Link to="/Services" className="custom-link"><span>Services</span></Link>
            <Link to="/Contact" className="custom-link"><span>Contact</span></Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
