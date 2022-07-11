const {
    createOrder,
    deleteOrder,
    updateOrder,
    getOrder,
} = require("../controller/order");

const router = require("express").Router();

router.post("/", createOrder);
router.get("/:id", getOrder);
router.delete("/:id", deleteOrder);
router.put("/:id", updateOrder);

module.exports = router;
