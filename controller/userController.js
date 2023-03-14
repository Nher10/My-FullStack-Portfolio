exports.index = (req, res) => {
  res.render("frontend/index");
};

exports.blog = (req, res) => {
  res.render("frontend/blog");
};

exports.about = (req, res) => {
  res.render("frontend/about");
};

exports.contact = (req, res) => {
  res.render("frontend/contact");
};
