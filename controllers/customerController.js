const getcustomerAddPage = (req, res) => {
  res.render("customer/customerAdd", {
    title: "Add customer",
  });
};

export { getcustomerAddPage };
