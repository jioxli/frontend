import React, { Fragment, useEffect, useState } from "react"
import { 
    Link,
    Outlet,
  } from "react-router-dom"

import {motion} from "framer-motion"
import ButtonHandlers from "../ButtonHandlers"

const LoginPage = () => {

    const[loginButton, setLoginButton] = useState('')
    const[registerButton, setRegisterButton] = useState('')

    //keeps the login and register buttons consistant
    const changeLogin = (buttonPressed) => {
        if(buttonPressed === 1) {
            setLoginButton('nav-link')
            setRegisterButton('nav-link active')
            ButtonHandlers.currentLogin = 1
        } else {
            setLoginButton('nav-link active')
            setRegisterButton('nav-link')
            ButtonHandlers.currentLogin = 0
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
        changeLogin(ButtonHandlers.getLogin)
    })
    
    return (
        <motion.div 
        initial={"out"} 
        animate={"in"} 
        exit={"out"}
        variants={"in"}
        >
            <Fragment>
                <div class="loginPage">
                    <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                        {/*Two navigation buttons at the top*/}
                        <li class="nav-item" role="presentation">
                            <Link class={loginButton} to="/loginPage/login" onClick={() => changeLogin(0)}> Login </Link>
                        </li>
                        <li class="nav-item" role="presentation">
                            <Link a class={registerButton} to="/loginPage/register" onClick={() => changeLogin(1)}> Register </Link>
                        </li>
                    </ul>
                    <Outlet />
                </div>
            </Fragment>
        </motion.div>
    );
}

export default LoginPage