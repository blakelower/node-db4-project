const express = require("express");
// const recipeRouter from "../recipes/recipe-router.js"

const server = express();

server.get("/", (req, res) => {
  res.send("<h1>Good luck Chuck</h1>");
});

module.exports= server;