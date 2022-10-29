const express = require("express");
const router = express.Router(); 

router.get("/", (req, res) => {
    res.send({data: "Data Listed"});
});

router.post("/", (req, res) => {
    res.send({data: "Created User"});
});

router.put("/", (req, res) => {
    res.send({data: "Update User"});
});

router.delete("/", (req, res) => {
    res.send({data: "Delete User"});
});

 
module.exports = router;
