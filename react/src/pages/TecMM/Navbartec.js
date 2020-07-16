import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Tecmm.css';

export class Navbartec extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg justify-content-between">
                <Link className="navbar-brand link" to="/">Atequiza</Link>
                <div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link link" to="/events">Vida estudiantil</Link>
                            <Link className="nav-item nav-link link" to="/photos">Eventos</Link>
                            <Link className="nav-item nav-link link" to="/restaurants">Anuncios</Link>
                            <Link className="nav-item nav-link link" to="/tecmm">Enlaces</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbartec;