const { default: mongoose } = require("mongoose");
const { isEmail } = require("validator");

const dbURL =
    "mongodb+srv://iman244:tn6GeLcHmxgQobRu@imanlab.djjqy6q.mongodb.net/shop-play";

const Shema_order = new mongoose.Schema(
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
        amount: { type: Number, required: true },
        address: { type: Object, required: true },
        status: { type: String, default: "pending" },
    },
    { timestamps: true }
);

// database connecting
let connection = mongoose.createConnection(dbURL);
connection.on("error", (error) => {
    console.log(error);
});

const Model_order = connection.model("Order", Shema_order);

module.exports = Model_order;
