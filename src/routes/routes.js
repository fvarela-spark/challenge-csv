const express = require("express");
const router = express.Router();
const csvController = require("../controllers/csv.controller");
const upload = require("../middlewares/upload");
const filter = require("../middlewares/filter")

let routes = (app) => {
  router.post("/upload", upload.single("file"), filter, csvController.upload);
  app.use("/api/csv", router);
};

module.exports = routes;
