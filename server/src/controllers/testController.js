const query = require('../db/index');
const catchErrors = require('../errors/catchErrors');
const test = catchErrors(async(req, res) => {
    res.json('success');
}, 'Failed to test');

module.exports = {test};