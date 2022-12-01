import React, { Fragment, useEffect, useState } from 'react';
import {motion} from "framer-motion"


const GameStats = () => {

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

    const [gameData, setGameData] = useState([]);
    const [currGame, setCurrGame] = useState(0);
    const [avgGD15, setAvgGD15] = useState(0);
    const [avgXPD15, setAvgXPD15] = useState(0);
    const [firstDragonWR, setFDWR] = useState(0);
    const [firstHeraldWR, setFHWR] = useState(0);
    const [firstTowerWR, setFTWR] = useState(0);

    const getGameData = async() => {
        try {
            const response = await fetch("http://10.128.161.72:5000/games");
            const jsonData = await response.json();
            setGameData(jsonData);
            
            let gd15_sum = 0;
            let xpd15_sum = 0;
            let currentGame = 0;
            let firstDragCount = 0, firstHeraldCount = 0, firstTowerCount = 0;
            for(let i = 0; i < jsonData.length; i++){
                // only consider wins
                if(jsonData[i]["result"] !== 1) continue;
                gd15_sum += jsonData[i]["golddiffat15"];
                xpd15_sum += jsonData[i]["xpdiffat15"];

                if(currentGame !== jsonData[i]["gid"]){
                    currentGame = jsonData[i]["gid"];
                    firstDragCount += jsonData[i]["firstdragon"];
                    firstHeraldCount += jsonData[i]["firstherald"];
                    firstTowerCount += jsonData[i]["firsttower"];
                }
            }
            setAvgGD15(2 * gd15_sum / jsonData.length);
            setAvgXPD15(2 * xpd15_sum / jsonData.length);
            setFDWR(firstDragCount / currentGame);
            setFHWR(firstHeraldCount / currentGame);
            setFTWR(firstTowerCount / currentGame);
            setCurrGame(currentGame);


        } catch (err) {
            console.error(err.message);
        }
    };


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
            <h2>Game Stats</h2>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={getGameData}>
                    Get Data
                </button>
                <p>{currGame} games loaded</p>
            <table className="table table-sm table-dark">
                <thead>
                    <tr>
                        <th>Objective</th>
                        <th>Win Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>First Dragon</td>
                        <td>{(firstDragonWR*100).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>First Herald</td>
                        <td>{(firstHeraldWR*100).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>First Tower</td>
                        <td>{(firstTowerWR*100).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <p>Average Gold difference at 15 for winning teams: {avgGD15.toFixed(2)}</p>
            <p>Average Experience difference at 15 for winning teams: {avgXPD15.toFixed(2)}</p>
            
        </Fragment>
        </motion.div>
    )
};

export default GameStats;