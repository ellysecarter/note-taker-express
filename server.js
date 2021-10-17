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





app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });
  
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
  

  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });