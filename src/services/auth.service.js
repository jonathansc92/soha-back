const jwt = require('jsonwebtoken');

module.exports = {
    async login(req, res) {
        if (req.body.email === 'jonathan@teste.com') {

            const id = 1;
            var token = jwt.sign({ id }, process.env.SECRET, {
                algorithm: "HS256",
                expiresIn: 60 // 15 min
            });

            return res.status(200).send({ auth: true, token: token });
        }
    },

    async me(req, res) {
        return res.status(200).send({ auth: true, token: req.headers.authorization });
    },
}