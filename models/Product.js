const { default: mongoose } = require("mongoose");
const { isEmail } = require("validator");

const dbURL =
    "mongodb+srv://iman244:tn6GeLcHmxgQobRu@imanlab.djjqy6q.mongodb.net/shop-play";

const Shema_product = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        img: { type: String, required: true },
        categories: { type: Array },
        size: { type: String },
        color: { type: String },
        price: { type: Number, required: true },
    },
    { timestamps: true }
);

// database connecting
let connection = mongoose.createConnection(dbURL);
connection.on("error", (error) => {
    console.log(error);
});

const Model_product = connection.model("Product", Shema_product);

module.exports = Model_product;
