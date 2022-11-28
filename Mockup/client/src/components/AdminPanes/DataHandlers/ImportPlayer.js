import React, { Fragment, useState } from "react";

const ImportPlayer = () => {

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
                if(data.length !== 8) continue;
                const ign = data[1];
                const tid = data[2];
                const team = data[3];
                const position = data[4];
                const kda = data[5];
                const kp = data[6];
                const GD10 = data[7];
                
                // create POST
                try {
                    const body = { ign, tid, team, position, kda, 
                    kp, GD10 };
                    const response = await fetch("http://localhost:5000/players",
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
                    Parse Player CSV
                </button>
        </Fragment>
    );
};

export default ImportPlayer;