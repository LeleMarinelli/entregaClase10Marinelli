const express = require("express");
const productsRutes = require("./products/products.routes");

const router = express.Router();

//middlewares.
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//routes
router.use("/products", productsRutes);

module.exports = router;
