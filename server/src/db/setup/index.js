const { parseQuery } = require('../../utils');
const { query } = require('../../db/index.js');
const faker = require('faker')
const { v4 } = require('uuid');
const blurhash = require('blurhash')
const { createCanvas, loadImage, Image} = require('canvas')


const getImageData = (image) => {
	const canvas = createCanvas(image.width, image.height)
	const context = canvas.getContext('2d')
	context.drawImage(image, 0, 0)
	return context.getImageData(0, 0, image.width, image.height)
}

const loadImg = async (img) => {

const image = await loadImage(img);
const imageData = getImageData(image)
return blurhash.encode(
	imageData.data,
	imageData.width,
	imageData.height,
	4,
	4
);
}

const generateFakerData = async () => {
		let count = 0;
	for (let i = 0; i < 10; i++)
	{
	const genderBool = faker.datatype.boolean()
	const gender = genderBool ? 'male' : 'female';
		const picUrl1 = `https://source.unsplash.com/400x600/?people`;
		const pic1 = { url: picUrl1, hash: await loadImg(picUrl1)};
		const picUrl2 = faker.image.people(400, 700, true);
		const pic2 = { url: picUrl2, hash: await loadImg(picUrl2)}
		const picUrl3 = faker.image.people(400, 700, true);
		const pic3 = { url: picUrl3, hash: await loadImg(picUrl3)}
	let pictures = [
		pic1, pic2, pic3
	]
		const name = faker.name.firstName(genderBool ? 0 : 1);
		const lastname = faker.name.lastName();
		console.log('done');
		let data = {
			u_id: v4(),
			name,
			lastname,
			dob: faker.date.between(new Date('1975-12-17T03:24:00'), new Date('2001-12-17T03:24:00')),
			bio: faker.random.words(10),
			verified: true,
			pictures: JSON.stringify(pictures),
			gender,
			preference: Math.floor(Math.random() * 10) > 8 ? gender : gender === 'male' ? 'female' : 'male',
			password: 'tde',
			email: faker.internet.email(name, lastname, 'example.com')
		}
		if (data.gender === data.preference)
			count++;
		await query(`
			INSERT INTO users (
			u_id, dob, bio, verified, 
			pictures, gender, preference, 
			password, name, email) 
			VALUES (
			$1, $2, $3, $4, $5, $6, $7, $8, $9, $10
			)
		`, [data.u_id, data.dob, data.bio, data.verified,
			data.pictures, data.gender, data.preference,
			data.password, data.name, data.email])
		console.log(data);
	}
	console.log(count);
	console.log('t');
}

const setup = async () => {
	//generateFakerData();
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
