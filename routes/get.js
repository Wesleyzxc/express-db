const express = require("express");
const router = express.Router();

router.get("/staff", function(req, res) {
  req.db
    .from("staff")
    .select("*")
    .then(rows => {
      res.json(rows);
    })
    .catch(err => {
      // Shouldn't be here unless changes in db
      res.json({ Error: true, Message: "Error in MySQL query" });
    });
});

module.exports = router;
