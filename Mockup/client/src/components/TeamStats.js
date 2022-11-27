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

    const [rerender, setRerender] = useState(0);

    const [data, setData] = useState([]);

    const getTeamData = async() => {
        try {
            const response = await fetch("http://localhost:5000/teams");
            const jsonData = await response.json();

            setTeamData(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    function addData(){
        setData([]);
        for(let i = 0; i < teamData.length; i++){
            let pair = {
                x: teamData[i]["fdragon"],
                y: teamData[i]["wins"]/teamData[i]["games"]
            };
            setData(data.push(pair));
        }
        console.log(data);

        setRerender(rerender + 1);
    }

    useEffect( ()=> {
        getTeamData();
        
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
                class="btn btn-primary"
                onClick={addData}>
                Add Data
            </button>
            <div class="centered">
            <ScatterChart width={400} height={400}>
                <CartesianGrid/>
                <XAxis type="number" dataKey={"x"}>
                    <Label value="x axis" position="insideBottom" fill='white' offset={0} />
                </XAxis>
                <YAxis type="number" dataKey={"y"}>
                <Label value="Win Rate" position="insideLeft" angle={-90} fill='white'/>
                </YAxis>
                <Scatter data={data} fill="white" />
            </ScatterChart>
            </div>
        </Fragment>
        </motion.div>
    )
};

export default TeamStats;