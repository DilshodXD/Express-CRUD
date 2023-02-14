const mongoose = require("mongoose");

const customersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isVip:{
    type: Boolean,
    default: false,
  },
  phone:{
    type: String,
    required: true,
    minlength: 12,
  }
});

const Customer = mongoose.model("Custommer", customersSchema);

exports.Customer = Customer