const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve("develop/public/index.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.resolve("develop/public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../develop/public/index.html"));
});

module.exports = router;
