const express = require("expresss");

const server = express();

server.use(express.json());

server.get("/", (req,res) => {
    res.send("<h1>Recipies</>");
});

module.exports = server;