import React from "react"
import { 
  Routes as Switch,
  Route,
  useLocation
} from "react-router-dom"

import NavBar from "./Navbar"
import Databases from "./DatabasePanes/Databases"
import Games from "./DatabasePanes/Games"
import Teams from "./DatabasePanes/Teams"
import Players from "./DatabasePanes/Players"
import Contacts from "./Contacts"
import Login from "./AccountPanes/Login"
import Information from "./Information"
import Register from "./AccountPanes/Register"
import LoginPage from "./AccountPanes/LoginPage"
import AccountInfo from "./AccountPanes/AccountInfo"
import Admin from "./AdminPanes/Admin"
import AdminUsers from "./AdminPanes/AdminUsers"
import AdminGames from "./AdminPanes/AdminGames"
import AdminTeams from "./AdminPanes/AdminTeams"
import AdminPlayers from "./AdminPanes/AdminPlayers"

import {AnimatePresence} from "framer-motion"

const AnimatedRefs = () => {

  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path='/navbar' element={<NavBar />}  />
        <Route path='/loginPage' element={<LoginPage />} >
          <Route index element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/accountinfo' element={<AccountInfo />} />
        <Route path='/admin' element={<Admin />} >
          <Route index element={<AdminGames />} />
          <Route path='users' element={<AdminUsers />} />
          <Route path='games' element={<AdminGames />} />
          <Route path='teams' element={<AdminTeams />} />
          <Route path='players' element={<AdminPlayers />} />
        </Route>
        <Route path='/information' element={<Information />} />
        <Route path='/databases' element={<Databases />} >
          <Route index element={<Games />} />
          <Route path='games' element={<Games />} />
          <Route path='teams' element={<Teams />} />
          <Route path='players' element={<Players />} />
        </Route>
        <Route path='/contact' element={<Contacts />} />
      </Switch>
    </AnimatePresence>
  )
}


export default AnimatedRefs
