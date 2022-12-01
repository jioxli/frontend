import React, { Fragment, useState } from "react"
import { 
  Link, 
} from "react-router-dom"

import AnimatedRefs from './AnimatedRefs'

import logo from './img/nashorSticker.png';
import Account from "./Account";
import ButtonHandlers from "./ButtonHandlers"

const myNav = {
  currentNav: 0,
}

const NavBar = () => {

    const[loginNav, setLoginNav] = useState('nav-link')
    const[infoNav, setInfoNav] = useState('nav-link')
    const[teamStatNav, setTeamStatNav] = useState('nav-link')
    const[gameStatNav, setGameStatNav] = useState('nav-link')
    const[dataNav, setDataNav] = useState('nav-link')
    const[contactNav, setContactNav] = useState('nav-link')
    const[accountInfoNav, setAccountInfoNav] = useState('nav-link hide')
    const[username, setUsername] = useState('')
    const[color, setColor] = useState('gray')

    //keeps the active navbar equal to the page the user is on
    const updateNavbar = (column) => {
      ButtonHandlers.currentLogin = 0
      ButtonHandlers.currentDatabase = 0
      if(Account.getUsername === '') {
        setAccountInfoNav('nav-link hide')
      } else {
        if(Account.isAdmin === true) {
          setColor('red')
          setLoginNav('nav-link hide')
          setUsername('Admin')
        }
        else {
          setColor('')
          setLoginNav('nav-link hide')
          setUsername(Account.getUsername)
        }
      }
      if(myNav.currentNav === 0) {
      } else if(myNav.currentNav === 1) {
        if(Account.getUsername === '') {
          setLoginNav('nav-link')
        } else {
          setAccountInfoNav('nav-link')
        }
      } else if (myNav.currentNav === 2) {
        setInfoNav('nav-link')
      } else if (myNav.currentNav === 3) {
        setDataNav('nav-link')
      } else if (myNav.currentNav === 5) {
        setTeamStatNav('nav-link')
      } else if (myNav.currentNav === 6) {
        setGameStatNav('nav-link')
      }
      else {
        setContactNav('nav-link')
      }
      myNav.currentNav = column
      if(column === 1) {
        if(Account.getUsername === '') {
          setLoginNav('nav-link active')
        } else {
          setAccountInfoNav('nav-link active')
        }
      } else if (column === 2) {
        setInfoNav('nav-link active')
      } else if (column === 3) {
        setDataNav('nav-link active')
      } else if (column === 4) {
        setContactNav('nav-link active')
      } else if (column === 5) {
        setTeamStatNav('nav-link active')
      } else if (column === 6) {
        setGameStatNav('nav-link active')
      }

    }

    return (
    <Fragment>
      {/*Navbar */}
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
                  <li> <Link to="/loginPage" class = {loginNav} onClick={() => updateNavbar(1)}> Login </Link></li>
                  <li> <Link to="/accountinfo" class = {accountInfoNav} onClick={() => updateNavbar(1)}> <font color = {color}> {username} </font> </Link></li>
                  <li> <Link to="/information" class = {infoNav} onClick={() => updateNavbar(2)}> Information </Link></li>
                  <li> <Link to="/teamstats" class = {teamStatNav} onClick={() => updateNavbar(5)}> Team Stats </Link></li>
                  <li> <Link to="/gamestats" class = {gameStatNav} onClick={() => updateNavbar(6)}> Game Stats </Link></li>
                  <li> <Link to="/databases" class = {dataNav} onClick={() => updateNavbar(3)}> Databases </Link></li>
                  <li> <Link to="/contact" class = {contactNav} onClick={() => updateNavbar(4)}> Contact </Link></li>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <hr />
        {/*All react components are displayed here */}
        <div className="container">
          <div class="animateRefs">
            <AnimatedRefs />
          </div>
        </div>
    </Fragment>
    )
}

export default NavBar;