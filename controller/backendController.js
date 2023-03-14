exports.index = (req, res) => {
  res.render("backend/index");
};

exports.register = (req, res) => {
  res.render("backend/register");
};

exports.create_user = (req, res) => {
  //getting the result on terminal
  console.log(req.body);
};

exports.login = (req, res) => {
  res.render("backend/login");
};
