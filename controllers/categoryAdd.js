const getCategoryAddPage = (req, res) => {
  res.render("category/categoryAdd", {
    title: "Create roduct PCategory",
  });
};

export { getCategoryAddPage };
