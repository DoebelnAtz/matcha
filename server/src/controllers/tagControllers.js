const { query } = require('../db');
const catchErrors = require('../errors/catchErrors');
const { connect } = require('../db');



const addTag = catchErrors(async(req, res) => {
	const { value } = req.body;
	const userId = req.decoded.u_id;

	let existingTag = await query(`
		SELECT value, t_id FROM tags WHERE LOWER(value) = $1
	`, [value.toLowerCase()])

	if (existingTag.rows) {
		let existingConnection = await query(`
			SELECT u_id FROM users_tags 
			WHERE t_id = $1 AND u_id = $2`,
			[existingTag.rows[0].t_id, userId])
		if (existingConnection.rows) {
			res.json({code: 1, message: 'Tag already added to user'})
		} else {
			await query(`
			INSERT INTO users_tags(t_id, u_id)
			VALUES ($1, $2)
		`, [existingTag.rows[0].t_id, userId])
			res.json({code: 2, message: 'Added existing tag to user'})
		}

	} else {


		const client = await connect();
		try {
			await client.query('BEGIN');

			const createdTag = await client.query(`
				INSERT INTO tags(value)
				VALUES($1) RETURNING t_id
			`, [value])

			await client.query(`
				INSERT INTO user_tags(t_id u_id)
				VALUES ($1, $2)
			`, [createdTag.rows[0].t_id, userId])

			await client.query('COMMIT');
		} catch (e) {
			await client.query('ROLLBACK');
			res.status(500).json({
				success: false,
				message: 'Failed to create tag',
			});
		} finally {
			client.release();
		}
	}
	res.status(200).json({code: 3, message: 'Created and added tag to user'})
}, 'Failed to create tag');

module.exports = {
	addTag
}