const express = require("express");
const path = require("path");
const fs = require("fs");


const PORT = process.env.PORT || 3001;
const app = express();

const dbDir = path.resolve(__dirname, "db");
const rawData = fs.readFileSync(path.resolve(dbDir, "db.json"));
const dbNotes = JSON.parse(rawData);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// set id's
const setIds = () => {
  for (let i = 0; i < dbNotes.length; i++) {
    dbNotes[i].id = i;
  }
}

// display current notes
app.get("/api/notes", function (req, res) {
  setIds();
  return res.json(dbNotes);
});

// add a new note
app.post("/api/notes", function (req, res) {
  const newNote = req.body;
  dbNotes.push(newNote);

  setIds();

  fs.writeFileSync(path.resolve(dbDir, "db.json"), JSON.stringify(dbNotes), 'utf-8');
  res.json(newNote);
});

// notes page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });
  

// landing page
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
  


  // listener
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });