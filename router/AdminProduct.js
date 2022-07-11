const {
    addProduct,
    updateProduct,
    deleteProduct,
} = require("../controller/AdminProduct");

const router = require("express").Router();

//CREATE

router.post("/addProduct", addProduct);
router.put("/updateProduct", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
