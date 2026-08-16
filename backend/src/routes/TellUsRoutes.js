const express = require("express");

const {
  submitTellUsForm,
} = require("../controllers/tellUsController");

const router = express.Router();

router.post("/", submitTellUsForm);

module.exports = router;