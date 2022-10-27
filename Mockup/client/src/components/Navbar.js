import React, { Fragment, useState } from "react"
import { 
  Link, 
} from "react-router-dom"

import AnimatedRefs from './AnimatedRefs'

import logo from './img/nashorSticker.png';

const myNav = {
  currentNav: 0
}

const NavBar = () => {

    const[loginNav, setLoginNav] = useState('nav-link')
    const[infoNav, setInfoNav] = useState('nav-link')
    const[dataNav, setDataNav] = useState('nav-link')
    const[contactNav, setContactNav] = useState('nav-link')

    const updateNavbar = (column) => {
      if(myNav.currentNav == 0) {
      } else if(myNav.currentNav == 1) {
        setLoginNav('nav-link')
      } else if (myNav.currentNav == 2) {
        setInfoNav('nav-link')
      } else if (myNav.currentNav == 3) {
        setDataNav('nav-link')
      } else {
        setContactNav('nav-link')
      }
      myNav.currentNav = column
      if(column == 1) {
        setLoginNav('nav-link active')
      } else if (column == 2) {
        setInfoNav('nav-link active')
      } else if (column == 3) {
        setDataNav('nav-link active')
      } else if (column == 4) {
        setContactNav('nav-link active')
      }
      
    }

    return (
    <Fragment>
    <div class="navbar">
          <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
            <div class= "container">
            <Link to="/" class = "navbar-brand" onClick={() => updateNavbar(0)}>
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
                  <li> <Link to="/login" class = {loginNav} onClick={() => updateNavbar(1)}> Login </Link></li>
                  <li> <Link to="/information" class = {infoNav} onClick={() => updateNavbar(2)}> Information </Link></li>
                  <li> <Link to="/databases" class = {dataNav} onClick={() => updateNavbar(3)}> Databases </Link></li>
                  <li> <Link to="/contact" class = {contactNav} onClick={() => updateNavbar(4)}> Contact </Link></li>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <hr />
        <div className="container">
          <div class="animateRefs">
            <AnimatedRefs />
          </div>
        </div>
    </Fragment>
    )
}

export default NavBar;