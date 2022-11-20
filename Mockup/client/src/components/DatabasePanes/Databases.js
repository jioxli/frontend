import React, { Fragment, useEffect, useState } from "react"
import { 
    Link,
    Outlet
  } from "react-router-dom"

import {motion} from "framer-motion"
import ButtonHandlers from "../ButtonHandlers";

const Databases = () => {

    const[gamesButton, setGamesButton] = useState('btn btn-dark')
    const[teamsButton, setTeamsButton] = useState('btn btn-dark')
    const[playersButton, setPlayersButton] = useState('btn btn-dark')

    //keeps the active database equivalent to the user's page
    const changeDatabase = (buttonPressed) => {
        if(buttonPressed === 2) {
            ButtonHandlers.currentDatabase = 2
            setGamesButton('btn btn-dark')
            setTeamsButton('btn btn-dark')
            setPlayersButton('btn btn-dark active')
        } else if(buttonPressed === 1) {
            ButtonHandlers.currentDatabase = 1
            setGamesButton('btn btn-dark')
            setTeamsButton('btn btn-dark active')
            setPlayersButton('btn btn-dark')
        } else {
            ButtonHandlers.currentDatabase = 0
            setGamesButton('btn btn-dark active')
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
                <h2>Databases</h2>
                Last Updated: November 27, 2022
                {/*Buttons for each database*/}
                <div class="database-buttons">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <Link class={gamesButton} to="/databases/games" onClick={() => changeDatabase(0)}> Games </Link>
                            </div>
                            <div class="col-sm">
                                <Link class={teamsButton} to="/databases/teams"onClick={() => changeDatabase(1)}> Teams </Link>
                            </div>
                            <div class="col-sm">
                                <Link class={playersButton} to="/databases/players"onClick={() => changeDatabase(2)}> Players </Link>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/*Contains the children nodes */}
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

export default Databases;