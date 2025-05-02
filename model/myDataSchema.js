const mongoose = require("mongoose");
const schema = mongoose.Schema;

const articleSchema = new schema({
    "userName": String,
    "password": String
});

const myData = mongoose.model("user" , articleSchema);

module.exports = myData;
