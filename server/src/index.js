const express = require('express');
const app = express();
const cors = require('cors');
const { handleError } = require('./middleware/error');
require('dotenv').config({ path: __dirname + '/.env' });
const checkToken = require('./middleware/auth');
const testRouter = require('./routes/testRoutes');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRouter');
const setup = require('./db/setup/index');
app.use(cors());

app.use(express.json());
app.use('/api', (req, res, next) => {
	console.log(`path: ${req.path} | query: ${JSON.stringify(req.query)}`);
	next();
});
app.use('/api/auth', authRouter);
app.use('/api', checkToken);
app.use('/api/users', userRouter);

app.use('/', handleError);

setup();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
