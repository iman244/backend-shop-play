const { signUp, signIn } = require("../controller/authentication");
const router = require("express").Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);

module.exports = router;
