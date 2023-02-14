const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Category", categorySchema);

router.get("/", async (req, res) => {
  const category = await Category.find().sort("name");
  res.send(category);
});

router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) res.status(404).send("Id dagi manazil topilmadi");
  res.send(category);
});

router.post("/", async (req, res) => {
  let category = new Category({
    name: req.body.name,
  });

  category = await category.save();
  res.status(201).send(category);
});

router.put("/:id", async (req, res) => {
  // let category = Category.findById(req.params.id);
  // category.name = req.body.name;

  const category = await Category.updateMany(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
      },
    }
  );

  if (!category) res.status(404).send("Id dagi manazil topilmadi");

  // category = await category.save();
  res.send(category).status(201);
});

router.delete("/:id", async (req, res) => {
  // let category = await Category.deleteOne(req.params.id);
  let category = await Category.findByIdAndRemove({_id: req.params.id})
  // let category = await Category.delete({ _id: req.params.id });

  if (!category) res.status(404).send("Id dagi manazil topilmadi");

  res.send(category);
});

module.exports = router;
