const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { handleError } = require('./middleware/error');
const checkToken = require('./middleware/auth');
const logIncoming = require('./middleware/log');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRouter');
const tagRouter = require('./routes/tagRouter');
const imageRouter = require('./routes/imageRouter');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', logIncoming);
app.use('/api/auth', authRouter);
app.use('/api', checkToken);
app.use('/api/users', userRouter);
app.use('/api/tags', tagRouter);
app.use('/api/images', imageRouter);
app.use('/api', handleError);

module.exports = app;
