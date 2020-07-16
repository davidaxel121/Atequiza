import React from 'react';
// import OnProgress from '../../components/OnProgress/OnProgress'
import Navbartec from './Navbartec'
import './Tecmm.css';

import landing from '../../img/landing.jpg';
import tshirt from '../../img/tshirt.jpg';
import house from '../../img/house.jpg';
// import Navbar from '../../components/Navbar/Navbar';

class Tecmm extends React.Component {

    render() {
        return (
            <div className="tecmm-page">

                <span className="fixed-top"><Navbartec></Navbartec></span>

                <section className="d-flex justify-content-center align-items-center container-fluid text-center section-hero" id="section-hero">
                    <h1>Vida estudiantil en el Tecmm Campus Chapala</h1>
                </section>

                <div className="container">

                    <section className="" id="section-events">
                        <div class="masonry">
                            <div class="item level-1">
                                <img src={landing} alt=""></img>
                            </div>
                            <div class="item level-2">
                                <img src={tshirt} alt=""></img>
                            </div>
                            <div class="item level-3">
                                <img src={house} alt=""></img>
                            </div>
                            <div class="item level-1">
                                <img src={landing} alt=""></img>
                            </div>
                            <div class="item level-2">
                                <img src={tshirt} alt=""></img>
                            </div>
                            <div class="item level-3">
                                <img src={house} alt=""></img>
                            </div>
                            <div class="item level-1">
                                <img src={landing} alt=""></img>
                            </div>
                            <div class="item level-2">
                                <img src={tshirt} alt=""></img>
                            </div>
                            <div class="item level-3">
                                <img src={house} alt=""></img>
                            </div>
                            <div class="item level-1">
                                <img src={landing} alt=""></img>
                            </div>
                            <div class="item level-2">
                                <img src={tshirt} alt=""></img>
                            </div>
                            <div class="item level-3">
                                <img src={house} alt=""></img>
                            </div>
                        </div>
                    </section>

                    <section className="d-flex justify-content-center align-items-center container-fluid text-center section-hero" id="section-hero">
                        <h1>Vida estudiantil en el Tecmm Campus Chapala</h1>
                    </section>

                    <section className="d-flex justify-content-center align-items-center container-fluid text-center section-hero" id="section-hero">
                        <h1>Vida estudiantil en el Tecmm Campus Chapala</h1>
                    </section>

                    <section className="d-flex justify-content-center align-items-center container-fluid text-center section-hero" id="section-hero">
                        <h1>Vida estudiantil en el Tecmm Campus Chapala</h1>
                    </section>

                    <footer className="d-flex justify-content-center align-items-center container-fluid text-center section-hero" id="section-hero">
                        <h1>Vida estudiantil en el Tecmm Campus Chapala</h1>
                    </footer>

                </div>
            </div>
        );
    }
}

export default Tecmm;