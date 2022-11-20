import React from 'react'
import {motion} from "framer-motion"

const Teams = () =>  {

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
            <h2>Teams</h2>
            This is the teams page
        </motion.div>
    )
};

export default Teams;