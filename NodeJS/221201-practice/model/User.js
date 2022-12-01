exports.user = function () {
  return { id: "1", pw: "1234" };
};

var users = `timmy//12341234//샬라메
tim//4321//티모시`;

exports.user2 = () => {
  return users;
};
