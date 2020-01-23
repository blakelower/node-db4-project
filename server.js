const express = require("express");
// const recipeRouter from "../recipes/recipe-router.js"

const server = express();

server.use(express.json());
//server.use("/api/recipes", recipeRouter);

server.get("/", (req, res) => {
  res.send("<h1>Good luck Chuck</h1>");
});

module.exports= server;