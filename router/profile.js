const { deleteUser, updateCredentials } = require("../controller/profile");

const router = require("express").Router();

router.put("/:id", updateCredentials); //UPDATE USER
router.delete("/:id", deleteUser); //DELETE USER

module.exports = router;
