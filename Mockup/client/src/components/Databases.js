import React, { Fragment } from "react"
import { 
    Link,
    Outlet
  } from "react-router-dom"

import {motion} from "framer-motion"

const Databases = () => {

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
        variants={"in"}
        >
            <Fragment>
                <h2>Databases</h2>
                Last Updated: October 31, 2022
                <div class="database-buttons">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <Link class="btn btn-dark" to="/databases/tournaments"> Tournament </Link>
                            </div>
                            <div class="col-sm">
                                <Link class="btn btn-dark" to="/databases/teams"> Teams </Link>
                            </div>
                            <div class="col-sm">
                                <Link class="btn btn-dark" to="/databases/players"> Players </Link>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="container">
                        <div class="database">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </Fragment>
        </motion.div>
    )
};

export default Databases;