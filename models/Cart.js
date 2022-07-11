const { default: mongoose } = require("mongoose");
const { isEmail } = require("validator");

const dbURL =
    "mongodb+srv://iman244:tn6GeLcHmxgQobRu@imanlab.djjqy6q.mongodb.net/shop-play";

const Shema_cart = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
    },
    { timestamps: true }
);

// database connecting
let connection = mongoose.createConnection(dbURL);
connection.on("error", (error) => {
    console.log(error);
});

const Model_cart = connection.model("Cart", Shema_cart);

module.exports = { Model_cart };
