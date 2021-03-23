function calculateAge(birthday) {
  // birthday is a date
  let ageDifMs = Date.now() - birthday.getTime();
  let ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

module.exports = {
  calculateAge,
};
