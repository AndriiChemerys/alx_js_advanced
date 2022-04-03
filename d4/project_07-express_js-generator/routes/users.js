// import express from "express";
// import fs from "fs";

const express = require("express");
const fs = require("fs");

const fsp = fs.promises;

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  // res.send(users);

  fsp
    .readFile("data/users.json", "utf8")
    .then((file) => res.send(file))
    .catch((error) => console.error(error));
});

module.exports = router;
