const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const dbDir = path.resolve(__dirname, "db");
const rawData = fs.readFileSync(path.resolve(dbDir, "db.json"));
const dbNotes = JSON.parse(rawData);





app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });
  
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
  

  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });