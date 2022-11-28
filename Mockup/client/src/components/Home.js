import React from 'react';
import {motion} from "framer-motion"

const Home = () => {

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
            <h2>NashorStats</h2>
            owo uwu owo
        </motion.div>
    )
};

export default Home;