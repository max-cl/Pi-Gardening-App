const authController = require("../controllers/auth.controller");

module.exports = function (app) {
    // app.get("/api/devices", devicesController.getDevices);
    app.post("/api/auth", authController.login);
    // app.put("/api/devices/:id", devicesController.updateDevice);
    // app.delete("/api/devices/:id", devicesController.deleteDevice);
};
