const express = require("express");
const router = express.Router({mergeParams: true});
const subject = require("../models/subject");
const _ = require("lodash");

router.get("/", (req, res) => {
    subject.find({course: req.params.courseId})
    .sort({name: 1})
    .then(subjects => {
        res.send(subjects);
    })
})

module.exports = router;