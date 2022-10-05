import React, { Fragment } from "react"
import './App.css';

//components
import DatabaseExample from "./frontend/file"
import logo from './img/nashorSticker.png';

function App() {

  return (
      <Fragment>
        <body class="scroll-top"
        data-bs-spy="scroll"
        data-bs-target=".navbar"
        data-bs-offset= "100">
        <div class="navbar">
          <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
            <div class= "container">
              <a href="#home" class = "navbar-brand">
              <img src={logo} width="75" height="75" class="d-inline-block align-top" alt="" />
                NashorStats
              </a>
              <button class= "navbar-toggler"
                data-bs-toggle= "collapse"
                data-bs-target= "#nav-collapse">
                <span class= "navbar-toggler-icon"> </span>
              </button>
              <div id = "nav-collapse" class="collapse navbar-collapse">
                <div class="navbar-nav ms-auto">
                  <a href="#mission-target" class = "nav-link"> Home</a>
                  <a href="#why-target" class = "nav-link"> Tournament </a>
                  <a href="#skills-target" class = "nav-link"> Teams </a>
                  <a href="#inspiration-target" class = "nav-link"> Players </a>
                  <a href="#contact-target" class = "nav-link"> Games </a>
                  <a href=".frontend/contact.html" class = "nav-link"> Games </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
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
  );

}

export default App;
