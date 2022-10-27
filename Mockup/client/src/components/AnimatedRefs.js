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
import Contacts from "./Contacts"
import Login from "./Login"
import Information from "./Information"

import {AnimatePresence} from "framer-motion"

const AnimatedRefs = () => {

  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname} replace >
        <Route path='/login' element={<Login />} >

        </Route>
        <Route path='/information' element={<Information />} replace />
        <Route path='/databases' element={<Databases />} replace >
          <Route index element={<Players />} />
          <Route path='tournaments' element={<Tournaments />} />
          <Route path='teams' element={<Teams />} />
          <Route path='players' element={<Players />} replace />
        </Route>
        <Route path='/contact' element={<Contacts />} replace />
      </Switch>
    </AnimatePresence>
  )
}


export default AnimatedRefs
