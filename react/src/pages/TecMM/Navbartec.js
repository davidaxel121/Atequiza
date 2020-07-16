import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Tecmm.css';

export class Navbartec extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top justify-content-between">
                <Link className="navbar-brand link" to="/">Atequiza</Link>
                <div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link link" to="/tecmm">Vida estudiantil</Link>
                            <Link className="nav-item nav-link link" to="/tecmm">Eventos</Link>
                            <Link className="nav-item nav-link link" to="/tecmm">Anuncios</Link>
                            <Link className="nav-item nav-link link" to="/tecmm">Enlaces</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbartec;