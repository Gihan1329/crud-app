const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

module.exports = mongoose.model("User", userSchema);
