const getproductAddPage = (req, res) => {
  res.render("product/productAdd", {
    title: "Add Product",
  });
};

export { getproductAddPage };
