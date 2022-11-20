import React, {useState} from 'react';
import { 
    useNavigate
} from 'react-router-dom';
import {motion} from "framer-motion"
import Account from '../Account';

const Register = () => {

    const navigate = useNavigate()

    const[usernameInput, setUsernameInput] = useState('')
    const[passwordInput1, setPasswordInput1] = useState('')
    const[passwordInput2, setPasswordInput2] = useState('')
    const incorrect = 'Passwords do not match or is empty'
    const[incorrectClass, setIncorrectClass] = useState('hide')

    //called when the user tries to create an account
    const createAccount = () => {
        if(passwordInput1 === passwordInput2 && passwordInput1 != '') {
            setIncorrectClass('hide')
            let inputArr = ['Users']
            inputArr.push(usernameInput)
            inputArr.push(passwordInput1)

            //check if the user can create their account

            Account.username = usernameInput
            Account.password = passwordInput1
            Account.isAdmin = false
            navigate({
                pathname: "/accountInfo",
            })
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
            <div class="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                    <p class="text-center">Create an account:</p>

                    <font color="red" class={incorrectClass}>{incorrect} </font>
                    {/*Three input lines on the page */}
                    <div class="form-outline mb-4">
                        <input type="text" id="registerUsername" class="form-control" placeholder = "Username"  onChange={e => setUsernameInput(e.target.value)}/>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" id="registerPassword" class="form-control" placeholder = "Password" onChange={e => setPasswordInput1(e.target.value)}/>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" id="registerRepeatPassword" class="form-control" placeholder = "Repeat Password" onChange={e => setPasswordInput2(e.target.value)}/>
                    </div>
                    {/*Create account button*/}
                    <button type="submit" class="btn btn-primary btn-block mb-4" onClick={() => createAccount()}>Create Account</button>
            </div>
        </motion.div>
    )
};

export default Register;