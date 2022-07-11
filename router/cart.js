const router = require("express").Router();
const {
    createCart,
    getCart,
    updateCart,
    deleteCart,
} = require("../controller/cart");

router.post("/", createCart);
router.get("/:userId", getCart);
router.put("/update", updateCart);
router.delete("/update", deleteCart);

module.exports = router;
