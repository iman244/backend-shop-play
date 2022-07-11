const { Model_cart } = require("../models/Cart");
const { Model_user } = require("../models/User");

async function findUser(request, response) {
    try {
        const user = await Model_user.findById(request.params.id);
        const { Password, ...others } = user._doc;
        response.status(200).json(others);
    } catch (error) {
        response.status(500).json(error);
    }
}

//GET ALL USER
async function findAllUsers(request, response) {
    const query = request.query.new;
    try {
        const users = query
            ? await Model_user.find().sort({ _id: -1 }).limit(5)
            : await Model_user.find();
        response.status(200).json(users);
    } catch (error) {
        response.status(500).json(error);
    }
}

//GET USER STATS
async function getUserStatistics(request, response) {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await Model_user.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json(error);
    }
}

async function getAllCarts(request, response) {
    try {
        carts = await Model_cart.find();
        response.status(200).json(carts);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

module.exports = { findUser, findAllUsers, getUserStatistics, getAllCarts };
