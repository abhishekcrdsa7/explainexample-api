const router = require("express").Router({mergeParams: true});
const email = require("../models/email");

router.post("/", (req, res) => {
    try {
        email.create(req.body)
        .then(e => {
            res.send(e);
        })
        .catch(err => {
            res.send(err);
        })
    } catch(err) {
        res.send(err);
    }
});

module.exports = router;