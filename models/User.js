const { default: mongoose } = require("mongoose");
const { isEmail } = require("validator");

const dbURL =
    "mongodb+srv://iman244:tn6GeLcHmxgQobRu@imanlab.djjqy6q.mongodb.net/shop-play";

const Schema_user = new mongoose.Schema(
    {
        Username: {
            type: String,
            required: [true, "Please Enter an Username!"],
            unique: true,
        },
        Email: {
            type: String,
            required: [true, "Please Enter an Email!"],
            unique: true,
            lowercase: true,
            validate: [isEmail, "Please Enter a Valid Email ;("],
        },
        Password: {
            type: String,
            required: [true, "Please Enter an Password"],
            minlength: [6, "Minimum Password Length is 6 Characters"],
        },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
);

// database connecting
let connection = mongoose.createConnection(dbURL);
connection.on("error", (error) => {
    console.log(error);
});

const Model_user = connection.model("User", Schema_user);

module.exports = { Model_user };
