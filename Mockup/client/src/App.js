import React, { Fragment } from "react"
import { 
  BrowserRouter as Router,
} from "react-router-dom"

import './App.css';
import NavBar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Fragment>
        <body class="scroll-top"
        data-bs-spy="scroll"
        data-bs-target=".navbar"
        data-bs-offset= "100">
          <NavBar />
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
