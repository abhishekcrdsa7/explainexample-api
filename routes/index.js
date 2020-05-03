const router = require("express").Router({mergeParams: true});
const _ = require("lodash");
const Fuse = require("fuse.js");
const subject = require("../models/subject");
const blog = require("../models/blog");


router.get('/search', (req, res) => {
    blog.find({publish: true})
    .lean()
    .populate('subject')
    .exec((err, bs) => {
        blogs = bs;
        const options = {
            keys: ['keywords'],
            threshold: 0.5
        };
        const fuse = new Fuse(blogs, options);
        result = fuse.search(req.query.s);
        let r = {
            "search result": result.map(i => {
                return i.item;
            })
        };
        res.send(r);
    })
});

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

router.get('/blog', (req, res) => {
    blog.find({publish: true})
    .populate('subject')
    .select('-content')
    .then(bs => {
        let obj = _.groupBy(bs, 'subject.name');
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