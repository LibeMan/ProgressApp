import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="App">
            <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
            <ReactBootStrap.Navbar.Brand href="#home">Plant timer</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto"> 
                <Link to="/about">
                <ReactBootStrap.Nav.Link href="#about">About</ReactBootStrap.Nav.Link>
                </Link>
                <Link to="/highscores">
                <ReactBootStrap.Nav.Link href="#highscores">Highscores</ReactBootStrap.Nav.Link>
                </Link>
                <ReactBootStrap.NavDropdown title="YEET" id="collasible-nav-dropdown">
                    <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                <Link to="/chat">
                <ReactBootStrap.Nav.Link href="#chat">Chat with others</ReactBootStrap.Nav.Link>
                </Link>
                <Link to="/myplants">
                <ReactBootStrap.Nav.Link eventKey={2} href="#myplants">
                    My plants
                </ReactBootStrap.Nav.Link>
                </Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    )
  }
  
  export default NavBar