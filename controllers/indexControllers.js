const getIndex = (req, res) => {
  res.render("index", { title: "Home Page", message: "Welcome to My Site" });
};

export { getIndex };
