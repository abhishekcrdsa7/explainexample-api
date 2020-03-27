const express = require("express");
const router = express.Router();
const course = require("../models/course");
const _ = require("lodash");

router.get("/", (req, res) => {
    course.find({})
    .then((courses) => {
        res.send(courses);
    })
    .catch(err =>{
        res.send(err);
    })
});

module.exports = router;