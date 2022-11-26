import React from 'react';
import {motion} from "framer-motion"
import ImportTeam from './DataHandlers/ImportTeam';

const AdminTeams = () => {

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
            <h2> Teams </h2>
            <ImportTeam/>
        </motion.div>
    )
};

export default AdminTeams;