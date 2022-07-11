const { Model_cart } = require("../models/Cart");

async function createCart(request, response) {
    try {
        let cart = await Model_cart.create(request.body);
        response.status(200).json(cart);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

async function getCart(request, response) {
    let userId = request.params.userId;
    try {
        let cart = Model_cart.findOne({ userId });
        response.status(200).json(cart);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

async function updateCart(request, response) {
    try {
        let updatedCart = await Model_cart.findByIdAndUpdate(
            request.params.id,
            { $set: request.body },
            { new: true }
        );
        response.status(200).json(updatedCart);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

async function deleteCart(request, response) {
    try {
        await Model_cart.findByIdAndDelete(request.params.id);
        response.status(200).json({ message: "cart deleted successfully" });
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

module.exports = { createCart, getCart, updateCart, deleteCart };
