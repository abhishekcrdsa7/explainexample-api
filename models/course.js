const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    permaLink: {type: String, unique: true},
    description: {type: String}
});

module.exports = mongoose.model("course", courseSchema);