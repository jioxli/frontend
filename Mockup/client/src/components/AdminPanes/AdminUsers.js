import React from 'react';
import {motion} from "framer-motion"

const AdminUsers = () => {

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
    
    return (
        <motion.div 
        initial={"out"} 
        animate={"in"} 
        exit={"out"}
        variants={pageTransition}
        >
            <h2> Users </h2>
            This is the page for Admin Users
        </motion.div>
    )
};

export default AdminUsers;