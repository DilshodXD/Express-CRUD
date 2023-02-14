const express = require("express");
const router = express.Router();
const { Customer } = require('./models/customer')

router.get("/", async (req, res) => {
  const customer = await Customer.find().sort("name");
  res.send(customer);
});

router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) res.status(404).send("Id dagi manazil topilmadi");
  res.send(customer);
});

router.post("/", async (req, res) => {
  let customer = new Customer({
    name: req.body.name,
    isVip: req.body.isVip,
    phone: req.body.phone,
  });

  customer = await customer.save();
  res.status(201).send(customer);
});

module.exports = router;
