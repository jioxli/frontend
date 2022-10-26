import React, { Fragment } from "react"
import { 
  Link 
} from "react-router-dom"

import AnimatedNavbar from './AnimatedNavbar'

import logo from './img/nashorSticker.png';

const NavBar = () => {
    return (
    <Fragment>
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
                  <li> <Link to="/databases" class = "nav-link"> Databases </Link></li>
                  <li> <Link to="/contact" class = "nav-link"> Contact </Link></li>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <hr />
        <div className="container">
          <div class="animateNavbar">
            <AnimatedNavbar />
          </div>
        </div>
    </Fragment>
    )
}

export default NavBar;