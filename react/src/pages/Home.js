import React from 'react';
import OnProgress from '../components/OnProgress';
import MyNavbar from '../components/Navbar';

import './styles/Home.css'

class Home extends React.Component {

    render() {
        return (
            <div className="container-fluid container-home">
                <div className="row">
                    <div className="col-12">
                        <MyNavbar />
                    </div>
                </div>
                <div className="row d-flex align-items-center justify-contenr-center home-hero">
                    <div className="col-12">
                        <OnProgress />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;