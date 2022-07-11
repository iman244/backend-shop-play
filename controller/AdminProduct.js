const { Model_product } = require("../models/Product");

async function addProduct(request, respone) {
    try {
        const newProduct = await Model_product.create(request.body);
        respone.status(200).json(newProduct);
    } catch (error) {
        console.log(error);
        respone.status(500).json(error);
    }
}

async function updateProduct(request, response, next) {
    try {
        const user = await Model_product.findByIdAndUpdate(
            request.params.id,
            {
                $set: request.body,
            },
            { new: true }
        );
        const { Password, ...others } = user._doc;
        response.status(200).json(others);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

async function deleteProduct(request, response) {
    try {
        await Model_product.findByIdAndDelete(request.params.id);
        response.status(200).json("product has been deleted");
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

module.exports = { addProduct, updateProduct, deleteProduct };
