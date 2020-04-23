const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: String,
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subject"
    },
    keywords: [{type: String}],
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course"
    },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    timeToRead: String,
    relatedTopics: [{type: String}],
    preRequisites: [{type: String}],
    permaLink: {type: String, unique: true, required: true},
    subjectPermaLink: {type: String},
    coursePermaLink: {type: String},
    blogNumber: {type: Number},
    description: {type: String},
    posterPicture: {type: String},
    publish: {type: Boolean, default: false}
});

module.exports = mongoose.model("blog", blogSchema);