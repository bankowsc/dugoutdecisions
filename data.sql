/* DATABASE TO STORE STUFF */

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    prestige INT NOT NULL,
    championships INT NOT NULL,
    faction TEXT CHECK (faction IN ('Fantasy', 'Realistic')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE factions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    prestige INT NOT NULL,
    championships INT NOT NULL,
    name TEXT CHECK (name IN ('Fantasy', 'Realistic')),
);
