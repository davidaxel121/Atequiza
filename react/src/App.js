import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Photos from './pages/Photos/Photos';
import Restaurants from './pages/Restaurants/Restaurants';
// import Navbar from './components/Navbar/Navbar';
import Tecmm from './pages/TecMM/Tecmm';

export default function App() {
  return (
    <Router>
      <div>
        {/* <Navbar></Navbar> */}

        <Switch>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/restaurants">
            <Restaurants />
          </Route>
          <Route path="/tecmm">
            <Tecmm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}