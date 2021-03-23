const CustomError = require('../errors/customError');

function calculateAge(birthday) {
	// birthday is a date
	let ageDifMs = Date.now() - birthday.getTime();
	let ageDate = new Date(ageDifMs); // miliseconds from epoch
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const parseQuery = (q, ignoreEmpty = false) => {
	if (!ignoreEmpty && q.rows.length === 0) {
		throw new CustomError('', 404, 'There is no such item', '');
	} else {
		return q.rows;
	}
};

module.exports = {
	calculateAge,
	parseQuery,
};
