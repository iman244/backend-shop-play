// global config
const port = 3000;

// importing libraries
const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Router_user = require("./router/user");
const app = express();

// app starting
app.listen(port, () => {
    console.log(`app started at port ${port}`);
});
app.use(express.json());

// Routers
app.use(Router_user);
