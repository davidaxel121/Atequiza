import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Events from './pages/Events';
import Photos from './pages/Photos';
import Restaurants from './pages/Restaurants';

export default function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/restaurants">
            <Restaurants />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}