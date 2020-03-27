const mongoose = require("mongoose");
const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course"
    },
    permaLink: {type: String, unique: true},
    coursePermaLink: {type: String},
    description: {type: String}
});

module.exports = mongoose.model("subject", subjectSchema);