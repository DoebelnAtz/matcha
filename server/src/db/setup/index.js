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
            pictures TEXT DEFAULT '[]'
        )
    `);
	await query(`
	    INSERT INTO users (
	    u_id, dob, bio, verified, pictures, 
	    gender, preference, password, name, email
	    ) VALUES (
	    '2be04163-2b54-4c77-814f-89b86329eee1', 
	    '2000-12-01 00:00:00', 'FUN', TRUE, 
	    '[{"url":"https://storage.googleapis.com/matcha-pictures/2be04163-2b54-4c77-814f-89b86329eee1/brunette1.jpg", "hash":"d*IEIXxZkWof~Ws.ofbb?bj[j[WWx]NaayoLtRR+WBo0"},
	    {"url":"https://storage.googleapis.com/matcha-pictures/2be04163-2b54-4c77-814f-89b86329eee1/brunette2.jpg", "hash":"dlHVSIRkNGWn?wWBxut7x^ofRjRjt5j]V@WAV?WVj[oe"},
	    {"url":"https://storage.googleapis.com/matcha-pictures/2be04163-2b54-4c77-814f-89b86329eee1/brunette3.jpg", "hash":"duKno5aybbfk?wfPoeazRij[WBj@jEj[WBayR.ayj]fR"}]', 
	    'female', 'male', 'testuser', 
	    'brunette', 'foo@bar.test');
	    
        INSERT INTO users (
        u_id, dob, bio, verified, pictures, 
        gender, preference, password, name, email
        ) VALUES (
        '62af1bf1-2626-42d9-b6b5-34441686afcd', 
        '2000-12-01 00:00:00', 'FUN', TRUE, 
        '[{"url":"https://storage.googleapis.com/matcha-pictures/62af1bf1-2626-42d9-b6b5-34441686afcd/blonde1.jpg", "hash":"dVJ@8xwbt-s90gbbV@RP%LSh$gt7D%S$adjY-oozNaW="},
        {"url":"https://storage.googleapis.com/matcha-pictures/62af1bf1-2626-42d9-b6b5-34441686afcd/blonde2.jpg", "hash":"dkL4pPofj?WC?wWCf,jrkXo0V@kDM{bHWCjZadWrbIj?"},
        {"url":"https://storage.googleapis.com/matcha-pictures/62af1bf1-2626-42d9-b6b5-34441686afcd/blonde3.jpg", "hash":"dQGk8wNH59t7EOWB9vae0gxD=_oJ%La}niS5IoR+%1e."}]', 
        'female', 'male', 'testuser', 
        'blonde', 'fool@bar.test');
        
        INSERT INTO users (
        u_id, dob, bio, verified, pictures, 
        gender, preference, password, name, email
        ) VALUES (
        'c4dec79c-0c1c-4751-b636-8023530caf38', 
        '2000-12-01 00:00:00', 'FUN', TRUE, 
        '[{"url":"https://storage.googleapis.com/matcha-pictures/c4dec79c-0c1c-4751-b636-8023530caf38/moc1.jpg", "hash":"dNGuatog0Kxuozt7-qWB9Zaxxaj[M{j[WBayxtj[ozWB"},
        {"url":"https://storage.googleapis.com/matcha-pictures/c4dec79c-0c1c-4751-b636-8023530caf38/moc2.jpg", "hash":"dlFPHVo#NGof?^t7s:j[%$xaafj@x^slR*fkW?V@WWax"},
        {"url":"https://storage.googleapis.com/matcha-pictures/c4dec79c-0c1c-4751-b636-8023530caf38/moc3.jpg", "hash":"dCCQPr4T%M%gIU_4%NShS#?co~tRyEIUnNoftmITM{ay"}]', 
        'male', 'female', 'testuser', 
        'moc', 'foot@bar.test');
        
        INSERT INTO users (
        u_id, dob, bio, verified, pictures, 
        gender, preference, password, name, email
        ) VALUES (
        'c505963e-d6ab-4861-8c8a-3aac82838756', 
        '2000-12-01 00:00:00', 'FUN', TRUE, 
        '[{"url":"https://storage.googleapis.com/matcha-pictures/c505963e-d6ab-4861-8c8a-3aac82838756/wg1.jpg", "hash":"d37w{DD4?w9uxbI:9uE14o-;9Ft6%MMy-oodtRIoxas:"},
        {"url":"https://storage.googleapis.com/matcha-pictures/c505963e-d6ab-4861-8c8a-3aac82838756/wg2.jpg", "hash":"ddJtPHW;_Nt6IoofNFofD%ayMxfRS~f6xujsW;ayj[fP"},
        {"url":"https://storage.googleapis.com/matcha-pictures/c505963e-d6ab-4861-8c8a-3aac82838756/wg3.jpg", "hash":"dXDcEyj@o}WB01fRM{ofR*azs:ay%MfPt7j@WAfRWBfR"}]', 
        'male', 'female', 'testuser', 
        'wg', 'food@bar.test');
        
        INSERT INTO users (
        u_id, dob, bio, verified, pictures, 
        gender, preference, password, name, email
        ) VALUES (
        'ff2ad7c2-9558-4e0f-bbc6-238fd8a02e0b', 
        '2000-12-01 00:00:00', 'FUN', TRUE, 
        '[{"url":"https://storage.googleapis.com/matcha-pictures/ff2ad7c2-9558-4e0f-bbc6-238fd8a02e0b/g1.jpg", "hash":"dPL4yuD%xuof~qofIUWB_3WBRjWB%MWB%Mof%MofRjay"},
        {"url":"https://storage.googleapis.com/matcha-pictures/ff2ad7c2-9558-4e0f-bbc6-238fd8a02e0b/g2.jpg", "hash":"dA8zALV@0zNH0yNH={t6NGt6soWV%2o2WUR*NGWBofof"},
        {"url":"https://storage.googleapis.com/matcha-pictures/ff2ad7c2-9558-4e0f-bbc6-238fd8a02e0b/g3.jpg", "hash":"d,E4N4t6bwbcPEs:ogaeIWWBRin$xFWCV?bcockCozbH"}]', 
        'female', 'male', 'testuser', 
        'g', 'fooh@bar.test');
	`);
};

module.exports = setup;
