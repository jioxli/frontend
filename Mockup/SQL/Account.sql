CREATE TABLE account(
	aid SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    isAdmin BOOLEAN
);
