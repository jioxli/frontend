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
            <p>
                Welcome to NashorStats, a high-quality source for League of Legends eSports stats.
                Users can use the data here to quickly analyze various game data.
            </p> 
            <p>
                Data used here is provided by <a href="https://oracleselixir.com/" target="blank_">Oracles Elixir</a>.
            </p>
        </motion.div>
    )
};

export default Home;