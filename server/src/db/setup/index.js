const { query } = require('../../db/index.js');

const setup = async () => {
	await query(`
        CREATE TABLE IF NOT EXISTS users (
            u_id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            dob TIMESTAMPTZ NOT NULL,
            password TEXT NOT NULL,
            gender VARCHAR(10) CHECK (gender in ('male', 'female')),
            preference VARCHAR(10) CHECK (preference in ('male', 'female', 'both')),
            bio TEXT,
            tags TEXT,
            verified BOOLEAN DEFAULT FALSE,
            pictures TEXT
        )
    `);
};

module.exports = setup;
