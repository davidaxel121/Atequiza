import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import './styles/Navbar.css';

export class MyNavbar extends Component {
    render() {
        return (
            <Navbar fixed="top" expand="lg" className="justify-content-between navbar">
                <div>
                    <Navbar.Brand><Link className="mynavbar-link" to="/">Atequiza</Link></Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="mr-auto text-center">
                            <Nav.Link><Link className="mynavbar-link" to="/events">Eventos</Link></Nav.Link>
                            <Nav.Link><Link className="mynavbar-link" to="/photos">Fotografia</Link></Nav.Link>
                            <Nav.Link><Link className="mynavbar-link" to="/restaurants">Comida</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}

export default MyNavbar;