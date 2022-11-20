import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"

import Account from '../Account';
const AccountInfo = () => {

    const navigate = useNavigate()

    let username = Account.getUsername
    let admin = Account.getIsAdmin
    const[adminButton, setAdminButton] = useState('btn btn-primary hide')
    const[adminText, setAdminText] = useState('')

    //takes the user back to the login and sets the account to empty
    const logout = () => {
        Account.isAdmin = false
        Account.username = ''
        Account.password = ''
        navigate({
            pathname: "/loginPage",
            
        })
    }
    //determines if there should be an admin button on loadup
    const showAdminButton = () => {
        if(admin === true) {
            setAdminButton('btn btn-primary')
            setAdminText('red')
        } else {
            setAdminButton('btn btn-primary hide')
            setAdminText('')
        }
    }
    const pageTransition = {
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 1,
            y: "100%"
        }
    };

    useEffect(() => {
        showAdminButton()
    })

    return (
        <motion.div 
        initial={"out"} 
        animate={"in"} 
        exit={"out"}
        variants={pageTransition}
        >
            {/*Provile name, admin button, logout button*/}
            <h2> <font color = {adminText}> {username} </font> </h2>
            <div class="container-account">
                <Link a class={adminButton} to="/admin"> Admin </Link>
            </div>
            <button class="btn btn-primary" type="button" onClick={() => logout()}> Logout </button>
        </motion.div>
    )
};

export default AccountInfo;