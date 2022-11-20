import React, { Fragment, useEffect, useState } from "react"
import { 
    Link,
    Outlet
  } from "react-router-dom"

import {motion} from "framer-motion"
import ButtonHandlers from "../ButtonHandlers";

const Admin = () => {

    const[usersButton, setUsersButton] = useState('btn btn-dark')
    const[gamesButton, setGamesButton] = useState('btn btn-dark')
    const[teamsButton, setTeamsButton] = useState('btn btn-dark')
    const[playersButton, setPlayersButton] = useState('btn btn-dark')

    //changes the buttons at the top to be consistant throughout the program
    const changeDatabase = (buttonPressed) => {
        if(buttonPressed === 3) {
            ButtonHandlers.currentDatabase = 3
            setUsersButton('btn btn-dark')
            setGamesButton('btn btn-dark')
            setTeamsButton('btn btn-dark')
            setPlayersButton('btn btn-dark active')
        } else if(buttonPressed === 2) {
            ButtonHandlers.currentDatabase = 2
            setUsersButton('btn btn-dark')
            setGamesButton('btn btn-dark')
            setTeamsButton('btn btn-dark active')
            setPlayersButton('btn btn-dark')
        } else if(buttonPressed === 1) {
            ButtonHandlers.currentDatabase = 1
            setUsersButton('btn btn-dark')
            setGamesButton('btn btn-dark active')
            setTeamsButton('btn btn-dark')
            setPlayersButton('btn btn-dark')
        } else {
            ButtonHandlers.currentDatabase = 0
            setUsersButton('btn btn-dark active')
            setGamesButton('btn btn-dark')
            setTeamsButton('btn btn-dark')
            setPlayersButton('btn btn-dark')
        }
    }

    const pageTransition = {
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: "100%"
        }
    };
    useEffect(() => {
        changeDatabase(ButtonHandlers.getDatabase)
    })
    
    return (
        <motion.div 
        initial={"out"} 
        animate={"in"} 
        exit={"out"}
        variants={"in"}
        >
            <Fragment>
                <h2> <font color='red'> Admin Databases </font> </h2>
                Last Updated: November 27, 2022
                <div class="database-buttons">
                    {/*Four buttons for each of the databases */}
                    <div class="container">
                        <div class="row">
                        <div class="col-sm">
                                <Link class={usersButton} to="/admin/users" onClick={() => changeDatabase(0)}> Users </Link>
                            </div>
                            <div class="col-sm">
                                <Link class={gamesButton} to="/admin/games" onClick={() => changeDatabase(1)}> Games </Link>
                            </div>
                            <div class="col-sm">
                                <Link class={teamsButton} to="/admin/teams"onClick={() => changeDatabase(2)}> Teams </Link>
                            </div>
                            <div class="col-sm">
                                <Link class={playersButton} to="/admin/players"onClick={() => changeDatabase(3)}> Players </Link>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/*Children included here */}
                    <div className="container">
                        <div class="database">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </Fragment>
        </motion.div>
    )
};

export default Admin;