const { query } = require('../../db/index.js');

const mockData = async () => {
	// await query(`
	//     INSERT INTO users (
	//     u_id, dob, bio, verified, pictures,
	//     gender, preference, password, name, email
	//     ) VALUES (
	//     '2be04163-2b54-4c77-814f-89b86329eee1',
	//     '2000-12-01 00:00:00', 'FUN', TRUE,
	//     '[{"url":"https://storage.googleapis.com/matcha-pictures/2be04163-2b54-4c77-814f-89b86329eee1/brunette1.jpg", "hash":"d*IEIXxZkWof~Ws.ofbb?bj[j[WWx]NaayoLtRR+WBo0"},
	//     {"url":"https://storage.googleapis.com/matcha-pictures/2be04163-2b54-4c77-814f-89b86329eee1/brunette2.jpg", "hash":"dlHVSIRkNGWn?wWBxut7x^ofRjRjt5j]V@WAV?WVj[oe"},
	//     {"url":"https://storage.googleapis.com/matcha-pictures/2be04163-2b54-4c77-814f-89b86329eee1/brunette3.jpg", "hash":"duKno5aybbfk?wfPoeazRij[WBj@jEj[WBayR.ayj]fR"}]',
	//     'female', 'male', 'testuser',
	//     'brunette', 'foo@bar.test');
	//
	//     INSERT INTO users (
	//     u_id, dob, bio, verified, pictures,
	//     gender, preference, password, name, email
	//     ) VALUES (
	//     '62af1bf1-2626-42d9-b6b5-34441686afcd',
	//     '2000-12-01 00:00:00', 'FUN', TRUE,
	//     '[{"url":"https://storage.googleapis.com/matcha-pictures/62af1bf1-2626-42d9-b6b5-34441686afcd/blonde1.jpg", "hash":"dVJ@8xwbt-s90gbbV@RP%LSh$gt7D%S$adjY-oozNaW="},
	//     {"url":"https://storage.googleapis.com/matcha-pictures/62af1bf1-2626-42d9-b6b5-34441686afcd/blonde2.jpg", "hash":"dkL4pPofj?WC?wWCf,jrkXo0V@kDM{bHWCjZadWrbIj?"},
	//     {"url":"https://storage.googleapis.com/matcha-pictures/62af1bf1-2626-42d9-b6b5-34441686afcd/blonde3.jpg", "hash":"dQGk8wNH59t7EOWB9vae0gxD=_oJ%La}niS5IoR+%1e."}]',
	//     'female', 'male', 'testuser',
	//     'blonde', 'fool@bar.test');
	//
	//     INSERT INTO users (
	//     u_id, dob, bio, verified, pictures,
	//     gender, preference, password, name, email
	//     ) VALUES (
	//     'c4dec79c-0c1c-4751-b636-8023530caf38',
	//     '2000-12-01 00:00:00', 'FUN', TRUE,
	//     '[{"url":"https://storage.googleapis.com/matcha-pictures/c4dec79c-0c1c-4751-b636-8023530caf38/moc1.jpg", "hash":"dNGuatog0Kxuozt7-qWB9Zaxxaj[M{j[WBayxtj[ozWB"},
	//     {"url":"https://storage.googleapis.com/matcha-pictures/c4dec79c-0c1c-4751-b636-8023530caf38/moc2.jpg", "hash":"dlFPHVo#NGof?^t7s:j[%$xaafj@x^slR*fkW?V@WWax"},
	//     {"url":"https://storage.googleapis.com/matcha-pictures/c4dec79c-0c1c-4751-b636-8023530caf38/moc3.jpg", "hash":"dCCQPr4T%M%gIU_4%NShS#?co~tRyEIUnNoftmITM{ay"}]',
	//     'male', 'female', 'testuser',
	//     'moc', 'foot@bar.test');
	//
	//     INSERT INTO users (
	//     u_id, dob, bio, verified, pictures,
	//     gender, preference, password, name, email
	//     ) VALUES (
	//     'c505963e-d6ab-4861-8c8a-3aac82838756',
	//     '2000-12-01 00:00:00', 'FUN', TRUE,
	//     '[{"url":"https://storage.googleapis.com/matcha-pictures/c505963e-d6ab-4861-8c8a-3aac82838756/wg1.jpg", "hash":"d37w{DD4?w9uxbI:9uE14o-;9Ft6%MMy-oodtRIoxas:"},
	//     {"url":"https://storage.googleapis.com/matcha-pictures/c505963e-d6ab-4861-8c8a-3aac82838756/wg2.jpg", "hash":"ddJtPHW;_Nt6IoofNFofD%ayMxfRS~f6xujsW;ayj[fP"},
	//     {"url":"https://storage.googleapis.com/matcha-pictures/c505963e-d6ab-4861-8c8a-3aac82838756/wg3.jpg", "hash":"dXDcEyj@o}WB01fRM{ofR*azs:ay%MfPt7j@WAfRWBfR"}]',
	//     'male', 'female', 'testuser',
	//     'wg', 'food@bar.test');
	//
	//     INSERT INTO users (
	//     u_id, dob, bio, verified, pictures,
	//     gender, preference, password, name, email
	//     ) VALUES (
	//     'ff2ad7c2-9558-4e0f-bbc6-238fd8a02e0b',
	//     '2000-12-01 00:00:00', 'FUN', TRUE,
	//     '[{"url":"https://storage.googleapis.com/matcha-pictures/ff2ad7c2-9558-4e0f-bbc6-238fd8a02e0b/g1.jpg", "hash":"dPL4yuD%xuof~qofIUWB_3WBRjWB%MWB%Mof%MofRjay"},
	//     {"url":"https://storage.googleapis.com/matcha-pictures/ff2ad7c2-9558-4e0f-bbc6-238fd8a02e0b/g2.jpg", "hash":"dA8zALV@0zNH0yNH={t6NGt6soWV%2o2WUR*NGWBofof"},
	//     {"url":"https://storage.googleapis.com/matcha-pictures/ff2ad7c2-9558-4e0f-bbc6-238fd8a02e0b/g3.jpg", "hash":"d,E4N4t6bwbcPEs:ogaeIWWBRin$xFWCV?bcockCozbH"}]',
	//     'female', 'male', 'testuser',
	//     'g', 'fooh@bar.test');
	//
	//
	// `);
	// await query(`
	//  	INSERT INTO users (u_id, dob, bio, verified, pictures, gender, preference, password, name, email) VALUES ('8bcad8f0-50a5-44f2-952f-7bac74749755', '2000-12-01 00:00:00', 'FUN', TRUE, '[{"url":"https://storage.googleapis.com/matcha-pictures/8bcad8f0-50a5-44f2-952f-7bac74749755/wbg1.jpg", "hash":"dXB=*b.9TdcEyDn}bdWBuiROVYjZ%Ni~MwM_W9RPo1t7"},{"url":"https://storage.googleapis.com/matcha-pictures/8bcad8f0-50a5-44f2-952f-7bac74749755/wbg2.jpg", "hash":"dfJachM{0KxuIUj[s:t7oJbIt6WBxaWCR+bHWBR*t7WB"},{"url":"https://storage.googleapis.com/matcha-pictures/8bcad8f0-50a5-44f2-952f-7bac74749755/wbg3.jpg", "hash":"d~L|_uWVo~of~qayazj[NGoeV?ayR+ofWUWBofaybHay"}]', 'female', 'male', 'testuser', 'wbg', 'foo1x@bar.test');
	// 	INSERT INTO users (u_id, dob, bio, verified, pictures, gender, preference, password, name, email) VALUES ('557775e6-00be-43c9-9f23-035e0cc5a08e', '2000-12-01 00:00:00', 'FUN', TRUE, '[{"url":"https://storage.googleapis.com/matcha-pictures/557775e6-00be-43c9-9f23-035e0cc5a08e/woc1.jpg", "hash":"dQCZLxkWIUM{8^NG%3tR?cbcaKV@ITWoxbkDxaWURkWU"},{"url":"https://storage.googleapis.com/matcha-pictures/557775e6-00be-43c9-9f23-035e0cc5a08e/woc2.jpg", "hash":"dFE.R+-;9xM|.9pI?G%1.Txu%2NH^*WB9ajFtSIUWBoK"},{"url":"https://storage.googleapis.com/matcha-pictures/557775e6-00be-43c9-9f23-035e0cc5a08e/woc3.jpg", "hash":"dPCOk7]-s:bI%gSyJRsp}Z,=WBj]]-$$WBoL$zoIS3oM"}]', 'female', 'male', 'testuser', 'woc', 'fo1ol@bar.test');
	// 	INSERT INTO users (u_id, dob, bio, verified, pictures, gender, preference, password, name, email) VALUES ('f743ad33-8664-41b4-a639-a1369bb57c20', '2000-12-01 00:00:00', 'FUN', TRUE, '[{"url":"https://storage.googleapis.com/matcha-pictures/f743ad33-8664-41b4-a639-a1369bb57c20/aw1.jpg", "hash":"dEEW2b%LFr%N?[jFM$Sx4UIUROjFD*xus8aeMzjvoboL"},{"url":"https://storage.googleapis.com/matcha-pictures/f743ad33-8664-41b4-a639-a1369bb57c20/aw2.jpg", "hash":"dHEVvg_3NaNF9}RPxbs;?vogRiWB~qxukWozo#%2Rjs:"},{"url":"https://storage.googleapis.com/matcha-pictures/f743ad33-8664-41b4-a639-a1369bb57c20/aw3.jpg", "hash":"dYN1WH-oo~RPK-xCM|of9vbbVstRNIW=ofV@E2W=s.WA"}]', 'female', 'male', 'testuser', 'aw', 'foo11@bar.test');
	// 	INSERT INTO users (u_id, dob, bio, verified, pictures, gender, preference, password, name, email) VALUES ('bb5da10e-556d-4492-9c05-92581e8d65e9', '2000-12-01 00:00:00', 'FUN', TRUE, '[{"url":"https://storage.googleapis.com/matcha-pictures/bb5da10e-556d-4492-9c05-92581e8d65e9/om1.jpg", "hash":"dLQSYqMJGaGG_1H;IT%$NJkYf-I9xu%gs:tlozt7ozxu"},{"url":"https://storage.googleapis.com/matcha-pictures/bb5da10e-556d-4492-9c05-92581e8d65e9/om2.jpg", "hash":"dNF5]Z00X9?GxvD$%Mf69as+IBWAo#%2ogxuxat7bbay"},{"url":"https://storage.googleapis.com/matcha-pictures/bb5da10e-556d-4492-9c05-92581e8d65e9/om3.jpg", "hash":"daMjZ%D+~itQMwayxZt3NekDRlaes*aes:t6ofofWCjZ"}]', 'male', 'female', 'testuser', 'om', 'foo1b@bar.test');
	//
	// `);
	// await query(`
	// 		INSERT INTO languages (name) VALUES ('english');
	// 		INSERT INTO languages (name) VALUES ('russian');
	// 		INSERT INTO languages (name) VALUES ('mandarin');
	// 		INSERT INTO languages (name) VALUES ('polish');
	// 		INSERT INTO languages (name) VALUES ('german');
	// 		INSERT INTO languages (name) VALUES ('french');
	// 		INSERT INTO languages (name) VALUES ('spanish');
	// 		INSERT INTO languages (name) VALUES ('italian');
	// 		INSERT INTO languages (name) VALUES ('finnish');
	// 		INSERT INTO languages (name) VALUES ('swedish');
	// `);
};

const setup = async () => {
	mockData();
	await query(`
        CREATE TABLE IF NOT EXISTS users (
            u_id TEXT PRIMARY KEY NOT NULL,
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
		CREATE TABLE IF NOT EXISTS languages (
			l_id SERIAL PRIMARY KEY,
			name VARCHAR(50) UNIQUE CHECK(name = LOWER(name))
		)
	`);

	await query(`
		CREATE TABLE IF NOT EXISTS users_languages (
			l_id INT REFERENCES languages(l_id),
			u_id TEXT REFERENCES users(u_id),
			UNIQUE(u_id, l_id)
		)
	`);

	await query(`
		CREATE TABLE IF NOT EXISTS interests (
			i_id SERIAL PRIMARY KEY,
			name TEXT NOT NULL UNIQUE CHECK(name = LOWER(name))
		)
	`);

	await query(`
		CREATE TABLE IF NOT EXISTS users_interests (
		 	i_id INT REFERENCES interests (i_id) NOT NULL,
		 	u_id TEXT references users (u_id) NOT NULL,
		 	UNIQUE(i_id, u_id)
		 	
		 )
	`);
};

module.exports = setup;
