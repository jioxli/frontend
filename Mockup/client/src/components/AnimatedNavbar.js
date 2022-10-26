import React from "react"
import { 
  Routes as Switch,
  Route,
  useLocation
} from "react-router-dom"

import Databases from "./Databases"
import Tournaments from "./Tournaments"
import Teams from "./Teams"
import Players from "./Players"

import {AnimatePresence} from "framer-motion"

const AnimatedNavbar = () => {

  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path='/databases' element={<Databases />} >
          <Route index element={<Players />} />
          <Route path='tournaments' element={<Tournaments />} />
          <Route path='teams' element={<Teams />} />
          <Route path='players' element={<Players />} />
        </Route>
      </Switch>
    </AnimatePresence>
  )
}


export default AnimatedNavbar
