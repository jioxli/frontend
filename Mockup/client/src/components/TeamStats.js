import React, { Fragment } from 'react';
import {motion} from "framer-motion"

const TeamStats = () => {

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
    
    // scatter plot
    // dropdown menu w/ x axis
    // update plot whenever dropdown changes
    return (
        <motion.div 
        initial={"out"} 
        animate={"in"} 
        exit={"out"}
        variants={pageTransition}
        >
        <Fragment>
            <h2>Team Stats</h2>
        </Fragment>
        </motion.div>
    )
};

export default TeamStats;