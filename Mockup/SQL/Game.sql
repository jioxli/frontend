CREATE TABLE game(
    id SERIAL PRIMARY KEY,
    gid INT,
    date DATE,
    pid INT,
    playername VARCHAR(20),
    tid INT,
    teamname VARCHAR(20),
    side VARCHAR(5),
    position VARCHAR(10),
    champion VARCHAR(20),
    result INT,
    kills INT,
    deaths INT,
    assists INT,
    firstdragon INT,
    firstherald INT,
    firsttower INT,
    golddiffat15 INT,
    xpdiffat15 INT,
    gamelength INT,
    FOREIGN KEY (tid) REFERENCES team,
    FOREIGN KEY (pid) REFERENCES player
);

\copy game(id,gid,date,pid,playername,tid,teamname,side,position,champion,result,kills,deaths,assists,firstdragon,firstherald,firsttower,golddiffat15,xpdiffat15,gamelength) FROM 'C:\Users\imo20\OneDrive\Documents\Game_Stats_new.csv' DELIMITER ',' CSV HEADER;
