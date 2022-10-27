import React from 'react';
import {motion} from "framer-motion"

const Login = () => {

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
    
    return (
        <motion.div 
        initial={"out"} 
        animate={"in"} 
        exit={"out"}
        variants={pageTransition}
        >
            <h2>Login</h2>
            This is the page for Login
        </motion.div>
    )
};

export default Login;