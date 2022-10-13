import React, { Fragment } from "react"
import { 
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link 
} from "react-router-dom"

import './App.css';
import Tournaments from './components/Tournaments'
import Teams from './components/Teams'

import DatabaseExample from "./frontend/file"
import logo from './img/nashorSticker.png';

function App() {
  return (
    <Router>
      <Fragment>
        <body class="scroll-top"
        data-bs-spy="scroll"
        data-bs-target=".navbar"
        data-bs-offset= "100">
        <div class="navbar">
          <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
            <div class= "container">
            <Link to="/" class = "navbar-brand">
              <img src={logo} width="75" height="75" class="d-inline-block align-top" alt="" />
              NashorStats
              </Link>
              <button class= "navbar-toggler"
                data-bs-toggle= "collapse"
                data-bs-target= "#nav-collapse">
                <span class= "navbar-toggler-icon"> </span>
              </button>
              <div id = "nav-collapse" class="collapse navbar-collapse">
                <div class="navbar-nav ms-auto">
                  <li> <Link to="/tournaments" class = "nav-link"> Tournament </Link></li>
                  <li> <Link to="/teams" class = "nav-link"> Teams </Link></li>
                  <li> <Link to="/players" class = "nav-link"> Players </Link></li>
                  <li> <Link to="/games" class = "nav-link"> Games </Link></li>
                  <li> <Link to="/contact" class = "nav-link"> Contact </Link></li>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <hr />
        <Switch>
        <Route path='/tournaments' element={<Tournaments />} />
        <Route path='/teams' element={<Teams />} />
        </Switch>
        <div className="container">
          <div class="database">
            <h1> Database </h1>
            <DatabaseExample />
          </div>
        </div>
        <div class="footer">
          <footer class="bg-dark text-center text-lg-start">
            <div class="text-center p-3">
              © 2022 Copyright: Ian Oxley, Joshua Tenorio
            </div>
          </footer>
        </div>
      </body>
    </Fragment>
    </Router>
  );

}

export default App;
