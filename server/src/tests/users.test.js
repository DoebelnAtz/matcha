const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app.js');
let server, agent;
let token = jwt.sign(
	{
		email: 'axel.ej.adlercreutz@gmail.com',
		u_id: 'aa1f0045-6520-468d-ba9e-f70885f8a58e',
		verified: true,
	},
	process.env.TOKEN_PASS || 'development',
	{
		expiresIn: '24h', // expires in 24 hours
	},
);

// beforeAll((done) => {
// 	server = app.listen(4000, (err) => {
// 		if (err) return done(err);
//
// 		agent = request.agent(server); // since the application is already listening, it should use the allocated port
// 		done();
// 	});
// });

const testAuth = (path) =>
	it('GET non-auth', (done) => {
		request(app)
			.get(path)
			.set('authorization', `Bearer `)
			.expect('Content-Type', /json/)
			.expect(401)
			.end(done);
	});

describe('GET /me', () => {
	testAuth('/api/users/me');
	it('GET', (done) => {
		request(app)
			.get('/api/users/me')
			.set('authorization', `Bearer ${token}`)
			.expect('Content-Type', /json/)
			.expect(200)
			.end(done);
	});
});

describe('GET /search', () => {
	testAuth('/api/users/search');
	it('GET empty', (done) => {
		request(app)
			.get('/api/users/search?q=')
			.set('authorization', `Bearer ${token}`)
			.expect('Content-Type', /json/)
			.expect(200)
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				expect(res.body).toHaveLength(10);
				return done();
			});
	});
	it('GET q=el', (done) => {
		request(app)
			.get('/api/users/search?q=el')
			.set('authorization', `Bearer ${token}`)
			.expect('Content-Type', /json/)
			.expect(200)
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				expect(res.body).toHaveLength(4);
				return done();
			});
	});
	it('GET none', (done) => {
		request(app)
			.get('/api/users/search?q=abcd')
			.set('authorization', `Bearer ${token}`)
			.expect('Content-Type', /json/)
			.expect(200)
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				expect(res.body).toHaveLength(0);
				return done();
			});
	});
});

describe('GET /feed', () => {
	testAuth('/api/users/feed?page=0');
	it('GET page 0', (done) => {
		request(app)
			.get('/api/users/feed?page=0')
			.set('authorization', `Bearer ${token}`)
			.expect('Content-Type', /json/)
			.expect(200)
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				expect(res.body).toHaveLength(3);
				return done();
			});
	});
	it('GET NaN page', (done) => {
		request(app)
			.get('/api/users/feed?page=a')
			.set('authorization', `Bearer ${token}`)
			.expect('Content-Type', /json/)
			.expect(500)
			.end(done);
	});
	it('GET 404', (done) => {
		request(app)
			.get('/api/users/feed?page=10')
			.set('authorization', `Bearer ${token}`)
			.expect('Content-Type', /json/)
			.expect(404)
			.end(done);
	});
});
