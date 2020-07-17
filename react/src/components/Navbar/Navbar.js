import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {Navbar, Nav } from 'react-bootstrap'; 

import './Navbar.css';

export class NavbarHome extends Component {
    render() {
        return (
            <Navbar className="justify-content-around" fixed="top" expand="lg">
                    <Navbar.Brand href="#home">Tecmm Campus Chapala</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link>Eventos</Nav.Link>
                            <Nav.Link>Fotos</Nav.Link>
                            <Nav.Link>Restaurantes</Nav.Link>
                            <Nav.Link><Link to="/tecmm">Tecmm</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default NavbarHome;