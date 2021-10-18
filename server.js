const express = require("express");
const path = require("path");
const fs = require("fs");

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));

const { notes } = require('./db/db.json')

  // listener
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });