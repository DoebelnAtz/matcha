console.log(`.env path = ${__dirname + '/.env'}`);
require('dotenv').config({ path: __dirname + '/.env' });

const setup = require('./db/setup/index');

const nodeEnv = process.env.NODE_ENV;

const app = require('./app');

const PORT = process.env.PORT || 3001;
switch (nodeEnv) {
	case 'test':
		break;
	case 'setup':
		setup();
		break;
	default:
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
}
