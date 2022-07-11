const { Model_order } = require("../models/Order");

async function createOrder(request, response) {
    let userId = request.tokenData.id;
    try {
        let order = await Model_order.create({ userId, ...request.body });
        response.status(200).json(order);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

async function getOrder(request, response) {
    let orderId = request.params.id;
    try {
        let order = await Model_order.findById(orderId);
        response.status(200).json(order);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

async function deleteOrder(request, response) {
    let orderId = request.params.id;
    try {
        await Model_order.findByIdAndDelete(orderId);
        response.status(200).json({ message: "order deleted successfully" });
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

async function updateOrder(request, response) {
    let orderId = request.params.id;
    try {
        let order = await Model_order.findByIdAndUpdate(
            orderId,
            { $set: request.body },
            { new: true }
        );
        response.status(200).json(order);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

module.exports = { createOrder, getOrder, deleteOrder, updateOrder };
