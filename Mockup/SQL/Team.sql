CREATE TABLE team(
    tid SERIAL PRIMARY KEY,
    name VARCHAR(20),
    games INT,
    wins INT,	
    losses INT,
    fDragon REAL,	
    fTurret REAL,
    fHerald REAL,
    GD15 INT
);

\copy team(tid, name, games, wins, losses, fDragon, fTurret, FHerald, GD15) FROM 'C:\Users\imo20\OneDrive\Documents\Team_Stats_final.csv' DELIMITER ',' CSV;