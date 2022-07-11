const router = require("express").Router();
const { getProduct, products } = require("../controller/product");

router.get("/", products);
router.get("/:id", getProduct);

module.exports = router;
