import React, { Fragment } from 'react';
import {motion} from "framer-motion"
import ImportGame from './DataHandlers/ImportGame';

const AdminGames = () => {

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
        <Fragment>
        <motion.div 
        initial={"out"} 
        animate={"in"} 
        exit={"out"}
        variants={pageTransition}
        >
            <h2> Games </h2>
        <ImportGame/>
        </motion.div>
        </Fragment>
    )
};

export default AdminGames;