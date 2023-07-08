const jwt = require('jsonwebtoken');
const utils = require('../utils/util');
const messages = require('../utils/messages');

module.exports = {
    async verifyJWT(req, res, next) {
        const token = req.headers.authorization && utils.extractBearerToken(req.headers.authorization)

        if (!token) {
            return res.status(401).json({ auth: false, message: messages.TOKEN_PROVIDED });
        }

        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err instanceof jwt.TokenExpiredError) {
                return res.status(403).json({ auth: false, message: messages.TOKEN_EXPIRED });
            } else if (err instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({ auth: false, message: messages.TOKEN_UNAUTHORIZED });
            }

            next();
        });
    },
}