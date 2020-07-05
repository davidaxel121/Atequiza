import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <Link className="navbar-brand link" to="/">Atequiza</Link>
                <div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link link" to="/events">Eventos</Link>
                        <Link className="nav-item nav-link link" to="/photos">Fotos</Link>
                        <Link className="nav-item nav-link link" to="/restaurants">Restaurantes</Link>
                    </div>
                </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;