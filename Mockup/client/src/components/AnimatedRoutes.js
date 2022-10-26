import React from "react"
import { 
  Routes as Switch,
  Route,
  useLocation
} from "react-router-dom"

import Tournaments from './Tournaments'
import Teams from './Teams'
import Players from "./Players"

import {AnimatePresence} from "framer-motion"

const AnimatedRoutes = () => {

  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path='/tournaments' element={<Tournaments />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/players' element={<Players />} />
      </Switch>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
