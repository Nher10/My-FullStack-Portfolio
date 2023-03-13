exports.index = function (req, res) {
  res.render("frontend/index");
};

exports.blog = function (req, res) {
  res.render("frontend/blog");
};

exports.about = function (req, res) {
  res.render("frontend/about");
};

exports.contact = function (req, res) {
  res.render("frontend/contact");
};
