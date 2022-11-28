import React from 'react';
import {motion} from "framer-motion"

const Contacts = () => {

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
        <div class="row">
            <div class="col-sm-6">
                <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                    <h5 class="card-title">Ian Oxley</h5>
                    <p class="card-text">The most poggiest programmer I've ever met.</p>
                    <a href="https://ianoxleybiopage.com/" target="blank_" class="btn btn-primary">Website</a>
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                    <h5 class="card-title">Joshua Tenorio</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            </div>
        </motion.div>
    )
};

export default Contacts;