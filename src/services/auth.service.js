const jwt = require('jsonwebtoken');
const messages = require('../utils/messages');
const users = require('../utils/users');

module.exports = {
    async login(req, res) {
        users.users.forEach(function (value) {
            if (req.body.email === value.email && req.body.password === value.password) {
                var token = jwt.sign({ name: value.name, email: value.email }, process.env.SECRET, {
                    algorithm: "HS256",
                    expiresIn: 60 // 15 min
                });

                return res.status(200).send({ auth: true, user: { name: value.name, email: value.email }, message: messages.AUTHENTICATED, token: token });
            } else {
                return res.status(400).send({ auth: false, message: messages.BAD_REQUEST });
            }
        });
    },

    async logout(req, res) {
        const authHeader = req.headers["authorization"];
        jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
            if (logout) {
                res.status(200).send({ message: messages.LOGOUT });
            } else {
                res.status(500).send({ message: messages.ERROR });
            }
        })
    },
}