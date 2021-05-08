const { parseQuery } = require('../../utils');
const { query } = require('../../db/index.js');
const faker = require('faker')
const { v4 } = require('uuid');
const blurhash = require('blurhash')
const { createCanvas, loadImage, Image} = require('canvas')
const {Storage} = require('@google-cloud/storage');
const path = require('path');
const keyFilePath = path.join(__dirname, '../../keyfile.json');
const fs = require('fs');
const { format } = require('util');

const storage = () =>
	new Storage({
		projectId: process.env.PROJECT_ID,
		keyFilename: keyFilePath,
	});

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

const uploadFileToGcs = async (fileName, userId) => {
	const bucketName = `matcha-pictures`;
	const pathName = path.join(__dirname, `./samplePictures/${fileName}`)
	const gcsFileName = `${userId}/${fileName}`;
	await storage().bucket(bucketName).upload(pathName, {
		destination: gcsFileName
	})
	return format(
		`https://storage.googleapis.com/${bucketName}/${gcsFileName}`,
	);
}

const getRandomArrayIndex = (array) => {
	return array[Math.floor(Math.random() * array.length)]
}
// this function generates fake data, make sure to have a folder named samplePictures in ./setup
// the images cant be too large, or it will take forever for the blurhash function to process them
const generateFakerData = async () => {
		let count = 0;
	for (let i = 0; i < 20; i++)
	{
		const u_id = v4();
		const genderBool = faker.datatype.boolean()
		const picCount = Math.ceil(Math.random() * 3)
		const picturePool = fs.readdirSync(path.join(__dirname, './samplePictures'))
		let pictures = []
		for (let i = 0; i <= picCount; i++) {
			let pic = getRandomArrayIndex(picturePool)
			console.log(pic);
			await uploadFileToGcs(pic ,u_id).then(publicUrl => {
				loadImg(publicUrl).then(hash => {
					console.log(publicUrl, hash);
					pictures.push({url: publicUrl, hash: hash})
				}).catch(error => console.log(error))
			}).catch(error => {console.log(error)})
		}
		console.log(picCount, pictures);
		const gender = genderBool ? 'male' : 'female';
		const name = faker.name.firstName(genderBool ? 0 : 1);
		const lastname = faker.name.lastName();
		console.log('done');
		let data = {
			u_id,
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
	console.log('te');
}

const setup = async () => {
	//generateFakerData();
	await query(`
        CREATE TABLE IF NOT EXISTS users (
            u_id TEXT PRIMARY KEY NOT NULL,
            name TEXT NOT NULL,
            lastname TEXT NOT NULL,
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
		CREATE TABLE IF NOT EXISTS tags (
			t_id SERIAL PRIMARY KEY,
			value TEXT NOT NULL
		)
	`)

	await query(`
		CREATE UNIQUE INDEX IF NOT EXISTS idx_lower_unique_value ON tags (LOWER(value))
	`)

	await query(`
		CREATE TABLE IF NOT EXISTS users_tags (
			t_id INT REFERENCES tags(t_id) ON DELETE CASCADE NOT NULL,
			u_id TEXT REFERENCES users(u_id) ON DELETE CASCADE NOT NULL,
			UNIQUE(t_id, u_id)
		)
	`)
};

module.exports = setup;
