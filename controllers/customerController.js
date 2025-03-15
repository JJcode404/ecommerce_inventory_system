const getcustomerAddPage = (req, res) => {
  res.render("customer/customerAdd", {
    title: "Add customer",
  });
};
const addCustomer = (req, res) => {
  const {
    firstName,
    firstLast,
    email,
    phoneNumber,
    gender,
    address,
    country,
    postalcode,
  } = req.body;
};

export { getcustomerAddPage, addCustomer };
