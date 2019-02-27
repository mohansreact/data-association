var mongoose = require("mongoose");


var postScheama = new mongoose.Schema({
    title: String,
    content: String
});


module.exports = mongoose.model("Post", postScheama);