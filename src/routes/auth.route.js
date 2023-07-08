const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authValidation = require("../validations/auth.validation");
const jwtMiddleware = require('../middlewares/jwt.middleware');

router.post('/auth/login', authValidation.login, async function (req, res) {
    return await authController.login(req, res);
});

router.post('/auth/logout', jwtMiddleware.verifyJWT, async function (req, res) {
    return await authController.logout(req, res);
});

router.get('/auth/me', jwtMiddleware.verifyJWT, async function (req, res) {
    return await authController.me(req, res);
});

module.exports = router;