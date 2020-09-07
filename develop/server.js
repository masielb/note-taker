const express = require('express');
const path = require('path');
const fs = require("fs");

// Setting up express
const app = express();
const PORT = process.env.PORT || 8090;

// Sets up the Express app to handle data parsing and to read static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// API routes
require("./routes/apiRoutes")(app);

// HTML routes
require("./routes/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


