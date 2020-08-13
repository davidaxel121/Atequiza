import React from 'react';
import OnProgress from '../components/OnProgress';
import NavbarHome from '../components/Navbar';

class Home extends React.Component {

    render() {
        return (
            <div className="h-100">
                <NavbarHome></NavbarHome>
                <br/><br/><br/>
            <OnProgress></OnProgress>
            </div>
        );
    }
}

export default Home;