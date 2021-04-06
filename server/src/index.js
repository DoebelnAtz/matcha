const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { handleError } = require('./middleware/error');
require('dotenv').config({ path: __dirname + '/.env' });
const checkToken = require('./middleware/auth');
const logIncoming = require('./middleware/log');
const testRouter = require('./routes/testRoutes');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRouter');
const imageRouter = require('./routes/imageRouter');
const setup = require('./db/setup/index');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', logIncoming);
app.use('/api/auth', authRouter);
app.use('/api', checkToken);
app.use('/api/users', userRouter);
app.use('/api/images', imageRouter);

app.use('/', handleError);

setup();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
