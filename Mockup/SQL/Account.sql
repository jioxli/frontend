CREATE TABLE account(
	aid SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    isAdmin BOOLEAN
);

INSERT INTO account(aid, username, password, isadmin) VALUES(1, 'jioxli', 'Teemo', true);
INSERT INTO account(aid, username, password, isadmin) VALUES(2, 'Jarmo', 'Ahri', false);
