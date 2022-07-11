const { Model_user } = require("../models/User");

async function updateCredentials(request, response, next) {
    if (request.body.Password) {
        request.body.Password = CryptoJS.AES.encrypt(
            request.body.Password.toString(),
            process.env.SEC_PASS
        ).toString();
    }
    try {
        const user = await Model_user.findByIdAndUpdate(
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

async function deleteUser(request, response) {
    try {
        await Model_user.findByIdAndDelete(request.params.id);
        response.status(200).json("user has been deleted");
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

module.exports = { updateCredentials, deleteUser };
