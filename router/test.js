const {
    createTest,
    deleteTest,
    updateTest,
    getTest,
} = require("../controller/test");

const router = require("express").Router();

router.post("/", createTest);
router.get("/:id", getTest);
router.delete("/:id", deleteTest);
router.put("/:id", updateTest);

module.exports = router;
