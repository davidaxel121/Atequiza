import React from 'react';
import OnProgress from '../../components/OnProgress/OnProgress';
import Navbar from '../../components/Navbar/Navbar';

class Home extends React.Component {

    render() {
        return (
            <div className="h-100">
                <Navbar></Navbar>
            <OnProgress></OnProgress>
            </div>
        );
    }
}

export default Home;