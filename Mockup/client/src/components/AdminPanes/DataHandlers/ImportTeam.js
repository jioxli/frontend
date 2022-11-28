import React, { Fragment, useState } from "react";

const ImportTeam = () => {

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
            console.log(text);
            const rows = text.split("\n");
            console.log(rows.length);
            // POST uwu
            for(let i = 0; i < rows.length; i += 1){
                console.log(rows[i]);
                if(rows[i].length === 0){
                    console.log("empty row!");
                    continue;
                }
                // read data
                const data = rows[i].split(",");
                if(data.length !== 9) continue;
                const name = data[1];
                const games = data[2];
                const wins = data[3];
                const losses = data[4];
                const fDragon = data[5];
                const fTurret = data[6];
                const fHerald = data[7];
                const GD15 = data[8];
                
                // create POST
                try {
                    const body = { name, games, wins, losses, fDragon, 
                    fTurret, fHerald, GD15 };
                    const response = await fetch("http://localhost:5000/teams",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(body)
                    });
                    
                } catch(err) {
                    console.error(err.message);
                }
            }
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
                    Parse Team CSV
                </button>
        </Fragment>
    );
};

export default ImportTeam;