import React from 'react';
// import OnProgress from '../../components/OnProgress/OnProgress'
// import Navbartec from './Navbartec'
import './Tecmm.css';

import landing from '../../img/landing.jpg';
import tshirt from '../../img/tshirt.jpg';
import house from '../../img/house.jpg';
import exampleimage1 from '../../img/example-1.jpg';
import exampleimage2 from '../../img/example-2.png';
import {Navbar, Carousel, Nav } from 'react-bootstrap'; 
// import Navbar from '../../components/Navbar/Navbar';

class Tecmm extends React.Component {

    render() {
        return (
            <div className="tecmm-page">

                {/* <span className="fixed-top"><Navbartec></Navbartec></span> */}

                <Navbar className="justify-content-around" fixed="top" expand="lg">
                    <Navbar.Brand href="#home">Tecmm Campus Chapala</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#section-hero">Vida estudiantil</Nav.Link>
                            <Nav.Link href="#section-events">Eventos</Nav.Link>
                            <Nav.Link href="#section-announcement">Anuncios</Nav.Link>
                            <Nav.Link href="#section-links">Enlaces</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <section className="d-flex justify-content-center align-items-center container-fluid text-center section-hero" id="section-hero">
                    <h1>Vida estudiantil en el Tecmm Campus Chapala</h1>
                </section>

                <div className="container">

                    <section className="section section-events text-center" id="section-events">
                        <h3>Eventos anteriores</h3>

                        <div className="masonry">
                            <div className="item level-1">
                                <img src={landing} alt=""></img>
                            </div>
                            <div className="item level-2">
                                <img src={tshirt} alt=""></img>
                            </div>
                            <div className="item level-3">
                                <img src={house} alt=""></img>
                            </div>
                            <div className="item level-1">
                                <img src={landing} alt=""></img>
                            </div>
                            <div className="item level-2">
                                <img src={tshirt} alt=""></img>
                            </div>
                            <div className="item level-3">
                                <img src={house} alt=""></img>
                            </div>
                            <div className="item level-1">
                                <img src={landing} alt=""></img>
                            </div>
                            <div className="item level-2">
                                <img src={tshirt} alt=""></img>
                            </div>
                            <div className="item level-3">
                                <img src={house} alt=""></img>
                            </div>
                            <div className="item level-1">
                                <img src={landing} alt=""></img>
                            </div>
                            <div className="item level-2">
                                <img src={tshirt} alt=""></img>
                            </div>
                            <div className="item level-3">
                                <img src={house} alt=""></img>
                            </div>
                        </div>
                    </section>

                    <section className="section section-announcement text-center" id="section-announcement">
                        <h3>Anuncios</h3>

                        <div>
                            <h4 className="important">Importante</h4>
                            <img src={exampleimage2} className="img-fluid" alt="Important annoucement" />
                        </div>

                        <br/>

                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={exampleimage1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Primer enlace</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={exampleimage1}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Segundo enlace</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={exampleimage1}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Tercer enlace</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>

                    </section>

                    <section className="section section-links text-center" id="section-links">
                        <div className="row">
                            <div className="col">

                                <h3>Enlaces importantes</h3>

                                <div className="row">
                                    <div className="col-12 col-md-6 order-1 order-md-1"><img src={exampleimage2} className="img-fluid" alt="Link 1" /></div>
                                    <div className="col-12 col-md-6 order-2 order-md-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolorem maxime laboriosam magnam expedita architecto omnis aut impedit? Enim amet, aliquid facilis possimus quis similique repellendus doloribus! Illum, nisi consequatur! Blanditiis nihil, amet debitis alias minima mollitia, molestiae, recusandae quasi vitae quidem officiis illo culpa omnis earum tenetur magnam architecto. Nulla tempore dolorem quidem, excepturi voluptatem voluptate at commodi in debitis? Quasi, modi. Magnam impedit, beatae aspernatur maiores vero dicta!</div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 order-2 order-md-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolorem maxime laboriosam magnam expedita architecto omnis aut impedit? Enim amet, aliquid facilis possimus quis similique repellendus doloribus! Illum, nisi consequatur! Blanditiis nihil, amet debitis alias minima mollitia, molestiae, recusandae quasi vitae quidem officiis illo culpa omnis earum tenetur magnam architecto. Nulla tempore dolorem quidem, excepturi voluptatem voluptate at commodi in debitis? Quasi, modi. Magnam impedit, beatae aspernatur maiores vero dicta!</div>
                                    <div className="col-12 col-md-6 order-1 order-md-2"><img src={exampleimage2} className="img-fluid" alt="Link 1" /></div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 order-1 order-md-1"><img src={exampleimage2} className="img-fluid" alt="Link 1" /></div>
                                    <div className="col-12 col-md-6 order-2 order-md-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolorem maxime laboriosam magnam expedita architecto omnis aut impedit? Enim amet, aliquid facilis possimus quis similique repellendus doloribus! Illum, nisi consequatur! Blanditiis nihil, amet debitis alias minima mollitia, molestiae, recusandae quasi vitae quidem officiis illo culpa omnis earum tenetur magnam architecto. Nulla tempore dolorem quidem, excepturi voluptatem voluptate at commodi in debitis? Quasi, modi. Magnam impedit, beatae aspernatur maiores vero dicta!</div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 order-2 order-md-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolorem maxime laboriosam magnam expedita architecto omnis aut impedit? Enim amet, aliquid facilis possimus quis similique repellendus doloribus! Illum, nisi consequatur! Blanditiis nihil, amet debitis alias minima mollitia, molestiae, recusandae quasi vitae quidem officiis illo culpa omnis earum tenetur magnam architecto. Nulla tempore dolorem quidem, excepturi voluptatem voluptate at commodi in debitis? Quasi, modi. Magnam impedit, beatae aspernatur maiores vero dicta!</div>
                                    <div className="col-12 col-md-6 order-1 order-md-2"><img src={exampleimage2} className="img-fluid" alt="Link 1" /></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="footer text-center" id="footer">
                        <hr/>
                        <h6>Tecmm Chapala 2020 - 2024</h6>
                    </footer>

                </div>
            </div>
        );
    }
}

export default Tecmm;