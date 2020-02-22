const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "The World Database API" });
});

router.get("/offences", function(req, res) {
  req.db
    .from("staff")
    .select("*")
    .then(rows => {
      console.log(rows);
      res.json({ rows });
    })
    .catch(err => {
      // Shouldn't be here unless changes in db
      res.json({ Error: true, Message: "Error in MySQL query" });
    });
});

module.exports = router;
