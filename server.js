const express = require("express");
const path = require("path");
const fs = require("fs");

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3006;

const app = express();


// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.use(express.static('public'));

const { notes } = require('./db/db.json')



  // listener
  app.listen(PORT, () => {
    console.log(`API Server running on port ${PORT}`);
  });