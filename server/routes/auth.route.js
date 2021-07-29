const authController = require("../controllers/auth.controller");

module.exports = function (app) {
    app.post("/api/auth/signin", authController.signin);
    app.post("/api/auth/signup", authController.signup);
};
