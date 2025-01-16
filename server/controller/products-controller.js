const products = [
  {
    id: 1,
    name: "iphone",
  },
  {
    id: 2,
    name: "laptop",
  },
];

exports.myFunction = (req, res) => {
  res.status(200).json({
    msg: "Succesfully get the products !",
    items: products,
    confirmed: true,
    isAdmin:false
  });
};
