const router = require("express").Router({mergeParams: true});
const _ = require("lodash");
const subject = require("../models/subject");
const blog = require("../models/blog");

router.get('/subject', (req, res) => {
    subject.find({})
    .populate('course')
    .sort({
        name: 1
    })
    .then(subjects => {
        let obj = _.groupBy(subjects, `course.name`);
        res.send(obj);
    })
});

router.get("/:coursePermaLink/:subjectPermaLink/blog", (req, res) => {
    blog.find({
        subjectPermaLink: req.params.subjectPermaLink,
        coursePermaLink: req.params.coursePermaLink
    })
    .sort({blogNumber: 1})
    .then(bs => {
        res.send(bs);
    })
});

module.exports = router;