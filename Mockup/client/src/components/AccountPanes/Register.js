import React from 'react';
import {motion} from "framer-motion"

const Register = () => {

    const pageTransition = {
        in: {
            opacity: 1,
            y: 10
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
            <div class="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                <form>
                    <p class="text-center">Create an account:</p>

                    {/*Three input lines on the page */}
                    <div class="form-outline mb-4">
                        <input type="text" id="registerUsername" class="form-control" placeholder = "Username"/>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" id="registerPassword" class="form-control" placeholder = "Password"/>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" id="registerRepeatPassword" class="form-control" placeholder = "Repeat Password"/>
                    </div>
                    {/*Create account button*/}
                    <button type="submit" class="btn btn-primary btn-block mb-4">Create Account</button>
                </form>
            </div>
        </motion.div>
    )
};

export default Register;