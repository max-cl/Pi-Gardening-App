const dashboardController = require("../controllers/dashboard.controller");

module.exports = function (app) {
    app.get("/api/dashboard", dashboardController.getDashboard);
};
