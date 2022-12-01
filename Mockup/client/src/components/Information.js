import React from 'react';
import {motion} from "framer-motion"

const Information = () => {

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
            <h2>Information</h2>
            For users:
            <ul>
                <li>Team Stats is where you can compare win rates against objective rates</li>
                <li>Game Stats is where you can </li>
                <li>Databases is where you can view the raw data.
                    It is also possible to add filters to the data to narrow down a search. </li>
            </ul>
            For admins, once logged in:
            <ul>
                <li>It is possible to import games, teams, and players via csv file.</li>
            </ul>
        </motion.div>
    )
};

export default Information;