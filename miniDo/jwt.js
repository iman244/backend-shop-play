const jwt = require("jsonwebtoken");

const attachTokenToRequest = (error, tokenData, request, response) => {
    if (!error) {
        request.tokenData = tokenData;
    } else {
        response.status(403).json("token is invalid");
    }
};

function TokenChecker(request, response, next) {
    let token = request.headers.token;
    if (token) {
        jwt.verify(token, process.env.JWT_PASS, (error, tokenData) => {
            attachTokenToRequest(error, tokenData, request, response);
        });
        request.tokenData.id === request.params.id || request.tokenData.isAdmin
            ? next()
            : response.status(403).json("token is invalid");
    } else {
        response.status(401).json("you are not authorized");
    }
}

function isAdmin(request, response, next) {
    let token = request.headers.token;
    if (token) {
        jwt.verify(token, process.env.JWT_PASS, (error, tokenData) => {
            attachTokenToRequest(error, tokenData, request, response);
        });
        request.tokenData.isAdmin
            ? next()
            : response.status(403).json("you are not authorized");
    } else {
        response.status(401).json("you are not authorized");
    }
}

module.exports = { TokenChecker, isAdmin };
