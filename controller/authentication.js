const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { Model_user } = require("../models/User.js");

async function signUp(request, response) {
    const { Username, Email } = request.body;
    try {
        const user = await Model_user.create({
            Username,
            Email,
            Password: CryptoJS.AES.encrypt(
                request.body.Password.toString(),
                process.env.SEC_PASS
            ).toString(),
        });
        console.log("after creating");
        const token = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_PASS,
            { expiresIn: 60 * 60 }
        );
        const { Password, ...others } = user._doc;
        response.status(200).json({ ...others, token });
    } catch (error) {
        console.log(error);
        response.status(500).send(error);
    }
}

async function signIn(request, response) {
    const { Username, Password } = request.body;
    try {
        const user = await Model_user.findOne({ Username });
        if (user) {
            let userPassword = CryptoJS.AES.decrypt(
                user.Password,
                process.env.SEC_PASS
            ).toString(CryptoJS.enc.Utf8);
            if (userPassword === Password.toString()) {
                const token = jwt.sign(
                    {
                        id: user._id,
                        isAdmin: user.isAdmin,
                    },
                    process.env.JWT_PASS,
                    { expiresIn: 60 * 60 }
                );
                const { Password, ...others } = user._doc;
                response.status(200).json({ ...others, token });
            } else {
                response.status(500).send("wrong credentials 1");
            }
        } else {
            response.status(500).send("wrong credentials 2");
        }
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

module.exports = {
    signUp,
    signIn,
};
