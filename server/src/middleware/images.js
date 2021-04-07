const { Storage } = require('@google-cloud/storage');
const path = require('path');
const { format } = require('util');
const keyFilePath = path.join(__dirname, '../../keyfile.json');

const storage = () =>
	new Storage({
		projectId: process.env.PROJECT_ID,
		keyFilename: keyFilePath,
	});

const sendUploadToGCS = (req, res, next) => {
	if (!req.file) {
		return next();
	}
	const bucketName = `matcha-pictures`;
	const bucket = storage().bucket(bucketName);
	const gcsFileName = `${req.decoded.u_id}/${req.file.originalname}`;
	const blob = bucket.file(gcsFileName);
	const blobStream = blob.createWriteStream();

	blobStream.on('error', (err) => {
		console.log(err);
		next(err);
	});

	blobStream.on('finish', () => {
		// The public URL can be used to directly access the file via HTTP.
		const publicUrl = format(
			`https://storage.googleapis.com/${bucket.name}/${blob.name}`,
		);
		console.log(publicUrl);
		req.publicUrl = publicUrl;
		next();
	});

	blobStream.end(req.file.buffer);
};

const deleteFileFromGCS = (req, res, next) => {
	if (!req.body.filename) {
		return next();
	}
	const bucketName = `matcha-pictures`;
	const bucket = storage().bucket(bucketName);
	const gcsFileName = `${req.decoded.u_id}/${req.body.filename}`;
	const file = bucket.file(gcsFileName);
	file.delete().then(() => next());
};

module.exports = {
	sendUploadToGCS,
	deleteFileFromGCS,
};
