const express = require('express');
const path = require('path');
const fs = require("fs"); 

// Setting up express
const app = express();
const PORT = 8090;

// Sets up the Express app to handle data parsing and to read static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
require("./routes/apiRoutes")(app);

// HTML routes
require("./routes/htmlRoutes")(app);

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


