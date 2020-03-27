const router = require("express").Router({mergeParams: true});
const blog = require("../models/blog");

router.post("/", (req, res) => {
    blog.create(req.body)
    .then(b => {
        res.send(b);
    });
});

router.get("/", (req, res) => {
    blog.find({course: req.params.courseId, subject: req.params.subjectId})
    .then(bs => {
        res.send(bs);
    })
});

router.put("/:blogId", (req, res) => {
    blog.findByIdAndUpdate(req.params.blogId, req.body, {new: true})
    .then(b => {
        res.send(b);
    })
});

router.get("/:blogId", (req, res) => {
    blog.findById(req.params.blogId)
    .then(b => {
        res.send(b);
    })
});

module.exports = router;