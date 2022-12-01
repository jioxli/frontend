import React, { Fragment, useEffect, useState } from 'react';
import {motion} from "framer-motion"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Label } from 'recharts';


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

    const [teamData, setTeamData] = useState([]);

    const [selectXaxis, setSelectXaxis] = useState("fdragon");

    const getTeamData = async() => {
        try {
            const response = await fetch("http://10.128.161.72:5000/teams");
            const jsonData = await response.json();

            setTeamData(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    function onXAxisChange(e){
        setSelectXaxis(e.target.value)
    }

    useEffect( ()=> {
    }, []);

    return (
        <motion.div 
        initial={"out"} 
        animate={"in"} 
        exit={"out"}
        variants={pageTransition}
        >
        <Fragment>
            <h2>Team Stats</h2>
            <button
                type="button"
                className="btn btn-primary"
                onClick={getTeamData}>
                Get Data
            </button>
            <div className="centered">
            <ScatterChart width={400} height={400}>
                <CartesianGrid/>
                <XAxis type="number" dataKey={selectXaxis}>
                </XAxis>
                <YAxis type="number" dataKey={"winrate"}>
                <Label value="Win Rate" position="insideLeft" angle={-90} fill='white'/>
                </YAxis>
                <Scatter data={teamData} fill="white" />
            </ScatterChart>
            </div>
            <select name="xaxis" id="xaxis" value={selectXaxis} onChange={onXAxisChange}>
                <optgroup label="Select a dataframe column">
                            <option value="fdragon">First Dragon</option>
                            <option value="fherald">First Herald</option>
                            <option value="fturret">First Turret</option>
                            <option value="gd15">GD15</option>
                </optgroup>
            </select>
        </Fragment>
        </motion.div>
    )
};

export default TeamStats;