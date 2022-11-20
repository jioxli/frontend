import React, {
    useState,
} from 'react';

import { 
    useNavigate
} from 'react-router-dom';
import {motion} from "framer-motion"
import Account from '../Account';


const Login = () => {

    const navigate = useNavigate()

    const[usernameInput, setUsernameInput] = useState('')
    const[passwordInput, setPasswordInput] = useState('')
    const incorrect = 'Username or Password incorrect'
    const[incorrectClass, setIncorrectClass] = useState('hide')

    //Determines if the user logged in properly, if so, change account to information and navigate to account
    const login = () => {
        let adminAccount = ["jioxli", "Teemo"]
        let userAccount = ["Jarmo", "Ahri"]
        setIncorrectClass('hide')
        if(usernameInput === adminAccount[0] && passwordInput === adminAccount[1]) {
            console.log("admin")
            Account.username = usernameInput
            Account.password = passwordInput
            Account.isAdmin = true
            navigate({
                pathname: "/accountInfo",
                
            })
            console.log("complete")
        } else if(usernameInput === userAccount[0] && passwordInput === userAccount[1]) {
            console.log("user")
            Account.username = usernameInput
            Account.password = passwordInput
            Account.isAdmin = false
            navigate({
                pathname: '/accountInfo',
                
            })
            console.log("complete")
        } else {
            setIncorrectClass('show')
            return
        }
    }

    const pageTransition = {
        in: {
            opacity: 1,
            y: 10
        },
        out: {
            opacity: 0,
            y: "100%"
        }
    };
    
    return (
        <motion.div 
        initial={"out"} 
        animate={"in"} 
        exit={"out"}
        variants={pageTransition}
        >
            <div class="tab-content">
                <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    
                    <p>Sign in with:</p>

                    <font color="red" class={incorrectClass}>{incorrect} </font>

                    {/*two input boxes */}
                    <div class="form-outline mb-4">
                        <input 
                        class="form-control" 
                        placeholder = "Username"
                        onChange={e => setUsernameInput(e.target.value)}
                        />
                    </div>

                    <div class="form-outline mb-4">
                        <input type="password"
                        class="form-control" 
                        placeholder = "Password" 
                        onChange={e => setPasswordInput(e.target.value)}
                        />
                    </div>

                    {/*These don't do anything currently */}
                    <div class="row mb-4">
                        <div class="col-md-6 d-flex justify-content-center">
                        <div class="form-check mb-3 mb-md-0">
                            <input class="form-check-input" type="checkbox" value="" id="loginCheck" unchecked />
                            <label class="form-check-label" for="loginCheck"> Remember me </label>
                        </div>
                        </div>

                        <div class="col-md-6 d-flex justify-content-center">
                        <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    {/*Login button at the bottom*/}
                    <button type="submit" 
                    class="btn btn-primary btn-block mb-4"
                    onClick = {() => login()}>Sign in</button>
                </div>
            </div>
        </motion.div>
    )
};

export default Login;