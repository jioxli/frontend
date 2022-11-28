import React, { Fragment, useState } from "react";

const ImportGame = () => {

    const [file, setFile] = useState("");
    
    const buttonClick = async(e) => {
        e.preventDefault();
        console.log("owo");
        if(file.length === 0){
            return;
        }
        const csvFile = file;
        const reader = new FileReader();
        reader.onload = async(e) => {
            const text = e.target.result;
            const rows = text.split("\n");
            // POST uwu
            for(let i = 0; i < rows.length; i += 1){
                if(rows[i].length === 0){
                    console.log("empty row!");
                    continue;
                }
                // read data
                const data = rows[i].split(",");
                if(data.length !== 20) continue;
                const gid = data[1];
                const date = data[2];
                const pid = data[3];
                const playername = data[4];
                const tid = data[5];
                const teamname = data[6];
                const side = data[7];
                const position = data[8];
                const champion = data[9];
                const result = data[10];
                const kills = data[11];
                const deaths = data[12];
                const assists = data[13];
                const firstdragon = data[14];
                const firstherald = data[15];
                const firsttower = data[16];
                const golddiffat15 = data[17];
                const xpdiffat15 = data[18];
                const gamelength = data[19];
                
                // create POST
                try {
                    const body = { gid, date, pid, playername, tid, 
                        teamname, side, position, champion, result, kills,
                        deaths, assists, firstdragon, firstherald, firsttower,
                        golddiffat15, xpdiffat15, gamelength };
                    const response = await fetch("http://localhost:5000/games",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(body)
                    });
                    
                } catch(err) {
                    console.error(err.message);
                }
            }
            console.log("Done");
        }

        reader.readAsText(csvFile);
    }

    return(
        <Fragment>
            <input
                type="file"
                accept=".csv"
                id="csvFile"
                onChange={(e) => {setFile(e.target.files[0])}}
                >
                </input>
            <button
                type="button"
                class="btn btn-primary"
                onClick={buttonClick}
                >
                    Parse Game CSV
                </button>
        </Fragment>
    );
};

export default ImportGame;