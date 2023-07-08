const jwt = require('jsonwebtoken');
const utils = require('../utils/util');

module.exports = {
    async verifyJWT(req, res, next) {
        const token = req.headers.authorization && utils.extractBearerToken(req.headers.authorization)

        if (!token) {
            return res.status(401).json({ auth: false, message: 'No token provided.' });
        }

        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err instanceof jwt.TokenExpiredError) {
                return res.status(403).json({ auth: false, message: 'Token expired.' });
            } else if (err instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({ auth: false, message: 'Failed to authenticate token.' });
            }

            next();
        });
    },
}