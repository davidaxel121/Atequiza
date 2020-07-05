import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}