const { Model_product } = require("../models/Product");

async function products(request, response) {
    query_new = request.query.new;
    query_categories = request.query.categories;
    try {
        if (query_new) {
            let products = await Model_product.find()
                .sort({ createdAt: -1 })
                .limit(1);
            response.status(200).json(products);
        } else if (query_categories) {
            let products = await Model_product.find({
                categories: {
                    $in: [query_categories],
                },
            });
            response.status(200).json(products);
        } else {
            let products = await Model_product.find();
            response.status(200).json(products);
        }
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

async function getProduct(request, response) {
    let productId = request.params.id;
    let product = await Model_product.findById(productId);
    response.status(200).json(product);
}

module.exports = { products, getProduct };
