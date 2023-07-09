const authService = require("../services/auth.service");

module.exports = {
    async login(req, res) {
        return await authService.login(req, res);
    },

    async logout(req, res) {
        return await authService.logout(req, res);
    },
}