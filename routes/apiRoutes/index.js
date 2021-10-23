const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const notes = require("../../db/db.json");

router.get("/notes", (req, res) => {
  fs.readFile(
    path.join(__dirname, "../../db/db.json"),
    "UTF-8",
    (err, notes) => {
      if (err) {
        throw err;
      }
      res.json(JSON.parse(notes));
    }
  );
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();
  let postNote = req.body;

  if (!postNote) {
    res.status(400).send("The note is empty.");
  } else {
    notes.push(postNote);

    fs.writeFile(
      path.join(__dirname, "../../db/db.json"),
      JSON.stringify(notes),
      (err) => {
        if (err) {
          throw err;
        } else {
          res.json(notes);
        }
      }
    );
  }
});

module.exports = router;
