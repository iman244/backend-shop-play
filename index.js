// global config
const port = 3000;

// importing libraries
const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const { isAdmin, TokenChecker } = require("./miniDo/jwt");
const Router_user = require("./router/authentication");
const Router_profile = require("./router/profile");
const Router_AdminStatistics = require("./router/AdminStatistics");
const Router_AdminProduct = require("./router/AdminProduct");
const Router_product = require("./router/product");
const Router_cart = require("./router/cart");
const Router_order = require("./router/order");
const app = express();

// app starting
app.listen(port, () => {
    console.log(`app started at port ${port}`);
});
app.use(express.json());

// Routers
app.use("/users", Router_user);
app.use("/products", Router_product);
app.use("/profile", TokenChecker, Router_profile);
app.use("/cart", TokenChecker, Router_cart);
app.use("/orders", TokenChecker, Router_order);
app.use("/admin/statistics", isAdmin, Router_AdminStatistics);
app.use("/admin/products", isAdmin, Router_AdminProduct);
