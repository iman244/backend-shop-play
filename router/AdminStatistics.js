const {
    findUser,
    findAllUsers,
    getUserStatistics,
    getAllCarts,
} = require("../controller/AdminStatistics");
const router = require("express").Router();

router.get("/find/:id", findUser); //GET USER
router.get("/findAllUsers", findAllUsers); //GET ALL USER
router.get("/authStatistics", getUserStatistics); //GET USER STATS
router.get("/userCarts", getAllCarts);

module.exports = router;
